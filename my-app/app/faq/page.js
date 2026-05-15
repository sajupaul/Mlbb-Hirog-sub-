import Link from 'next/link';

export const metadata = {
  title: "FAQ - Hirog's Mart",
  description: "Frequently asked questions about Hirog's Mart top-up services.",
};

const faqs = [
  {
    q: 'How long does a top-up take?',
    a: 'Most top-ups are processed quickly and usually reflect in your gaming account within 30 seconds to 5 minutes after payment confirmation.',
  },
  {
    q: 'Is it safe to top up here?',
    a: 'Yes. We use secure payment handling and never ask for your game account password.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept common payment methods in India, including UPI, credit cards, debit cards, and net banking.',
  },
  {
    q: 'How do I track my order?',
    a: 'After you buy a package, an order ID is generated. Enter that ID on the Track Order page to check the order status.',
  },
  {
    q: 'I entered the wrong Player ID. What do I do?',
    a: 'Once a top-up is processed to the ID provided, it cannot be reversed or refunded. Please always double-check your ID before placing the order.',
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="glass rounded-2xl p-5 md:p-6">
            <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 glass rounded-2xl text-center">
        <p className="text-sm text-slate-300 mb-3">Still have questions?</p>
        <Link href="/contact" className="inline-flex px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
