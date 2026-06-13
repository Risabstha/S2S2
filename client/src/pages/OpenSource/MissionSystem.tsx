import { useRef, useLayoutEffect, useState } from "react";
import OpenSourceCard from "../../components/client/OpenSourceCard";
import { missionSystemITEMS } from "../../assets/Data/MissionDetails";
import NavBar from "../../layouts/client/NavBar";
import Footer from "../../components/client/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface OpenSourceResource {
  label: string;
  icon: "pdf" | "hardware" | "zip" | "github";
  href?: string;
}


// ─── breakpoint helper ────────────────────────────────────────────────────────
const isDesktop = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 1024px)").matches;

export default function MissionSystem() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    scrollStart: 0,
    moved: false,
  });
  const [_activeIndex, setActiveIndex] = useState(0);

  // GSAP horizontal scroll — desktop only.
  // On mobile/tablet the CSS snap scroll takes over (no JS needed).
  useLayoutEffect(() => {
    if (!isDesktop()) return; // skip on touch viewports

    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (!trigger || !track) return;

    const getDistance = () => track.scrollWidth - trigger.offsetWidth;

    //! This code creates a horizontal scrolling animation controlled by vertical page scrolling using GSAP and ScrollTrigger.
    const ctx = gsap.context(() => {
      //? scopes all GSAP animations created inside it to a specific element (triggerRef).
      gsap.to(track, {
        //? Creates an animation that moves track from its current state to the values specified.
        x: () => -getDistance(), //? Recalculate the value whenever ScrollTrigger refreshes.
        // power4 - stronger, power2.out : starts fast ends slow , power2.in : starts slow ends fast, power2.inout : starts slow, speeds up, then slows down again.
        ease: "power4.inout", //? which starts fast and slows down.
        scrollTrigger: {
          //? This connects the animation to page scrolling.
          trigger, //? This element determines when the ScrollTrigger starts and ends.
          start: () => {
            // if (window.innerWidth < 1424) {
            //   return "top 70px"; // tablet
            // }
            return "center center "; // desktop
          }, //! "<position on trigger> <position on viewport>"  When the top of the trigger element reaches 80% down the viewport, start the animation.
          end: () => `+=${getDistance()}`, //? This determines how far the user must scroll.
          scrub: 1, //? Animation takes roughly 1 second to catch up to scroll position.
          pin: true, //? Pins the trigger element: Section stays fixed while animation happens.
          anticipatePin: 1, //? Helps avoid visual jumps when pinning begins.
          invalidateOnRefresh: true, //? Recalculates start/end values on scroll-trigger refresh, important for responsive layouts.
        },
      });
    }, triggerRef);

    return () => ctx.revert(); //will automatically:   Kill animations,  Remove ScrollTriggers,  Restore inline styles
  }, []);

  // ── Mouse drag ────────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.pageX,
      scrollStart: el.scrollLeft,
      moved: false,
    };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = e.pageX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollStart - delta;
  };

  const onMouseUp = () => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current.active = false;
    el.style.cursor = "grab";
    el.style.userSelect = "";
  };

  // ── Active dot tracking ───────────────────────────────────────────────────
  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // card width = 82vw on mobile, snap points are evenly spaced
    const cardWidth = el.scrollWidth / missionSystemITEMS.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, missionSystemITEMS.length - 1));
  };


  return (
    <div className="w-full text-black/80 bg-[--bg]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap"
      />

      <div className="flex justify-center">
        <NavBar />
      </div>

      {/* ── Page header ── */}
      <section className="w-full max-w-400 mx-auto px-6 sm:px-8 lg:px-12 lg:mt-35 mt-22">
        <header className="mb-8 sm:mb-18">
          <h1 className="text-[clamp(1.5rem,4vw,3.2rem)] leading-[1.1] playfairDisplayDiv text-[#C18374]">
            S2S-2 Mission
          </h1>
          <p className="text-[12px] uppercase tracking-[0.14em] text-black/45 mb-3">
            Explore our spacecraft mission system components with technical
            documentation and design files
          </p>
        </header>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE / TABLET  (< lg)
          Native horizontal snap scroll — no JS, works perfectly on touch.
          Hidden on desktop via `lg:hidden`.
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-4 sm:px-6 mb-30">
        {/* hint */}
        <p className="text-[10px] uppercase tracking-widest text-black/30 mb-3 font-['Syne'] flex items-center gap-1.5 ">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Swipe to explore
        </p>

        {/* scroll strip */}
        <div
          ref={scrollRef}
          className="
          flex 
          md:gap-2 gap-6                  {/* Uniform 24px spacing between items */}
          overflow-x-auto
          snap-x snap-mandatory  {/* Snapping remains enabled */}
          scroll-smooth
          py-4
          px-6                  {/* Side padding gives breathing room on mobile */}
          cursor-grab
          select-none
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden m
  "
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onScroll={onScroll}
        >
          {missionSystemITEMS.map((item, i) => (
            <div
              key={item.id}
              /* w-[calc(100vw-3rem)] -> Full screen width minus the left/right container padding (1 item visible)
                md:w-[calc(50vw-2rem)] -> Half screen width minus calculated gaps (Exactly 2 items visible)
              */
              className="shrink-0 snap-start w-[calc(100vw-2rem)] md:w-[calc(50vw-2rem)]"
              onClick={(e) => {
                if (drag.current.moved) e.preventDefault();
              }}
            >
              <OpenSourceCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP  (≥ lg)
          GSAP pin + horizontal translate — same as before.
          Hidden on mobile via `hidden lg:block`.
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={triggerRef}
        className="
          hidden lg:block max-w-400 mx-auto mb-30
          relative w-full overflow-hidden
          max-h-[35rem] h-[100svh]
        "
      >
        <div
          ref={trackRef}
          className="
            absolute top-0 left-0 h-full 
            flex items-center
            will-change-transform
            px-12
          "
        >
          {missionSystemITEMS.map((item, i) => (
            <div
              key={item.id}
              className=
                {`w-[34.1%]
                shrink-0 flex items-center justify-center
               ${item.id==="1"? 'pl-0 pr-4': 'px-4'}`}

            >
              <OpenSourceCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
