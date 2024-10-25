


import type { Metadata } from 'next';
import "./globals.css";

import Navbar from '@/app/components/header/page';
import Footer from '@/app/components/footer/page';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: 'Ahsan Shaikh Portfolio',
  description: 'Full Stack Javascript Developer ',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en"> 
      <body>
        <Navbar  />
          {children}
        <Footer />
      </body>
    </html>
  )
}
