import HeroBanner from './components/HeroBanner';
import GameGrid from './components/GameGrid';
import FlashSale from './components/FlashSale';
import HowItWorks from './components/HowItWorks';
import CTABanner from './components/CTABanner';
import NewsSection from './components/NewsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {/* Hero Banner Carousel */}
      <HeroBanner />

      {/* Game Grid */}
      <GameGrid />

      {/* Flash Sale */}
      <FlashSale />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Banner */}
      <CTABanner />

      {/* News */}
      <NewsSection />
    </div>
  );
}
