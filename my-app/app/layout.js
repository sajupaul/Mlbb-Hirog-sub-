import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export const metadata = {
  title: "Hirog's Mart - Gaming Top Up India | Instant Delivery & Digital Goods",
  description: "India's #1 trusted gaming top-up platform. Instant delivery, secure payments, 24/7 support. Best prices guaranteed!",
  keywords: 'MLBB diamonds, Mobile Legends top up, Free Fire diamonds, PUBG UC, gaming top up India',
  openGraph: {
    title: "Hirog's Mart - Gaming Top Up India",
    description: "India's #1 trusted gaming top-up platform. Instant delivery & best prices.",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-safe">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
