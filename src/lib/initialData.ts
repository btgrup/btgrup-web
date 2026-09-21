import { CompanySettings, ProductItem, QuoteRequest, ServiceTicket, AdminAuth } from "./types";

export const initialAdmin: AdminAuth = {
  username: "admin",
  password: "btgrup2026",
};

export const initialSettings: CompanySettings = {
  companyName: "BtGrup Bilgi Teknolojileri LTD. ŞTİ.",
  title: "BtGrup | Web Tasarım, Hosting, Teknik Servis ve Bilgisayar Sistemleri",
  slogan: "Bilişim Sektöründe 2000 Yılından Bugüne Güvenilir Çözüm Ortağınız",
  domain: "btgrup.com",
  website: "https://btgrup.com",
  phone: "+903322387078",
  phoneDisplay: "0 (332) 238 70 78",
  secondaryPhone: "0 (332) 238 73 08",
  fax: "0 (332) 238 70 79",
  whatsapp: "903322387078",
  email: "info@btgrup.com",
  address: "Büyükkayacık Mah. 3.Organize Sanayi Bölgesi 9 Nolu Sokak No:34/1 Selçuklu",
  city: "Konya",
  workingHours: "Pazartesi - Cumartesi: 08:30 - 18:30",
  supportHours: "Profesyonel Sunucu & Teknik Destek"
};

export const initialTickets: ServiceTicket[] = [
  {
    id: "1",
    ticketNumber: "BT-2024-101",
    customerName: "Ahmet Yılmaz (Yılmaz Lojistik)",
    customerPhone: "0532 111 22 33",
    customerEmail: "ahmet@yilmazlojistik.com",
    deviceType: "Dizüstü Bilgisayar",
    deviceBrandModel: "Lenovo ThinkPad E14 Gen 4",
    serialNumber: "PF39X812",
    issueDescription: "Cihaz açılmıyor, şarj ışığı yanıp sönüyor. Sıvı teması şüphesi var.",
    technicianNotes: "Anakart besleme devresi mosfetleri incelendi. Kısa devre giderildi, test aşamasında.",
    status: "Onarıldı / Hazır",
    estimatedCost: 1850,
    currency: "₺",
    createdAt: "2026-09-10 11:30",
    updatedAt: "2026-09-13 16:45"
  },
  {
    id: "2",
    ticketNumber: "BT-2024-102",
    customerName: "Merve Kaya",
    customerPhone: "0544 222 33 44",
    deviceType: "Masaüstü İş İstasyonu (PC)",
    deviceBrandModel: "Custom Workstation i9-13900K / RTX 4080",
    serialNumber: "WS-9021",
    issueDescription: "Ağır render alırken mavi ekran (BSOD) verip kapanıyor. Aşırı ısınma mevcut.",
    technicianNotes: "Sıvı soğutma pompası arızası tespit edildi. Yeni Corsair soğutma sipariş edildi.",
    status: "Parça Bekleniyor",
    estimatedCost: 4500,
    currency: "₺",
    createdAt: "2026-09-12 14:15",
    updatedAt: "2026-09-13 10:20"
  },
  {
    id: "3",
    ticketNumber: "BT-2024-103",
    customerName: "Kemal Demir",
    customerPhone: "0555 333 44 55",
    deviceType: "Ofis Sunucusu (Tower Server)",
    deviceBrandModel: "Dell PowerEdge T340",
    serialNumber: "CN-0012-DELL",
    issueDescription: "RAID 1 dizisinde 2. disk 'Degraded' uyarısı verdi. Sistem yavaşladı.",
    technicianNotes: "2 TB Enterprise SAS disk değişimi yapıldı, RAID rebuild işlemi %78 tamamlandı.",
    status: "İnceleniyor",
    estimatedCost: 3200,
    currency: "₺",
    createdAt: "2026-09-14 08:30",
    updatedAt: "2026-09-14 09:10"
  }
];

export const initialQuotes: QuoteRequest[] = [];

