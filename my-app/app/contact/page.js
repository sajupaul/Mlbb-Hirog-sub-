'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="pt-20 pb-8 px-4 md:px-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-4 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl md:text-4xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-2">
          📞 Contact Us
        </h1>
        <p className="text-sm text-slate-400">We&apos;re here to help 24/7</p>
      </div>

      {/* Quick contact methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <a
          href="https://wa.me/917005358351"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-emerald-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            💬
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">WhatsApp</h3>
            <p className="text-xs text-slate-400">Chat with us instantly</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/hirog_mart_mlbb/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-pink-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            📸
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">Instagram</h3>
            <p className="text-xs text-slate-400">Follow us for updates</p>
          </div>
        </a>
      </div>

      {/* Contact form */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject</label>
            <input
              type="text"
              required
              placeholder="What's this about?"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us more..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
