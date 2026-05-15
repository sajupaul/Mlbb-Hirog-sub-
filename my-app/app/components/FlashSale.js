'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FLASH_SALES, getGame, getProduct } from '../lib/data';

function FlashTimer() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 999);
    const tick = () => {
      const diff = Math.max(0, target - new Date());
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      {[time.h, time.m, time.s].map((v, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-lg text-xs font-bold">
            {pad(v)}
          </span>
          {i < 2 && <span className="text-purple-400/60">:</span>}
        </span>
      ))}
    </div>
  );
}

export default function FlashSale() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] font-bold text-white">
              Flash Sale
            </h2>
          </div>
          <FlashTimer />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {FLASH_SALES.map((sale) => {
          const game = getGame(sale.gameId);
          const product = getProduct(sale.gameId, sale.productId);
          if (!game || !product) return null;
          const discountedPrice = Math.round(product.price * (1 - sale.discount / 100));

          return (
            <Link
              key={sale.productId}
              href={`/topup/${sale.gameId}`}
              className="flex-shrink-0 w-40 md:w-52 glass rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-24 md:h-28 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.accent} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] to-transparent" />
                {/* Discount badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-red-500 text-[10px] font-bold text-white badge-shine">
                  -{sale.discount}%
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="text-[10px] font-medium text-white/70 bg-black/40 px-1.5 py-0.5 rounded">
                    {game.short}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <p className="text-sm font-semibold text-white truncate">{product.name}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-base font-bold text-emerald-400">₹{discountedPrice}</span>
                  <span className="text-xs text-slate-500 line-through">₹{product.price}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
