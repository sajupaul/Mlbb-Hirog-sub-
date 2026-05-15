'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getGame, getProducts } from '../../lib/data';
import { generateOrderId, saveOrder } from '../../lib/orders';

export default function GameTopUpPage() {
  const { gameId } = useParams();
  const game = getGame(gameId);
  const products = getProducts(gameId);
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  if (!game) {
    return (
      <div className="pt-24 pb-8 px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Game not found</h1>
        <Link href="/topup" className="text-purple-400 hover:text-purple-300">Back to games</Link>
      </div>
    );
  }

  const selectedProduct = products.find((p) => p.id === selected);
  const diamondProducts = products.filter((p) => !p.isPass);
  const passProducts = products.filter((p) => p.isPass);

  const handleOrder = () => {
    const allFilled = game.fields.every((field) => formData[field.key]?.trim());

    if (!allFilled) {
      alert('Please fill in all required fields');
      return;
    }

    if (!selectedProduct) {
      alert('Please select a package');
      return;
    }

    const order = saveOrder({
      id: generateOrderId(),
      gameId: game.id,
      gameName: game.name,
      gameShort: game.short,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      productAmount: selectedProduct.amount,
      price: selectedProduct.price,
      player: game.fields.reduce((details, field) => ({
        ...details,
        [field.label]: formData[field.key].trim(),
      }), {}),
      status: 'Processing',
      createdAt: new Date().toISOString(),
    });

    setPlacedOrder(order);
    setShowConfirm(true);
  };

  return (
    <div className="pt-20 pb-8 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/topup" className="hover:text-purple-400 transition-colors">Top Up</Link>
        <span>/</span>
        <span className="text-purple-400">{game.short}</span>
      </div>

      <div className="glass rounded-2xl overflow-hidden mb-6">
        <div className="relative h-32 md:h-44">
          <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${game.accent} opacity-70`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] to-transparent" />
          <div className="absolute bottom-4 left-4 md:left-6">
            <h1 className="text-xl md:text-3xl font-[family-name:var(--font-heading)] font-extrabold text-white">
              {game.name}
            </h1>
            <p className="text-xs md:text-sm text-white/70 mt-1">{game.description}</p>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-5 md:p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/30">
            1
          </div>
          <h2 className="text-lg font-bold text-white">Enter Your Game ID</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {game.fields.map((field) => (
            <div key={field.key}>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key] || ''}
                onChange={(event) => setFormData({ ...formData, [field.key]: event.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 mt-3">
          Please double-check your ID before ordering. Wrong IDs cannot be refunded.
        </p>
      </div>

      <div className="glass rounded-2xl p-5 md:p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/30">
            2
          </div>
          <h2 className="text-lg font-bold text-white">Select Package</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
          {diamondProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelected(product.id)}
              className={`product-card relative rounded-xl p-3 md:p-4 text-left border transition-all ${
                selected === product.id
                  ? 'selected border-purple-500/60'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/15'
              }`}
            >
              {product.badge && (
                <span className={`absolute -top-1.5 -right-1 px-2 py-0.5 rounded-full text-[9px] font-bold badge-shine ${
                  product.badge === 'Hot' ? 'bg-red-500 text-white' :
                  product.badge === 'Best Value' ? 'bg-emerald-500 text-white' :
                  product.badge === 'Mega' ? 'bg-amber-500 text-black' :
                  'bg-purple-500 text-white'
                }`}>
                  {product.badge}
                </span>
              )}
              {product.popular && (
                <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              )}

              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm font-semibold text-white">{product.amount}</span>
              </div>
              <p className="text-xs text-slate-400 truncate">{product.name}</p>
              <p className="text-base font-bold text-white mt-2">Rs. {product.price}</p>

              {selected === product.id && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {passProducts.length > 0 && (
          <>
            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-500 font-medium">PASSES</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
              {passProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelected(product.id)}
                  className={`product-card relative rounded-xl p-3 md:p-4 text-left border transition-all ${
                    selected === product.id
                      ? 'selected border-purple-500/60'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  {product.badge && (
                    <span className="absolute -top-1.5 -right-1 px-2 py-0.5 rounded-full text-[9px] font-bold badge-shine bg-purple-500 text-white">
                      {product.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-semibold text-white">{product.amount}</span>
                  </div>
                  <p className="text-xs text-slate-400 truncate">{product.name}</p>
                  <p className="text-base font-bold text-white mt-2">Rs. {product.price}</p>
                  {selected === product.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="glass rounded-2xl p-5 md:p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-amber-500/30">
            3
          </div>
          <h2 className="text-lg font-bold text-white">Confirm & Buy</h2>
        </div>

        {selectedProduct ? (
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Game</span>
              <span className="text-sm font-medium text-white">{game.short}</span>
            </div>
            {game.fields.map((field) => (
              <div key={field.key} className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">{field.label}</span>
                <span className="text-sm font-medium text-white">{formData[field.key] || '-'}</span>
              </div>
            ))}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Package</span>
              <span className="text-sm font-medium text-white">{selectedProduct.name}</span>
            </div>
            <div className="h-px bg-white/10 my-3" />
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-white">Total</span>
              <span className="text-xl font-bold gradient-text">Rs. {selectedProduct.price}</span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-500 text-center py-4">Select a package above to see order summary</p>
        )}

        <button
          onClick={handleOrder}
          disabled={!selected}
          className={`w-full mt-4 py-3.5 rounded-xl text-base font-bold transition-all ${
            selected
              ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99]'
              : 'bg-white/5 text-slate-600 cursor-not-allowed'
          }`}
        >
          {selected ? `Buy Now - Rs. ${selectedProduct?.price}` : 'Select a package'}
        </button>
        <p className="text-[11px] text-slate-500 text-center mt-3">
          Your order ID will be created instantly after checkout.
        </p>
      </div>

      {showConfirm && selectedProduct && placedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowConfirm(false)} />
          <div className="relative glass rounded-3xl p-6 md:p-8 max-w-sm w-full animate-slide-up">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Order Placed</h3>
              <p className="text-sm text-slate-400 mb-1">
                {selectedProduct.name} for {game.short}
              </p>
              <p className="text-2xl font-bold gradient-text mb-4">Rs. {selectedProduct.price}</p>
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 mb-5">
                <p className="text-xs text-slate-500 mb-1">Order ID</p>
                <p className="text-lg font-bold tracking-wide text-white">{placedOrder.id}</p>
                <p className="text-xs text-slate-500 mt-2">Use this ID on the Track Order page.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 rounded-xl text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <Link
                  href={`/track?order=${placedOrder.id}`}
                  className="flex-1 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 text-center"
                >
                  Track Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
