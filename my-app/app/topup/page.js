import Link from 'next/link';
import { GAMES } from '../lib/data';

export const metadata = {
  title: "Browse Games - Hirog's Mart",
  description: 'Choose your game and top up instantly. MLBB, Free Fire, PUBG Mobile, Genshin Impact and more.',
};

export default function TopUpPage() {
  return (
    <div className="pt-20 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-4 inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-2xl md:text-4xl font-[family-name:var(--font-heading)] font-extrabold text-white mt-2">
          Choose Your Game
        </h1>
        <p className="text-sm md:text-base text-slate-400 mt-2">
          Select a game to top up diamonds, UC, or other in-game currencies
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
        {GAMES.map((game, i) => (
          <Link
            key={game.id}
            href={`/topup/${game.id}`}
            className="game-card group glass rounded-2xl overflow-hidden animate-slide-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${game.accent} opacity-50`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-black/30 to-transparent" />
              {game.featured && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-500/90 text-[10px] font-bold text-black badge-shine">
                  ⭐ FEATURED
                </div>
              )}
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm md:text-base">
                {game.name}
              </h3>
              <p className="text-[11px] md:text-xs text-slate-500 mt-0.5">{game.publisher}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                Top Up Now
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
