import type { Metadata } from 'next';
import './globals.css';
import TopNav from './ui/top-nav';

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
        <TopNav></TopNav>
        {children}
      </body>
    </html>
  );
}
