import NavBar from "../../layouts/client/NavBar";

// ── Component ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <div className="h-full max-h-[70rem]  w-full  bg-[#ebe9e3] text-black overflow-hidden relative ">
        {/* ─────────── Navigation Bar ─────────── */}
        <div className=" flex justify-center   ">
          <NavBar />
        </div>

        {/* ─────────── HERO ─────────── */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
          {/* Vertical grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[15%] bottom-[1%] w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[28%] bottom-[25%] w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[40%] bottom-[1%]
             w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[50%] bottom-[25%] w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[60%] bottom-[25%] w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[72%] bottom-[25%] w-px bg-black/[0.07]" />
            <div className="absolute top-0 left-[85%] bottom-[1%] w-px bg-black/[0.07]" />
          </div>

          {/* Horizontal grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* <div className="absolute left-0 right-0 h-px top-[15%] bg-black/[0.07]" /> */}
            {/* <div className="absolute left-0 right-0 h-px top-[28%] bg-black/[0.07]" /> */}
            {/* <div className="absolute left-0 right-0 h-px top-[40%] bg-black/[0.07]" /> */}
            {/* <div className="absolute left-0 right-0 h-px top-[50%] bg-black/[0.07]" /> */}
            {/* <div className="absolute left-0 right-0 h-px top-[60%] bg-black/[0.07]" /> */}
            <div className="absolute left-[15%] right-[15%] h-px top-[75%] bg-black/[0.07]" />
            <div className="absolute left-[0%] right-[0%] h-px top-[99%] bg-black/[0.07]" />
          </div>

          {/* Text content */}
          <div className="relative z-10 text-center px-6 max-w-[620px] mt-[58px]">
            <h1 className="text-base leading-[1.06] tracking-[-0.025em] text-black mb-5">
              Nepal's First Middle School Nano-Satellite Project Slippers2Sat (S2S) is a 1U CubeSat project initiated by Antarikchya Pratisthan Nepal (APN) with financial support from Amateur Radio Digital Communications (ARDC). The satellite is being designed and developed by a team of six APN engineers, who are also training students about satellite missions. The Space System Laboratory (SSL) has been set up at Navodaya School, where students live and learn while engaging in hands-on satellite development. The mission is scheduled for launch in the second quarter of 2025, marking a pioneering step for Nepal in educational space technology.
              <br />
              asdf
            </h1>
            <p className="text-[#444444] text-[16.5px] leading-[1.65] mb-9 max-w-[430px] mx-auto">
              ......
            </p>
            {/* <button className="bg-[#2e50f0] hover:bg-[#3a5cf5] text-white font-medium text-[15px] px-10 py-3.5 rounded-full transition-all duration-150 hover:shadow-[0_0_32px_rgba(46,80,240,0.45)]">
              Start Here
            </button> */}
          </div>
        </section>
      </div>
    </>
  );
}
