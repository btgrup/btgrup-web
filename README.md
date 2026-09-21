# BTGRUP BİLGİ TEKNOLOJİLERİ - KURUMSAL WEB PLATFORMU & YÖNETİM PANELİ

Bu proje, **Btgrup Bilgi Teknolojileri** firması için özel olarak tasarlanmış, doğrudan hizmetlere odaklanan modern bir kurumsal web platformu ve yönetim panelidir.

---

## 🚀 Öne Çıkan Özellikler

### 🌐 1. Kurumsal Ön Yüz (Public Web Sitesi)
- **Modern Kurumsal Tasarım**: Bilişim sektörüne uygun lacivert & camgöbeği teknoloji odaklı renk paleti, duyarlı (responsive) mobil ve tablet uyumu.
- **4 Ana Hizmet Alanı & Detay Sayfaları**:
  - 🌐 *Web Tasarım & Kodlama*: Kurumsal siteler, e-ticaret, SEO uyumlu altyapı ve özel yazılımlar.
  - ☁️ *Domain & Cloud Hosting*: Canlı alan adı tescili, NVMe SSD bulut sunucu, kurumsal e-posta ve SSL.
  - 🛠️ *Bilgisayar Teknik Servis*: Garantili donanım onarımı, kurumsal yıllık bakım anlaşması, network kurulumu.
  - 💻 *Bilgisayar & Lisanslı Yazılım*: OEM PC, iş istasyonları, notebook tedariği, orijinal Windows 11, Office 365 ve ESET antivirüs.
- **Canlı Resmi Domain (Alan Adı) Sorgulama Motoru**: Verisign RDAP ve Google Cloud DNS omurgasına bağlı canlı .com, .com.tr, .net, .org, .io sorgulama.
- **Online Teklif & İletişim Formu**: Müşterilerin anında talep ve teklif oluşturabilmesi.
- **WhatsApp Canlı Destek Butonu**: Ziyaretçilerin doğrudan WhatsApp üzerinden iletişim kurması.

---

### 🛡️ 2. Yönetim Paneli (Admin Dashboard)
Yönetim paneline web sitesinin üst çubuğundaki **"Yönetici Girişi"** linkinden veya doğrudan `http://localhost:3000/admin` adresinden erişebilirsiniz.

- **Genel Bakış (Analytics)**:
  - Toplam gelen müşteri talep sayısı
  - Bekleyen ve işlem yapılan formlar
  - Hizmet dallarına göre talep dağılımı
  - Son gelen müşteri talepleri özeti
- **Gelen Teklifler & Hizmet Talepleri (`/admin/teklifler`)**:
  - Web sitesinden gelen tüm servis ve teklif taleplerini inceleme
  - Durum yönetimi (*Yeni, İncelendi, Teklif İletildi, Onaylandı, İptal*)
  - Tek tıkla doğrudan arama veya WhatsApp sohbeti başlatma
- **Firma & Site Ayarları (`/admin/ayarlar`)**:
  - Firma adı, unvanı, telefon, WhatsApp numarası, adres, çalışma saatleri ve destek metinlerini yönetme

---

## 🛠️ Kurulum ve Çalıştırma

Proje dizinine geçiş yapın ve geliştirme sunucusunu başlatın:

```bash
cd "C:\Users\Safa Ceylan\Projects\btgrup"
npm run dev
```

Tarayıcınızda açın:
- **Web Sitesi**: [http://localhost:3000](http://localhost:3000)
- **Yönetim Paneli**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Hizmet Talebi / Teklif Al**: [http://localhost:3000/teklif-al](http://localhost:3000/teklif-al)
- **İletişim & Lokasyon**: [http://localhost:3000/iletisim](http://localhost:3000/iletisim)

---

© 2026 Btgrup Bilgi Teknolojileri. Tüm hakları saklıdır.
