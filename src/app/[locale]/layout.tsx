import type { Metadata } from 'next';
import { Bellefair, Montserrat } from 'next/font/google';

import '../globals.css';
import MainLayout from '@/components/layout/main-layout';
import ProvidersWrapper from '@/lib/providers';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const bellefair = Bellefair({
  variable: '--font-bellefair',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description: 'A modern starter template to quickly spin up your app',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${bellefair.variable} antialiased flex flex-col min-h-screen items-center font-montserrat`}
      >
        <ProvidersWrapper locale={locale}>
          <MainLayout>{children}</MainLayout>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
