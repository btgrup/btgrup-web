import nodemailer from 'nodemailer';

export interface QuoteEmailData {
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  category: string;
  details: string;
  createdAt?: string;
}

export async function sendQuoteNotification(data: QuoteEmailData) {
  const recipient = process.env.NOTIFICATION_EMAIL || 'safa@btgrup.com';
  const smtpHost = process.env.SMTP_HOST || 'mail.btgrup.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'safa@btgrup.com';
  const smtpPass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM || `"Btgrup Web Sitesi" <${smtpUser}>`;

  const dateStr = data.createdAt || new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
  const cleanPhone = data.phone.replace(/[^0-9]/g, '');
  const waPhone = cleanPhone.startsWith('90') ? cleanPhone : cleanPhone.startsWith('0') ? `9${cleanPhone}` : `90${cleanPhone}`;

  // SMTP şifresi tanımlı değilse simüle et ve konsola logla
  if (!smtpPass) {
    console.warn('--------------------------------------------------');
    console.warn('[Btgrup Mail] UYARI: SMTP_PASS ortam değişkeni (.env.local) tanımlı değil!');
    console.warn(`[Btgrup Mail] safa@btgrup.com adresine gidecek olan talep bilgileri:`);
    console.warn(`- Müşteri: ${data.fullName}`);
    console.warn(`- Telefon: ${data.phone}`);
    console.warn(`- E-posta: ${data.email || 'Belirtilmedi'}`);
    console.warn(`- Kategori: ${data.category}`);
    console.warn(`- Detay: ${data.details}`);
    console.warn('--------------------------------------------------');
    return {
      success: false,
      simulated: true,
      message: 'SMTP şifresi girilmediği için bildirim terminale loglandı. .env.local dosyasını yapılandırınız.'
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Outlook, Gmail, Apple Mail ve tüm Webmail istemcileriyle %100 uyumlu saf tablo ve inline-CSS şablonu
    const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="tr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yeni Teklif Talebi</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <!-- Dış Arka Plan Tablosu -->
  <table width="100%" bgcolor="#f1f5f9" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; width: 100%; padding: 30px 10px;">
    <tr>
      <td align="center" valign="top">
        
        <!-- Ana Kart (600px Genişlik) -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 600px; background-color: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
          
          <!-- Üst Başlık (Header) -->
          <tr>
            <td bgcolor="#0284c7" style="background-color: #0284c7; padding: 28px 32px; text-align: left;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; color: #bae6fd; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                      BTGRUP BİLGİ TEKNOLOJİLERİ
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; line-height: 1.3;">
                      Yeni Teklif & Hizmet Talebi
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #e0f2fe; line-height: 1.4;">
                      btgrup.com web sitesi üzerinden yeni bir kurumsal form iletildi.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Durum ve Kategori Şeridi -->
          <tr>
            <td bgcolor="#f8fafc" style="background-color: #f8fafc; padding: 14px 32px; border-bottom: 1px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <span style="display: inline-block; background-color: #0284c7; color: #ffffff; font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 16px;">
                      ${data.category}
                    </span>
                  </td>
                  <td align="right" valign="middle" style="font-size: 12px; color: #64748b; font-weight: 600;">
                    Tarih: ${dateStr}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ana İçerik Alanı -->
          <tr>
            <td style="padding: 28px 32px; background-color: #ffffff;">
              
              <!-- Müşteri Bilgileri Tablosu -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                
                <!-- Ad Soyad -->
                <tr>
                  <td width="130" valign="top" style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #f1f5f9;">
                    Müşteri Adı:
                  </td>
                  <td valign="top" style="padding: 10px 0; font-size: 15px; font-weight: 800; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                    ${data.fullName}
                  </td>
                </tr>

                <!-- Firma Adı -->
                ${data.companyName ? `
                <tr>
                  <td width="130" valign="top" style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #f1f5f9;">
                    Firma / Kurum:
                  </td>
                  <td valign="top" style="padding: 10px 0; font-size: 14px; font-weight: 700; color: #334155; border-bottom: 1px solid #f1f5f9;">
                    ${data.companyName}
                  </td>
                </tr>` : ''}

                <!-- Telefon -->
                <tr>
                  <td width="130" valign="top" style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #f1f5f9;">
                    Telefon:
                  </td>
                  <td valign="top" style="padding: 10px 0; font-size: 15px; font-weight: 800; color: #0284c7; border-bottom: 1px solid #f1f5f9;">
                    <a href="tel:${data.phone}" style="color: #0284c7; text-decoration: none; font-weight: 800;">${data.phone}</a>
                  </td>
                </tr>

                <!-- E-posta -->
                ${data.email ? `
                <tr>
                  <td width="130" valign="top" style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #f1f5f9;">
                    E-Posta:
                  </td>
                  <td valign="top" style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #334155; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>` : ''}

                <!-- Kategori -->
                <tr>
                  <td width="130" valign="top" style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #f1f5f9;">
                    Hizmet Kolu:
                  </td>
                  <td valign="top" style="padding: 10px 0; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                    ${data.category}
                  </td>
                </tr>

              </table>

              <!-- Talep Açıklaması Kutusu -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-left: 4px solid #0284c7; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 26px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                      MÜŞTERİNİN TALEP VE AÇIKLAMASI
                    </div>
                    <div style="font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; word-break: break-word;">
${data.details}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Hızlı Aksiyon Butonları (Outlook Uyumlu Tablo Butonları) -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
                <tr>
                  <!-- WhatsApp Butonu -->
                  <td width="31%" align="center" bgcolor="#25D366" style="background-color: #25D366; border-radius: 8px; text-align: center;">
                    <a href="https://wa.me/${waPhone}?text=Merhaba%20${encodeURIComponent(data.fullName)},%20Btgrup%20Bilgi%20Teknolojileri%20olarak%20talebini%20aldık." target="_blank" style="display: block; padding: 13px 12px; font-size: 13px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      WhatsApp ile Yaz
                    </a>
                  </td>

                  <td width="3%"></td>

                  <!-- Telefon Butonu -->
                  <td width="31%" align="center" bgcolor="#0284c7" style="background-color: #0284c7; border-radius: 8px; text-align: center;">
                    <a href="tel:${data.phone}" style="display: block; padding: 13px 12px; font-size: 13px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Müşteriyi Ara
                    </a>
                  </td>

                  <td width="3%"></td>

                  <!-- Yönetim Paneli Butonu -->
                  <td width="32%" align="center" bgcolor="#0f172a" style="background-color: #0f172a; border-radius: 8px; text-align: center;">
                    <a href="https://btgrup.com/admin/teklifler" target="_blank" style="display: block; padding: 13px 12px; font-size: 13px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Admin Paneli
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Alt Bilgi (Footer) -->
          <tr>
            <td bgcolor="#f8fafc" style="background-color: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                Bu bildirim <strong style="color: #0f172a;">Btgrup Bilgi Teknolojileri</strong> web sitesi teklif sistemi tarafından otomatik olarak <a href="mailto:safa@btgrup.com" style="color: #0284c7; text-decoration: none;">safa@btgrup.com</a> adresine gönderilmiştir.
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #94a3b8;">
                Büyükkayacık Mah. 3. OSB 9 Nolu Sk. No:34/1 Selçuklu / KONYA • Tel: 0 (332) 238 70 78
              </p>
            </td>
          </tr>

        </table>
        <!-- /Ana Kart -->

      </td>
    </tr>
  </table>

</body>
</html>
`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email || undefined,
      subject: `[Yeni Teklif Talebi] ${data.fullName} - ${data.category}`,
      text: `Yeni Teklif Talebi\n\nMüşteri: ${data.fullName}\nTelefon: ${data.phone}\nE-posta: ${data.email || '-'}\nFirma: ${data.companyName || '-'}\nKategori: ${data.category}\n\nDetay:\n${data.details}\n\nTarih: ${dateStr}`,
      html: htmlContent,
    });

    console.log(`[Btgrup Mail] E-posta başarıyla iletildi: ${info.messageId} -> ${recipient}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('[Btgrup Mail] E-posta gönderim hatası:', error);
    return { success: false, error: error.message || 'E-posta gönderilemedi' };
  }
}
