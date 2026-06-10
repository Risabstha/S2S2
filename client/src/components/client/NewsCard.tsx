import type {
  news
} from "../../assets/Data/NewsDetail";

interface CardProps {
  item: news;
}

// ─── CARD ─────────────────────────────────────────────────────────────────────

function NewsCard({ item }: CardProps) {
  return (
    /*
     * w-full   → fills whatever column BusSystem gives it (100vw / 50vw / 33vw)
     * No fixed height — content determines height, card centers vertically in
     * the column via the parent's `flex items-center`.
     *
     * style= is only used for:
     *   1. accentColor hex values (dynamic, unknown at build time)
     *   2. animation-delay (no Tailwind utility)
     *   3. box-shadow glow that references the dynamic accent color
     */
    <div
      className={`
        group w-full rounded-xl overflow-hidden
        bg-[#d8d8d8]
        transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]
        animate-[cardReveal_0.6s_ease_both]
        hover:-translate-y-1
        lg:h-[30rem]
      `}

    >
      {/* ── Image ── */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "saturate(0.85) brightness(0.92)" }}
        />
        {/* gradient: image fades into card background colour */}
        <div className="absolute inset-0 bg-linear-to-t from-[#EBE9E3]/20 via-[#EBE9E3]/20 to-transparent" />
      </div>

      {/* ── Body ── */}
      <div className="px-5 pt-3.5 pb-5 flex flex-col justify-self-center">
        <h2 className="text-2xl font-bold tracking-tight mb-1.5 text-[#C18374]">
          {item.title}
        </h2>
        <p className="text-[14px] leading-relaxed text-black/60 mb-4 line-clamp-3">
          {item.description}
        </p>
        <p className="text-[14px] leading-relaxed text-black/60 mb-4 line-clamp-3">
          Date: &nbsp;{item.date}
        </p>
        <button className="text-[15px] py-1 leading-relaxed text-black/60 mb-4 line-clamp-3 bg-gray-400 rounded-md">
          {item.link}
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
