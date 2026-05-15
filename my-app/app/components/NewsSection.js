import { NEWS } from '../lib/data';

export default function NewsSection() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] font-bold text-white mb-6">
        Latest News & Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {NEWS.map((article) => (
          <article
            key={article.id}
            className="glass rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="relative h-40 md:h-44 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-purple-500/80 backdrop-blur-sm">
                {article.category}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-slate-500 mb-2">{article.date}</p>
              <h3 className="text-sm font-semibold text-white leading-snug mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