export const initialProducts: ProductItem[] = [
  // Hosting Paketleri
  {
    id: "p-host-1",
    name: "Eko Web Hosting",
    category: "Hosting",
    badge: "Bireysel / Başlangıç",
    price: 699,
    currency: "₺",
    billingPeriod: "Yıllık",
    description: "Kişisel siteler ve başlangıç seviyesi kurumsal tanıtım siteleri için hızlı ve ekonomik hosting.",
    features: [
      "1 Alan Adı Barındırma",
      "10 GB NVMe SSD Alanı",
      "Limitsiz Trafik / Bant Genişliği",
      "5 Adet Kurumsal E-posta",
      "Ücretsiz SSL Sertifikası",
      "cPanel Kontrol Paneli",
      "Günlük Otomatik Yedekleme"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "p-host-2",
    name: "Kurumsal Pro Cloud Hosting",
    category: "Hosting",
    badge: "En Çok Tercih Edilen",
    price: 1499,
    currency: "₺",
    billingPeriod: "Yıllık",
    description: "Şirketler, e-ticaret siteleri ve yüksek ziyaretçili kurumsal web portalları için yüksek performans.",
    features: [
      "5 Alan Adı Barındırma",
      "50 GB Yüksek Hızlı NVMe SSD",
      "Limitsiz Trafik & Bant Genişliği",
      "50 Adet Kurumsal E-posta",
      "LiteSpeed Web Server + LSCache",
      "Ücretsiz SSL & Anti-DDoS Koruması",
      "Haftalık ve Günlük İkili Yedekleme",
      "Profesyonel Öncelikli Teknik Destek"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "p-host-3",
    name: "VDS / Bulut Sunucu (Cloud Server)",
    category: "Hosting",
    badge: "Maksimum Güç",
    price: 3499,
    currency: "₺",
    billingPeriod: "Yıllık",
    description: "Özel kaynaklara ihtiyaç duyan yazılımlar, ERP ve yoğun veritabanı uygulamaları için adanmış güç.",
    features: [
      "4 vCPU Intel Xeon / AMD Epyc",
      "8 GB DDR4 ECC RAM",
      "120 GB NVMe SSD Enterprise",
      "1 Gbps Limitsiz Port Hızı",
      "1 Adet Sabit Statik IP",
      "Linux / Windows Server Seçeneği",
      "Tam Root / RDP Erişimi",
      "Yönetilen (Managed) Servis Desteği"
    ],
    inStock: true,
    featured: false
  },

  // Web Paketleri
  {
    id: "p-web-1",
    name: "Kurumsal Tanıtım Web Sitesi",
    category: "Web Paketi",
    badge: "Hızlı Teslimat",
    price: 9500,
    currency: "₺",
    billingPeriod: "Tek Seferlik",
    description: "Şirketinizin dijital vitrini. Mobil uyumlu, SEO altyapılı, hızlı ve kolay yönetilebilir admin panelli site.",
    features: [
      "Özel Mobil Uyumlu Modern Tasarım",
      "Kullanıcı Dostu İçerik Yönetim Paneli",
      "Hizmetlerimiz, Galeri, Blog ve İletişim",
      "Google SEO Optimizasyonu & Harita Kaydı",
      "WhatsApp & Canlı Destek Entegrasyonu",
      "1 Yıl Ücretsiz Hosting + .com Domain + SSL",
      "Kurumsal E-posta Kurulumları",
      "Teknik Destek ve Eğitim"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "p-web-2",
    name: "E-Ticaret & Satış Platformu",
    category: "Web Paketi",
    badge: "Satışa Hazır",
    price: 19500,
    currency: "₺",
    billingPeriod: "Tek Seferlik",
    description: "Ürünlerinizi internetten güvenle satabileceğiniz, sanal pos ve kargo entegrasyonlu eksiksiz e-ticaret altyapısı.",
    features: [
      "Sınırsız Ürün & Kategori Ekleme",
      "İyzico / PayTR Sanal Pos Entegrasyonu",
      "Yurtiçi, Aras, MNG Kargo Entegrasyonu",
      "Stok & Sipariş Takip Paneli",
      "Kupon & İndirim Yönetim Modülü",
      "SMS & E-posta Bildirim Sistemi",
      "Gelişmiş Satış Raporlama Grafikleri",
      "1 Yıl Yüksek Hızlı Cloud Hosting Dahil"
    ],
    inStock: true,
    featured: true
  },

  // Donanım & Bilgisayar Satışı
  {
    id: "p-hw-1",
    name: "Btgrup Pro Kurumsal Ofis PC",
    category: "Bilgisayar",
    badge: "Stokta",
    price: 17400,
    currency: "₺",
    billingPeriod: "Tek Seferlik",
    description: "Ofisler, muhasebe programları ve günlük kurumsal işler için optimize edilmiş sessiz ve dayanıklı kasa.",
    features: [
      "Intel Core i5 12400 İşlemci",
      "16 GB 3200MHz DDR4 RAM",
      "512 GB M.2 NVMe SSD",
      "Intel UHD Graphics 730",
      "500W 80+ Sessiz Güç Kaynağı",
      "Orijinal Windows 11 Pro Lisanslı",
      "2 Yıl Yerinde / Servis Garantili"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "p-hw-2",
    name: "Lenovo ThinkPad E16 Gen 1 Laptop",
    category: "Bilgisayar",
    badge: "Popüler",
    price: 28900,
    currency: "₺",
    billingPeriod: "Tek Seferlik",
    description: "Dayanıklı kasa, uzun pil ömrü ve ergonomik klavyesiyle yöneticiler ve profesyoneller için ideal laptop.",
    features: [
      "Intel Core i7 1355U İşlemci",
      "16 GB DDR4 RAM (32 GB'a kadar artırılabilir)",
      "1 TB NVMe SSD",
      "16 inç WUXGA IPS Parlama Yapmaz Ekran",
      "Aydınlatmalı Türkçe Klavye & Parmak İzi",
      "Orijinal Windows 11 Pro Kurulu",
      "2 Yıl Lenovo Türkiye Garantili"
    ],
    inStock: true,
    featured: true
  },

  // Yazılım & Lisanslar
  {
    id: "p-soft-1",
    name: "Microsoft Windows 11 Pro Orijinal Lisans",
    category: "Yazılım & Lisans",
    badge: "Anında Teslim",
    price: 850,
    currency: "₺",
    billingPeriod: "Tek Seferlik",
    description: "Şirketler için BitLocker şifreleme ve uzak masaüstü destekli orijinal ticari işletim sistemi lisansı.",
    features: [
      "Orijinal Dijital Aktivasyon Anahtarı",
      "Süresiz (Ömür Boyu) Kullanım",
      "Tüm Güncellemelere Açık",
      "Fatura ile Teslimat",
      "Uzaktan Kurulum Desteği"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "p-soft-2",
    name: "Microsoft 365 İş Standardı (İşletmeler İçin)",
    category: "Yazılım & Lisans",
    badge: "Kurumsal",
    price: 3450,
    currency: "₺",
    billingPeriod: "Yıllık",
    description: "Word, Excel, PowerPoint, Outlook, Teams ve 1 TB OneDrive bulut depolama içeren kurumsal paket.",
    features: [
      "Masaüstü ve Web Office Uygulamaları",
      "Kullanıcı Başına 1 TB Güvenli Bulut Depolama",
      "5 Cihaza Eşzamanlı Kurulum İmkanı",
      "Gelişmiş Tehdit Koruması",
      "Kurumsal E-posta (Exchange) Dahil"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "p-soft-3",
    name: "ESET PROTECT Entry Kurumsal Antivirüs (5 Kullanıcı)",
    category: "Yazılım & Lisans",
    badge: "Siber Güvenlik",
    price: 2600,
    currency: "₺",
    billingPeriod: "Yıllık",
    description: "Şirket bilgisayarlarınızı fidye yazılımları, truva atları ve siber saldırılara karşı merkezi olarak korur.",
    features: [
      "5 Bilgisayar / Cihaz Koruması",
      "Merkezi Bulut Yönetim Konsolu",
      "Fidye Yazılımı (Ransomware) Koruması",
      "Ağ Saldırısı Koruması & Güvenlik Duvarı",
      "Btgrup Tarafından Kurulum ve Yönetim"
    ],
    inStock: true,
    featured: false
  }
];
