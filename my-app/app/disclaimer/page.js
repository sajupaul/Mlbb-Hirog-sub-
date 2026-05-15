import Link from 'next/link';

export const metadata = {
  title: "Disclaimer - Hirog's Mart",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        Disclaimer
      </h1>

      <div className="glass rounded-2xl p-6 md:p-8 space-y-6 text-slate-300 text-sm md:text-base prose prose-invert max-w-none">
        
        <p>Hirog&apos;s Mart is an independent digital goods retailer. We are not officially affiliated with, endorsed by, or partnered with Moonton, Garena, Tencent, Riot Games, HoYoverse, Activision, or any other game publishers mentioned on our site.</p>

        <p>All product names, logos, brands, trademarks and registered trademarks are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.</p>

        <p>By using our services, you acknowledge that you are purchasing digital goods through an independent third-party platform.</p>

      </div>
    </div>
  );
}
