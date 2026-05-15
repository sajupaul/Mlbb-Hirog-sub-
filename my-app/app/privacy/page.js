import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - Hirog's Mart",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        Privacy Policy
      </h1>

      <div className="glass rounded-2xl p-6 md:p-8 space-y-6 text-slate-300 text-sm md:text-base prose prose-invert max-w-none">
        <p>Last updated: June 2026</p>
        
        <p>Your privacy is important to us. It is Hirog&apos;s Mart&apos;s policy to respect your privacy regarding any information we may collect from you across our website.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Information We Collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. This includes your Player IDs, email addresses for receipts, and phone numbers for support.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">2. How We Use Information</h2>
        <p>We use the information we collect to process your orders, communicate with you regarding your purchases, and improve our services.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">3. Data Security</h2>
        <p>We protect your data within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification. Payment details are processed securely by our payment partners and are not stored on our servers.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Sharing Data</h2>
        <p>We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
      </div>
    </div>
  );
}
