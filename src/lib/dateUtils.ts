/**
 * Türkiye Saat Dilimi (Europe/Istanbul - GMT+3) Tarih ve Saat Yardımcıları
 */

export const TURKEY_TIMEZONE = 'Europe/Istanbul';

/**
 * Şu anki veya verilen tarihi Türkiye (GMT+3) saat diliminde DD.MM.YYYY HH:mm:ss formatında döndürür.
 */
export function getTurkishDateTime(date: Date | number = new Date()): string {
  const d = typeof date === 'number' ? new Date(date) : date;
  return d.toLocaleString('tr-TR', {
    timeZone: TURKEY_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

/**
 * Teklif veya talep tarihini GMT+3 formatında döndürür.
 * Eğer talep id'si (örn: q-1789982120041) timestamp içeriyorsa, sunucu saatinden bağımsız olarak
 * mutlak zaman damgasını Türkiye saatine (GMT+3) çevirir.
 */
export function formatQuoteDate(createdAt?: string, id?: string): string {
  if (id && id.startsWith('q-')) {
    const rawTs = id.replace('q-', '');
    const ts = parseInt(rawTs, 10);
    if (!isNaN(ts) && ts > 1000000000000) {
      return getTurkishDateTime(new Date(ts));
    }
  }

  if (!createdAt) return '';

  // Eğer ISO formatındaysa veya tireli format ise
  if (createdAt.includes('T') || (createdAt.includes('-') && !createdAt.includes('.'))) {
    const parsed = new Date(createdAt);
    if (!isNaN(parsed.getTime())) {
      return getTurkishDateTime(parsed);
    }
  }

  return createdAt;
}
