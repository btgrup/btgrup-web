'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // Admin veya login sayfalarında ana web sitesinin Navbar ve Footer bileşenlerini gösterme
  if (isAdmin) {
    return <>{children}</>;
  }

  // Normal site sayfalarında genel kurumsal şablon
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      <AnalyticsTracker />
      <GoogleAnalytics />
    </>
  );
}
