import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions - Hirog's Mart",
};

export default function TermsPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        Terms & Conditions
      </h1>

      <div className="glass rounded-2xl p-6 md:p-8 space-y-6 text-slate-300 text-sm md:text-base prose prose-invert max-w-none">
        <p>Last updated: June 2026</p>
        
        <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Acceptance of Terms</h2>
        <p>By accessing and using Hirog&apos;s Mart, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">2. Service Description</h2>
        <p>Hirog&apos;s Mart provides an online platform for purchasing digital goods, specifically in-game currency and items.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">3. User Responsibilities</h2>
        <p>You must provide accurate Player IDs and Server IDs when placing an order. We are not responsible for top-ups sent to incorrect accounts due to user error.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Payments</h2>
        <p>All payments are final. Once an order is processed and delivered, it cannot be refunded or reversed. Prices are subject to change without notice.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Account Suspension</h2>
        <p>We reserve the right to suspend or terminate accounts that violate our terms or engage in fraudulent activities.</p>
      </div>
    </div>
  );
}
