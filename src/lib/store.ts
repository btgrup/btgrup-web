import fs from 'fs';
import path from 'path';
import { initialSettings, initialTickets, initialQuotes, initialProducts, initialAdmin } from './initialData';
import { CompanySettings, ProductItem, QuoteRequest, ServiceTicket, AdminAuth } from './types';
import { getTurkishDateTime } from './dateUtils';

interface DatabaseData {
  auth: AdminAuth;
  settings: CompanySettings;
  tickets: ServiceTicket[];
  quotes: QuoteRequest[];
  products: ProductItem[];
}

const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;
const dataDir = isVercel ? path.join('/tmp', 'btgrup-data') : path.join(process.cwd(), 'data');
const defaultDbFile = path.join(process.cwd(), 'data', 'db.json');
const dbFile = path.join(dataDir, 'db.json');

// Bellek içi önbellek / fallback
let memoryData: DatabaseData = {
  auth: initialAdmin,
  settings: initialSettings,
  tickets: initialTickets,
  quotes: initialQuotes,
  products: initialProducts,
};

function ensureDb(): DatabaseData {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(dbFile)) {
      if (fs.existsSync(defaultDbFile)) {
        try {
          const content = fs.readFileSync(defaultDbFile, 'utf-8');
          fs.writeFileSync(dbFile, content, 'utf-8');
          const parsed = JSON.parse(content);
          memoryData = parsed;
          return parsed;
        } catch {}
      }
      fs.writeFileSync(dbFile, JSON.stringify(memoryData, null, 2), 'utf-8');
      return memoryData;
    }
    const raw = fs.readFileSync(dbFile, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!parsed.auth) {
      parsed.auth = initialAdmin;
      try {
        fs.writeFileSync(dbFile, JSON.stringify(parsed, null, 2), 'utf-8');
      } catch {}
    }
    memoryData = parsed;
    return parsed;
  } catch (error) {
    console.error("DB erişim hatası, bellek kullanılıyor:", error);
    return memoryData;
  }
}

function saveDb(data: DatabaseData) {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8');
    memoryData = data;
  } catch (error) {
    console.error("DB yazma hatası:", error);
    memoryData = data;
  }
}

export const getDb = () => ensureDb();

// Admin Kimlik Doğrulama
export const getAdminAuth = (): AdminAuth => {
  return ensureDb().auth || initialAdmin;
};

export const updateAdminAuth = (updates: Partial<AdminAuth>): AdminAuth => {
  const db = ensureDb();
  db.auth = { ...db.auth, ...updates };
  saveDb(db);
  return db.auth;
};

// Ticket İşlemleri
export const getTickets = (): ServiceTicket[] => ensureDb().tickets;

export const getTicketByNumber = (ticketNumber: string): ServiceTicket | undefined => {
  const normalized = ticketNumber.trim().toUpperCase();
  return ensureDb().tickets.find(t => t.ticketNumber.toUpperCase() === normalized);
};

export const createTicket = (ticket: Omit<ServiceTicket, 'id' | 'createdAt' | 'updatedAt'>): ServiceTicket => {
  const db = ensureDb();
  const nowStr = getTurkishDateTime();
  const newTicket: ServiceTicket = {
    ...ticket,
    id: Date.now().toString(),
    createdAt: nowStr,
    updatedAt: nowStr
  };
  db.tickets.unshift(newTicket);
  saveDb(db);
  return newTicket;
};

export const updateTicket = (id: string, updates: Partial<ServiceTicket>): ServiceTicket | null => {
  const db = ensureDb();
  const index = db.tickets.findIndex(t => t.id === id);
  if (index === -1) return null;
  db.tickets[index] = {
    ...db.tickets[index],
    ...updates,
    updatedAt: getTurkishDateTime()
  };
  saveDb(db);
  return db.tickets[index];
};

export const deleteTicket = (id: string): boolean => {
  const db = ensureDb();
  const initialLen = db.tickets.length;
  db.tickets = db.tickets.filter(t => t.id !== id);
  if (db.tickets.length !== initialLen) {
    saveDb(db);
    return true;
  }
  return false;
};

// Teklif İşlemleri
export const getQuotes = (): QuoteRequest[] => ensureDb().quotes;

export const createQuote = (quote: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>): QuoteRequest => {
  const db = ensureDb();
  const newQuote: QuoteRequest = {
    ...quote,
    id: 'q-' + Date.now().toString(),
    status: 'Yeni',
    createdAt: getTurkishDateTime()
  };
  db.quotes.unshift(newQuote);
  saveDb(db);
  return newQuote;
};

export const updateQuoteStatus = (id: string, status: QuoteRequest['status']): QuoteRequest | null => {
  const db = ensureDb();
  const index = db.quotes.findIndex(q => q.id === id);
  if (index === -1) return null;
  db.quotes[index].status = status;
  saveDb(db);
  return db.quotes[index];
};

export const deleteQuote = (id: string): boolean => {
  const db = ensureDb();
  const initialLen = db.quotes.length;
  db.quotes = db.quotes.filter(q => q.id !== id);
  if (db.quotes.length !== initialLen) {
    saveDb(db);
    return true;
  }
  return false;
};

// Ürün & Paket İşlemleri
export const getProducts = (): ProductItem[] => ensureDb().products;

export const createProduct = (product: Omit<ProductItem, 'id'>): ProductItem => {
  const db = ensureDb();
  const newProduct: ProductItem = {
    ...product,
    id: 'p-' + Date.now().toString()
  };
  db.products.push(newProduct);
  saveDb(db);
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<ProductItem>): ProductItem | null => {
  const db = ensureDb();
  const index = db.products.findIndex(p => p.id === id);
  if (index === -1) return null;
  db.products[index] = { ...db.products[index], ...updates };
  saveDb(db);
  return db.products[index];
};

export const deleteProduct = (id: string): boolean => {
  const db = ensureDb();
  const initialLen = db.products.length;
  db.products = db.products.filter(p => p.id !== id);
  if (db.products.length !== initialLen) {
    saveDb(db);
    return true;
  }
  return false;
};

// Ayarlar
export const getSettings = (): CompanySettings => ensureDb().settings;

export const updateSettings = (updates: Partial<CompanySettings>): CompanySettings => {
  const db = ensureDb();
  db.settings = { ...db.settings, ...updates };
  saveDb(db);
  return db.settings;
};
