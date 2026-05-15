import Link from 'next/link';
import { GAMES } from '../lib/data';

export default function GameGrid() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] font-bold text-white">
          Choose Your Game
        </h2>
        <Link href="/topup" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {GAMES.map((game, i) => (
          <Link
            key={game.id}
            href={`/topup/${game.id}`}
            className="game-card group relative rounded-2xl overflow-hidden animate-slide-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Image */}
            <div className="aspect-[4/5] relative">
              <img
                src={game.image}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${game.accent} opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Featured badge */}
              {game.featured && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-500/90 text-[10px] font-bold text-black badge-shine">
                  ⭐ FEATURED
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm md:text-base leading-tight">
                  {game.short}
                </h3>
                <p className="text-[10px] md:text-xs text-white/60 mt-0.5">{game.publisher}</p>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
