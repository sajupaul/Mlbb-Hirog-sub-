import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }} />

        <div className="relative px-6 py-10 md:py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-3">
            Ready to Power Up? ⚡
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-6 max-w-md mx-auto">
            Join 50,000+ gamers who trust Hirog&apos;s Mart for instant, safe top-ups
          </p>
          <Link
            href="/topup"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-base font-bold text-purple-900 bg-white hover:bg-purple-50 shadow-xl shadow-black/20 transition-all hover:scale-105"
          >
            Start Shopping
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
