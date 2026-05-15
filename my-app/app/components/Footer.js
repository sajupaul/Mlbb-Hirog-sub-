import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-[#080818] border-t border-purple-500/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center font-bold text-white text-sm">
                H
              </div>
              <span className="font-[family-name:var(--font-heading)] font-bold text-lg text-white">
                Hirog&apos;s Mart
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              India&apos;s trusted gaming top-up platform. Instant order IDs, fast delivery, secure payments, and 24/7 support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/topup', label: 'Browse Games' },
                { href: '/topup', label: 'Buy Now' },
                { href: '/track', label: 'Track Order' },
              ].map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Need Help?</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/contact', label: 'Contact Us' },
                { href: '/faq', label: 'FAQ' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/917005358351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/terms', label: 'Terms & Conditions' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/refund', label: 'Refund Policy' },
                { href: '/disclaimer', label: 'Disclaimer' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">Copyright 2026 Hirog&apos;s Mart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/hirog_mart_mlbb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
