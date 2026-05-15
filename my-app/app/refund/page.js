import Link from 'next/link';

export const metadata = {
  title: "Refund Policy - Hirog's Mart",
};

export default function RefundPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        Refund Policy
      </h1>

      <div className="glass rounded-2xl p-6 md:p-8 space-y-6 text-slate-300 text-sm md:text-base prose prose-invert max-w-none">
        
        <h2 className="text-xl font-bold text-white mt-6 mb-3">Digital Goods</h2>
        <p>Due to the nature of digital goods and in-game currencies, <strong>all sales are final</strong>. Once an order is successfully processed and the items are delivered to the provided account, we cannot issue a refund.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">Incorrect IDs</h2>
        <p>It is the customer&apos;s responsibility to ensure that the Player ID and Server ID are entered correctly. Hirog&apos;s Mart is not liable for top-ups sent to the wrong account due to customer error, and no refunds will be provided in such cases.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">Failed Transactions</h2>
        <p>If your payment was deducted but the order failed to process on our end, the amount will be automatically refunded to your original payment method. Depending on your bank, it may take 3-7 business days for the refund to reflect in your account.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">Contact Us</h2>
        <p>If you experience any issues with your order, please contact our support team immediately with your Order ID, and we will investigate the matter.</p>
      </div>
    </div>
  );
}
