import { useEffect, useRef, useState, type ReactNode } from "react";

interface Objective {
  num: string;
  title: string;
  desc: string[];
  icon: ReactNode;
}

const OBJECTIVES: Objective[] = [
  {
    num: "01",
    title: "Mission",
    desc: [
      "DPM (Software-based Digipeater Mission)",
      "CAM Mission (Camera Mission)",
      "Active Attitude Determination and Control Mission (ADCS)",
      "Earthquake Precursor Detection Mission (EPDM)",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F5064" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Primary Objective",
    desc: [
      "In-house design, development, and operation of Nepal’s 1U CubeSat",
      "Test and demonstrate novel NXT_GEN_CUBUS designed in-house",
      "Give continuity to missions by Antarikchya Pratisthan Nepal (APN)",
      "Support education of lower-secondary students (middle school level)",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F5064" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Secondary Objectives",
    desc: [
      "Demonstrate text-based digipeater software for the amateur radio community",
      "Investigate earthquake precursors",
      "Take Earth images in NIR and RGB bands for normalized difference water index (McFeeter’s NDWI)",
      "Use advanced AI/ML algorithms to classify images on-board",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F5064" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  // {
  //   num: "04",
  //   title: "Sustainable Growth",
  //   desc: "Build local capacity so communities can continue to grow, train, and support one another long after programs conclude.",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="#1a3fd4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
  //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  //     </svg>
  //   ),
  // },
];

export default function MissionObjectives() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const section = sectionRef.current;
      const leftPanel = leftPanelRef.current;
      const leftContent = leftContentRef.current;

      if (!section || !leftPanel || !leftContent) return;

      // Only activate on sm+ (two-column layout)
      if (window.innerWidth < 640) {
        setLeftOffset(0);
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const panelHeight = leftPanel.offsetHeight;
      const contentHeight = leftContent.offsetHeight;
      const viewportHeight = window.innerHeight;

      const maxTravel = panelHeight - contentHeight;

      if (maxTravel <= 0) {
        setLeftOffset(0);
        return;
      }

      const travelStart = viewportHeight;
      const travelDistance = sectionRect.height + viewportHeight;
      const rawProgress = (travelStart - sectionRect.top) / travelDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      setLeftOffset(Math.round(progress * maxTravel));
    };

    const queueUpdate = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateOffset();
      });
    };

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    updateOffset();

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full flex justify-center items-start  bg-[#ebe9e3] mt-25 md:mt-30 "
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-[40%_60%]  ">

        {/* ── Left Panel ── */}
        <div
          ref={leftPanelRef}
          className="relative sm:border-r border-black/20  overflow-hidden "
        >
          {/* "Mission and Objectives" div is what actually moves */}
          <div
            ref={leftContentRef}
            className="px-10 md:py-16 relative z-10"
            style={{
              transform: `translateY(${leftOffset}px)`,
              // cubic-bezier(animation start, animation end, first control point, second control point)
              transition: "transform 0.22s cubic-bezier(0.1, 1, 0.1, 1)",
              willChange: "transform",
            }}
          >
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-[#1a1a18]  m-0 playfairDisplayDiv max-w-[450px] text-[#C18374]"
            >
              Our mission
              <br />
              <em className="text-black/70  font-italic " >
                &amp; objectives
              </em>
            </h2>
            <p className="mt-8 text-base leading-[1.75] text-black/60 max-w-[450px] ">
              Apart from the educational purposes, S2S-2 is planned to be a disaster assessment and disaster management satellite.
               Thus, the missions are related to Earth Observation and predicting or gathering data during the times of disasters 
               and also facilitate the flow of information at the time of disasters.
            </p>
          </div>

          {/* Watermark */}
          <div
            className="hidden md:block absolute ml-7 mb-5 -bottom-5 -left-5 text-black/[0.04] leading-none select-none pointer-events-none playfairDisplayDiv"
            style={{
              fontSize: "clamp(50px, 14vw, 100px)",
              fontWeight: 200,
              letterSpacing: "-0.04em",
            }}
            aria-hidden
          >
            Antarikchya
          </div>
        </div>

        {/* ── Right Panel — Objective Cards ── */}
        <div className="flex flex-col divide-y  md:divide-black/10">
          {OBJECTIVES.map((obj) => (
            <div
              key={obj.num}
              className="md:group border-none md:grid gap-6 px-10 py-9 transition-colors duration-200 hover:bg-black/[0.025]"
              style={{ gridTemplateColumns: "72px 1fr" }}
            >
              {/* Icon tile */}
              <div className="w-16 h-16 md:flex hidden rounded-2xl bg-black/[0.06]  flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-black/[0.09]">
                {obj.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] tracking-[0.1em] uppercase text-black/50 mb-1.5">
                  {obj.num}
                </p>
                <h3
                  className="md:text-[22px] text-[20px] font-medium  mb-2 leading-tight playfairDisplayDiv text-[#2F5064]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {obj.title}
                </h3>
                <ul className="text-[14px] md:text-[16px] leading-[1.7] text-black/70 m-0 list-disc pl-5 space-y-1">
                  {obj.desc.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}