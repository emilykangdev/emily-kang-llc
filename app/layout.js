import './globals.css';

export const metadata = {
  title: 'Emily Kang LLC',
  description: 'Building small, useful tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
