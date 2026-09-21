export type ServiceStatus = 
  | 'Kabul Edildi'
  | 'İnceleniyor'
  | 'Parça Bekleniyor'
  | 'Onay Bekliyor'
  | 'Onarıldı / Hazır'
  | 'Teslim Edildi'
  | 'İptal Edildi';

export interface ServiceTicket {
  id: string;
  ticketNumber: string; // Örn: BT-9482
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deviceType: string; // Laptop, Masaüstü, Sunucu, Yazıcı vb.
  deviceBrandModel: string; // Örn: Asus ROG Strix G16
  serialNumber?: string;
  issueDescription: string;
  technicianNotes?: string;
  status: ServiceStatus;
  estimatedCost?: number;
  currency?: string;
  createdAt: string;
  updatedAt: string;
}

export type ServiceCategory = 
  | 'Web Tasarım & Yazılım'
  | 'Domain & Hosting'
  | 'Teknik Servis & Ağ Çözümleri'
  | 'Bilgisayar & Donanım Satışı'
  | 'Yazılım & Lisans Satışı'
  | 'Diğer';

export interface QuoteRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  category: ServiceCategory;
  details: string;
  status: 'Yeni' | 'İncelendi' | 'Teklif İletildi' | 'Onaylandı' | 'İptal';
  createdAt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Bilgisayar' | 'Donanım' | 'Yazılım & Lisans' | 'Hosting' | 'Web Paketi';
  badge?: string;
  price: number;
  currency: string;
  billingPeriod?: 'Aylık' | 'Yıllık' | 'Tek Seferlik';
  description: string;
  features: string[];
  inStock?: boolean;
  featured?: boolean;
}

export interface CompanySettings {
  companyName: string;
  title: string;
  slogan: string;
  domain?: string;
  website?: string;
  phone: string;
  phoneDisplay: string;
  secondaryPhone?: string;
  fax?: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  supportHours: string;
  googleAnalyticsId?: string;
}

export interface AdminAuth {
  username: string;
  password: string;
}
