import Link from 'next/link';

export const metadata = {
  title: "About Us - Hirog's Mart",
  description: "Learn more about Hirog's Mart, India's #1 trusted gaming top-up platform.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6">
        About Us
      </h1>
      
      <div className="glass rounded-2xl p-6 md:p-8 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
        <p>
          Welcome to <span className="font-bold text-white">Hirog&apos;s Mart</span>, your number one source for all gaming top-ups. We&apos;re dedicated to giving you the very best of gaming currency, with a focus on fast delivery, secure transactions, and exceptional customer service.
        </p>
        <p>
          Founded in 2023, Hirog&apos;s Mart has come a long way from its beginnings. When we first started out, our passion for gaming drove us to do intense research, quit our day jobs, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over India and are thrilled to be a part of the fair trade wing of the gaming industry.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to contact us.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to provide gamers with a safe, reliable, and instant platform to purchase digital goods and in-game currency at the best possible prices.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Instant Delivery:</strong> Automated systems ensure your top-ups are delivered in seconds.</li>
          <li><strong>Secure Payments:</strong> We use industry-standard encryption to protect your data.</li>
          <li><strong>24/7 Support:</strong> Our dedicated team is always ready to assist you.</li>
          <li><strong>Best Prices:</strong> We offer competitive rates and exciting flash sales.</li>
        </ul>
      </div>
    </div>
  );
}
