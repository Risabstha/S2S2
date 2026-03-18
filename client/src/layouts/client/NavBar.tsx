import { useState, type ReactElement } from "react";
import logo from "../../assets/client/s2s2logo.webp";
// import two_finger from "../../assets/client/two_fingers2.png";

// ── Types ──────────────────────────────────────────────────────────────────
type SubItem = { label: string; desc: string; href: string; external?: boolean };
type NavItem = { label: string; sub: SubItem[]; href?: string };

// ── Nav data ───────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  // {
  //   label: "Open Source",
  //   sub: [
  //     { label: "S2S-2 Missions", desc: "Mission logs, objectives and telemetry.", href: "/" },
  //     { label: "Bus System", desc: "Satellite bus architecture and hardware specs.", href: "/" },
  //   ],
  // },
  { label: "Amateur Radio", sub: [], href: "/amateur-radio" },
  // { label: "Gallery", sub: [{
  // label: "Training", desc: "Training materials and resources." }]
  // },
  { label: "About Us", sub: [], href: "/aboutus" },
];

// ── Icons ──────────────────────────────────────────────────────────────────
function IconRocket() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#888]" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 2s4 2.5 4 8l-4 6-4-6c0-5.5 4-8 4-8z" />
      <circle cx="10" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <path d="M7.5 14.5l-2.5 2.5M12.5 14.5l2.5 2.5" />
    </svg>
  );
}

function IconChip() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#888]" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="10" height="10" rx="1.5" />
      <path d="M8 5V3M12 5V3M8 17v-2M12 17v-2M5 8H3M5 12H3M15 8h2M15 12h2" />
      <rect x="7.5" y="7.5" width="5" height="5" rx="0.5" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-[#555] flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 10L10 2M10 2H5M10 2v5" />
    </svg>
  );
}

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      className={`w-2.5 h-2.5 ml-0.5 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 10 6" fill="none"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </>
      )}
    </svg>
  );
}

const SUB_ICONS: Record<string, ReactElement> = {
  "S2S-2 Missions": <IconRocket />,
  "Bus System": <IconChip />,
};

// ── Logo ───────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a href="/" className="flex items-center gap-0 no-underline">
      <img src={logo} alt="S2S-2 logo" width={48} height={48} className="rounded-full object-cover" />
      <div className="flex items-baseline gap-0 ml-1">
        <span className="font-bold text-2xl text-[#2F5064] tracking-[0.12em] select-nonej playfairDisplayDiv">Slippers</span>
        <span className="font-bold text-2xl text-[#C18374] tracking-[0.12em] select-none playfairDisplayDiv">2</span>
        <span className="font-bold text-2xl text-[#2F5064] tracking-[0.12em] select-none">Sat-</span>
      </div>
      <span className=" text-2xl font-bold  text-[#C18374] tracking-[0.12em] select-none playfairDisplayDiv">
        {/* <Bs2SquareFill size={18} /> */}
        {/* <img
          src={two_finger}
          alt="Two fingers icon"
          width={36}
          height={36}
          className="inline-block object-contain "
        /> */}
        2
      </span>
    </a>
  );
}

// ── Desktop Nav ────────────────────────────────────────────────────────────
function DesktopNav() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center justify-between w-full max-w-[100rem] mx-auto px-8 h-[90px]">
      <Logo />

      {/* Links */}
      <div className="flex items-center  gap-1.5 ">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpen(item.label)}
            onMouseLeave={() => setOpen(null)}
          >
            {item.sub.length > 0 ? (
              <button className="flex items-center gap-1 text-[#2F5064] text-[20px] hover:text-[#183148] px-3 py-7.5 rounded-lg transition-all duration-100 cursor-pointer ">
                {item.label}
                <ChevronDown open={open === item.label} />
              </button>
            ) : (
              <a
                href={item.href}
                className="flex items-center gap-1 text-[#2F5064] text-[20px] hover:text-[#183148] px-3 py-7.5 rounded-lg transition-all duration-100 cursor-pointer no-underline"
              >
                {item.label}
              </a>
            )}

            {item.sub.length > 0 && open === item.label && (
              <div className="absolute top-full left-0 bg-[#ebe9e3] border rounded-sm border-black/[0.09] p-2 min-w-[320px] shadow-2xl shadow-black/10 z-50">
                <div className="absolute -top-3 left-0 right-0 h-3" />
                {item.sub.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-black/[0.05] rounded-sm transition-colors group no-underline"
                  >
                    <div className="mt-0.5 w-8 h-8 flex-shrink-0 rounded-lg bg-[#ebe9e3] border border-black/[0.08] flex items-center justify-center">
                      {SUB_ICONS[s.label]}
                    </div>
                    <div className="flex-1 min-w-0 ">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[17px] font-medium text-[#C18374]">{s.label}</span>
                        {s.external && <ExternalArrow />}
                      </div>
                      <p className="text-[15px] text-[#C18374] mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      {/* <button className="bg-[#C18374] hover:bg-[#183148] text-white text-[13.5px] font-medium px-5 py-[7px] rounded-full transition-colors duration-150">
        Contact Us
      </button> */}
    </div>
  );
}

// ── Mobile Nav ─────────────────────────────────────────────────────────────
function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (label: string) =>
    setExpandedItem((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex md:hidden items-center justify-between px-5 h-[62px]">
        <Logo />
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="text-black p-1.5 rounded-lg hover:bg-black/[0.05] transition-colors"
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/[0.08] bg-[#ebe9e3] px-4 pb-5">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="">
              {item.sub.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full py-3.5 text-[14px] font-medium text-[#2F5064] hover:text-[#183148] transition-colors"
                  >
                    {item.label}
                    <ChevronDown open={expandedItem === item.label} />
                  </button>

                  {expandedItem === item.label && (
                    <div className="pb-2 pl-2 flex flex-col gap-1">
                      {item.sub.map((s) => (
                        <a
                          key={s.label}
                          href="#"
                          className="flex items-start gap-3 px-3 py-2.5 hover:bg-black/[0.05] rounded-lg transition-colors no-underline"
                        >
                          <div className="mt-0.5 w-7 h-7 flex-shrink-0 rounded-md bg-[#ebe9e3] border border-black/[0.08] flex items-center justify-center">
                            {SUB_ICONS[s.label]}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[13px] font-medium text-[#2F5064]">{s.label}</span>
                              {s.external && <ExternalArrow />}
                            </div>
                            <p className="text-[11.5px] text-[#2F5064] mt-0.5 leading-relaxed">{s.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href ?? "#"}
                  className="flex items-center py-3.5 text-[14px] font-medium text-[#2F5064] hover:text-[#183148] transition-colors no-underline"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          {/* CTA */}
          {/* <button className="mt-4 w-full bg-[#C18374] hover:bg-[#183148] text-white text-[14px] font-medium py-2.5 rounded-full transition-colors duration-150">
            Contact Us
          </button> */}
        </div>
      )}
    </>
  );
}

// ── NavBar ─────────────────────────────────────────────────────────────────
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ebe9e3] ">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default NavBar;