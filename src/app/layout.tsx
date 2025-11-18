import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { FloatingEnquireButtonWrapper } from '@/components/floating-enquire-button-wrapper';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Dio Graciaa',
  description: 'Bespoke interiors by Dio Graciaa, designed for your lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Sample Google Ads Global Site Tag (gtag.js) - Replace AW-YOUR_CONVERSION_ID with your actual ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-YOUR_CONVERSION_ID"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-YOUR_CONVERSION_ID');
          `}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
        <FloatingEnquireButtonWrapper />
      </body>
    </html>
  );
}
