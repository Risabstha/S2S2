import { useRef, useState } from "react";
import kriti from "../../assets/client/Team/kriti.webp";
import subrat from "../../assets/client/Team/Subrat.webp";
import TeamCard, { type TeamMember } from "../../components/client/TeamCard";
import male from "../../assets/client/Team/male.webp"

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    img: kriti,
    name: "Kriti Dahal",
    role: "Project Manager",
    bio: "Leads the Slippers2Sat-2 mission planning, cross-team coordination, and launch readiness activities.",
  },
  
    {
    id: "5",
    name: "Arnav Shrestha",
    role: "Satellite Research Fellow",
    img: male,
    bio: "Connects mission activities with student learning modules and school-based satellite workshops.",
  },
  {
    id: "7",
    img: subrat,
    name: "Subrat Karna",
    role: "Satellite Research Fellow",
    bio: "Builds onboard software and integrates hardware interfaces for robust CubeSat operations.",
  },

];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);   // source-of-truth for snap decision
  const total = TEAM_MEMBERS.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragOffsetRef.current = 0;
    setIsTransitioning(false);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - startXRef.current;
    dragOffsetRef.current = delta;
    setDragOffset(delta);
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsTransitioning(true);
    const delta = dragOffsetRef.current;
    if (delta > 60) prev();
    else if (delta < -60) next();
    setDragOffset(0);
    dragOffsetRef.current = 0;
  };

  const onPointerCancel = () => {
    // reset without snapping when browser takes over (e.g. native scroll)
    isDraggingRef.current = false;
    setIsTransitioning(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;
  };

  return (
    <section className="w-full bg-[#ebe9e3] pt-30 md:pt-50 md:pb-30 pb-20 px-6 sm:px-8 lg:px-12 ">
      <div className="w-full max-w-[100rem] mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="text-[12px] uppercase tracking-[0.14em] text-black/45 mb-3">
            Meet the
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] text-[#C18374] leading-[1.1] text-[#1a1a18] playfairDisplayDiv">
            Team Members
          </h1>
        </div>

        {/* ── Mobile Slider (< md) ── */}
        <div className="md:hidden">
          <div
            className="overflow-hidden cursor-grabactive:cursor-grabbing select-none -mx-2"
            style={{ touchAction: 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
          >
            <div
              className="flex "
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
                transition: isTransitioning ? "transform 0.5s cubic-bezier(0.22,1,0.36,1)" : "none",
              }}
            >
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="w-full flex-shrink-0 px-2">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center  justify-between mt-6">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous member"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/[0.06] transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TEAM_MEMBERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to member ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 h-2 bg-black/70"
                      : "w-2 h-2 bg-black/25 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next member"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/[0.06] transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop / Tablet Grid (md+) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <style>{`
        .clip-member-badge {
          clip-path: polygon(0 0, 78% 0, 100% 24%, 100% 100%, 23% 100%, 0 76%);
        }
      `}</style>
    </section>
  );
};

export default Team;

