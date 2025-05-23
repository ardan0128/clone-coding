import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: '스텔라이브',
  description: '스텔라이브 클론코딩',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="container">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
