'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/topup', label: 'Top Up' },
    { href: '/track', label: 'Track Order' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a1a]/90 backdrop-blur-xl shadow-lg shadow-purple-900/10 border-b border-purple-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
              H
            </div>
            <span className="font-[family-name:var(--font-heading)] font-bold text-lg">
              <span className="text-white">Hirog&apos;s</span>{' '}
              <span className="gradient-text">Mart</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-purple-300 bg-purple-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/topup"
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
            >
              Buy Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-[#0d0d24] border-l border-purple-500/15 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                  pathname === link.href
                    ? 'text-purple-300 bg-purple-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/topup"
              className="mt-4 py-3 rounded-xl text-center text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/25"
            >
              Buy Now
            </Link>
            <div className="h-px bg-white/10 my-4" />
            {[
              { href: '/about', label: 'About Us' },
              { href: '/faq', label: 'FAQ' },
              { href: '/terms', label: 'Terms & Conditions' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/refund', label: 'Refund Policy' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
