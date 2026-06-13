import type { OpenSourceResource } from "../../pages/OpenSource/MissionSystem";
import type { OpenSourceItem } from "../../assets/Data/MissionDetails";

interface CardProps {
  item: OpenSourceItem;
  index: number;
}

// ─── ICONS ────────────────────────────────────────────────────────────────────

const IconPDF = () => (
  <svg
    width="13"
    height="13"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);
const IconHardware = () => (
  <svg
    width="13"
    height="13"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
    />
  </svg>
);
const IconZip = () => (
  <svg
    width="13"
    height="13"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </svg>
);
const IconGitHub = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const IconFolder = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
    />
  </svg>
);

const ICONS: Record<OpenSourceResource["icon"], React.ReactNode> = {
  pdf: <IconPDF />,
  hardware: <IconHardware />,
  zip: <IconZip />,
  github: <IconGitHub />,
};

// ─── CARD ─────────────────────────────────────────────────────────────────────

function OpenSourceCard({ item }: CardProps) {
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
        group w-full rounded-xl overflow-hidden border border-[#cccac5]
        bg-[#EBE9E3]
        transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]
        animate-[cardReveal_0.6s_ease_both]
        hover:-translate-y-1
        shadow-sm
        lg:max-h-[34rem] md:max-h-[34rem] max-h-[34rem]
        lg:max-w-[36rem] md:max-w-[28rem] max-w-[23.8rem] mx-auto   
      `}
    >
      {/* ── Image ── */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "saturate(0.85) brightness(0.92)" }}
        />
        {/* gradient: image fades into card background colour */}
        <div className="absolute inset-0 bg-linear-to-t from-[#EBE9E3]/20 via-[#EBE9E3]/20 to-transparent" />
      </div>

      {/* ── Body ── */}
      <div className="px-5 pt-3.5 pb-5 flex flex-col justify-self-center">
        <h2 className="font-['Syne'] text-[20px] md:text-3xl font-bold tracking-tight mb-1.5 text-[#C18374]">
          {item.title}
        </h2>
        <p className="text-md  leading-relaxed text-black/60 mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* ── Resources panel ── */}
        <div className="rounded-lg bg-[#D8D7D1] border border-black/[0.06] px-3 pt-2.5 pb-3">
          {/* label row */}
          <div className="flex items-center gap-1.5 mb-2.5 text-[13px] font-bold uppercase tracking-widest  text-black/40 ">
            <IconFolder />
            Resources
          </div>

          {/* 2-column grid — same on every breakpoint; card width is handled by BusSystem */}
          <div className="grid grid-cols-2 gap-1.5">
            {item.resources.map((r) => (
              <a
                key={r.label}
                href={r.href ?? "#"}
                // 1. REMOVE e.preventDefault() so the link can actually be followed
                // onClick={(e) => e.preventDefault()}

                // 2. ADD these attributes to open in a new tab securely
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-1.5
                  px-2.5 py-1.5 rounded-md
                  text-[13px] font-medium
                  bg-[#EBE9E3] border border-black/[0.07]
                  text-black/70
                  transition-all duration-200
                  hover:text-[#C18374] hover:border-[#C18374]/30
                  no-underline truncate
                "
              >
                <span className="shrink-0">{ICONS[r.icon]}</span>
                <span className="truncate">{r.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSourceCard;
