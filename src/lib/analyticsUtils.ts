// Client-safe yardımcı fonksiyonlar

export function getPageTitleByPath(rawPath: string): string {
  if (!rawPath) return 'Bilinmiyor';
  const p = rawPath.split('?')[0].replace(/\/$/, '') || '/';
  switch (p) {
    case '/':
      return 'Ana Sayfa (/)';
    case '/hizmetler/web-tasarim':
      return 'Web Tasarım & Yazılım';
    case '/hizmetler/hosting-domain':
      return 'Bulut Hosting & Domain';
    case '/hizmetler/teknik-servis':
      return 'Bilgisayar Teknik Servis';
    case '/hizmetler/bilgisayar-yazilim':
      return 'Bilgisayar & Lisans Satışı';
    case '/kurumsal':
      return 'Kurumsal & Hakkımızda';
    case '/iletisim':
      return 'İletişim & Harita';
    case '/teklif-al':
      return 'Hızlı Teklif Formu';
    case '/yasal/kvkk':
      return 'KVKK Aydınlatma Metni';
    case '/yasal/cerez-politikasi':
      return 'Çerez Politikası';
    case '/yasal/gizlilik':
      return 'Gizlilik İlkeleri';
    case '/yasal/kullanim-sartlari':
      return 'Kullanım Şartları';
    default:
      return p;
  }
}
