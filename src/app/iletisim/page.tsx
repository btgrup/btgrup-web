'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Printer, ExternalLink } from 'lucide-react';

export default function IletisimPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone: phone,
          email: email,
          category: 'İletişim Mesajı',
          notes: message,
          createdAt: new Date().toISOString()
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold text-xs uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Bize Ulaşın
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            İletişim & Lokasyon
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Kurumsal web yazılım, sunucu barındırma veya teknik servis ihtiyaçlarınız için uzman ekibimizle iletişime geçin.
          </p>
        </div>

        {/* Ana İletişim Kartları Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">İletişim Kanallarımız</h2>
              
              <div className="space-y-6">
                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Merkez Ofis</div>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                      Büyükkayacık Mah. 3. Organize Sanayi Bölgesi 9 Nolu Sk. No:34/1 Selçuklu / KONYA
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/FFahjrpct4nQWWNLA" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs text-brand-600 font-semibold mt-1.5 hover:text-brand-700 hover:underline"
                    >
                      <span>Google Haritalarda Aç (Btgrup Bilgi Teknolojileri)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telefonlar */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Müşteri Hizmetleri & Santral</div>
                    <a href="tel:+903322387078" className="text-sm font-bold text-brand-600 hover:text-brand-700 mt-0.5 block">
                      0 (332) 238 70 78
                    </a>
                    <a href="tel:+903322387308" className="text-xs text-slate-500 hover:text-slate-700 mt-0.5 block">
                      0 (332) 238 73 08 (Pbx)
                    </a>
                  </div>
                </div>

                {/* Faks */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Faks</div>
                    <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                      0 (332) 238 73 09
                    </span>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">E-posta</div>
                    <a href="mailto:info@btgrup.com" className="text-sm font-semibold text-slate-800 hover:text-brand-600 mt-0.5 block">
                      info@btgrup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hızlı Butonlar */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+903322387078"
                  className="flex-1 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hemen Arayın</span>
                </a>
                <a
                  href="mailto:info@btgrup.com"
                  className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-sm"
                >
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Bizi Takip Edin</div>
                <div className="text-sm font-bold mt-0.5">Sosyal Medya Kanallarımız</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <a 
                  href="https://www.facebook.com/Btgrupcom" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.twitter.com/Btgrupcom" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 bg-slate-800 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="https://www.youtube.com/BtGrupcom" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Hızlı Mesaj Formu & Harita */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Bize Mesaj Gönderin</h3>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Mesajınız Alındı!</h4>
                  <p className="text-slate-600 text-sm">
                    Talebiniz uzman müşteri temsilcimize iletilmiştir. En kısa sürede tarafınıza geri dönüş sağlanacaktır.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold hover:bg-brand-700 transition-colors"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Adınız Soyadınız / Firma Adı</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-brand-500"
                      placeholder="Ad Soyad veya Şirket Ünvanı"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-brand-500"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-posta</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-brand-500"
                        placeholder="eposta@sirketiniz.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mesajınız / Talep Detayı</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-brand-500"
                      placeholder="Web tasarım, hosting, teknik servis veya donanım ihtiyaçlarınızı bize iletebilirsiniz..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Harita Embed */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Btgrup Bilgi Teknolojileri LTD. ŞTİ. (Konya 3. OSB)</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/FFahjrpct4nQWWNLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-brand-600 font-bold hover:text-brand-700 hover:underline"
                >
                  <span>Google Haritada Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100">
                <iframe
                  title="Btgrup Bilgi Teknolojileri LTD. ŞTİ. Harita Konumu"
                  src="https://maps.google.com/maps?q=37.9774646,32.6221218+(Btgrup+Bilgi+Teknolojileri+LTD.+%C5%9ET%C4%B0.)&hl=tr&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
