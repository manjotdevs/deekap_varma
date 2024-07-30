import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deepak Verma',
  description: 'Deepak Verma jewellers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoginPage = '/login';

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {!isLoginPage && <Header />}
        {children}
      </body>
    </html>
  );
}
