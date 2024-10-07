import type { Metadata } from 'next';
import React from 'react';
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Ayaz Mahmood',
  description: 'A collection of my skills and work.',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
