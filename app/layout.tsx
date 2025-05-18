//import React from 'react';
import './global.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}