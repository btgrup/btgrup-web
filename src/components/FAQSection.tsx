'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  themeColor?: 'blue' | 'cyan' | 'amber' | 'purple';
  items: FAQItem[];
}

const colorStyles = {
  blue: {
    badge: 'bg-brand-50 text-brand-700 border-brand-200',
    icon: 'text-brand-600',
    activeBorder: 'border-brand-500 ring-1 ring-brand-500/30',
    questionActive: 'text-brand-600',
    dot: 'bg-brand-500',
  },
  cyan: {
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: 'text-cyan-600',
    activeBorder: 'border-cyan-500 ring-1 ring-cyan-500/30',
    questionActive: 'text-cyan-600',
    dot: 'bg-cyan-500',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: 'text-amber-600',
    activeBorder: 'border-amber-500 ring-1 ring-amber-500/30',
    questionActive: 'text-amber-600',
    dot: 'bg-amber-500',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: 'text-purple-600',
    activeBorder: 'border-purple-500 ring-1 ring-purple-500/30',
    questionActive: 'text-purple-600',
    dot: 'bg-purple-500',
  },
};

export default function FAQSection({
  title = 'Sıkça Sorulan Sorular',
  subtitle = 'Hizmetlerimiz, süreçlerimiz ve teknik detaylar hakkında merak ettiğiniz soruların yanıtları.',
  badge = 'Merak Edilenler',
  themeColor = 'blue',
  items,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // İlk soru varsayılan açık
  const colors = colorStyles[themeColor];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Google Arama Sonuçları İçin FAQPage Schema.org JSON-LD Verisi
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="my-16">
      {/* Google SEO FAQPage Zengin Sonuç Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${colors.badge} mb-3`}>
            <HelpCircle className="w-3.5 h-3.5" />
            {badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Akordeon Soru-Cevap Listesi */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? `bg-slate-50/70 ${colors.activeBorder} shadow-xs`
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                      isOpen ? colors.dot : 'bg-slate-300'
                    }`}></span>
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? colors.questionActive : 'text-slate-900'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-slate-200 text-slate-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50">
                    <p className="mt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Google FAQPage Structured Data (Rich Snippet) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />

      </div>
    </section>
  );
}
