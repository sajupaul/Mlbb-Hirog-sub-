import Link from 'next/link';

const steps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
    ),
    title: 'Choose Game',
    desc: 'Select your game, enter your Player ID and Server ID, then pick the diamond pack or pass you want.',
    cta: { label: 'Browse Games', href: '/topup' },
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Buy Now',
    desc: 'Confirm the package and place the order directly. No account is required.',
    cta: { label: 'Start Buying', href: '/topup' },
    color: 'from-purple-500 to-fuchsia-600',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25" />
      </svg>
    ),
    title: 'Track by Order ID',
    desc: 'Use the generated order ID to check your top-up status anytime from the Track Order page.',
    cta: { label: 'Track Order', href: '/track' },
    color: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-500/20',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-[family-name:var(--font-heading)] font-bold text-white mb-2">
          How It Works
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Buy top-ups quickly and track them with a simple order ID
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="glass rounded-2xl p-5 md:p-6 text-center relative overflow-hidden group hover:border-purple-500/30 transition-all animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-3 right-4 text-6xl font-[family-name:var(--font-heading)] font-extrabold text-white/[0.03]">
              {index + 1}
            </div>

            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg ${step.glow}`}>
              {step.icon}
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.desc}</p>

            <Link
              href={step.cta.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              {step.cta.label}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
