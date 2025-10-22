import './globals.css';

export const metadata = {
  title: 'Thiệp cưới - Văn Chung & Hồng Nhung',
  description: 'Thiệp cưới online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
