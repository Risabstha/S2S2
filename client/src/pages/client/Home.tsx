import NavBar from "../../layouts/client/NavBar";

export default function Home() {
  const ringSizes = [
    "w-13 h-13",
    "w-26 h-26",
    "w-39 h-39",
    "w-52 h-52",
    "w-65 h-65",
    "w-78 h-78",
    "w-91 h-91",
    "w-104 h-104",
    "w-117 h-117",
    "w-130 h-130",
    "w-143 h-143",
    "w-156 h-156",
    "w-169 h-169",
    "w-182 h-182",
    "w-195 h-195",
    "w-208 h-208",
    "w-221 h-221",
    "w-234 h-234",
  ];

  return (
    <div className="w-full bg-[#ebe9e3] relative text-black overflow-x-hidden  max-w-[100rem] mx-auto">
      <div className="flex justify-center">
        <NavBar />
      </div>

      <section className="relative  w-full h-screen max-h-[80rem] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[18%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[33%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[50%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-[33%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-[18%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-black/[0.07]" />
        </div>

        {/* <div className="absolute  top-24 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pointer-events-none   ">
          {ringSizes.map((sizeClass, i) => (
            <div
              key={i}
              className={`absolute -top-1 rounded-full border border-black/9 ${sizeClass}`}
            />
          ))}
        </div> */}

        <div className="relative z-10 flex items-center  h-screen max-h-[80rem] max-w-400 mx-auto px-0 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="text-center max-w-255 mx-auto">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#2f5064]/80 mb-5 ">
            Slippers2Sat-2 · S2S-2 · 1U CubeSat
          </p>
          <h1 className="lg:text-[3rem] md:text-[2rem] text-[1.9rem] text-[#c18374] leading-[1.08] tracking-[-0.03em] font-bold mb-5 playfairDisplayDiv">
            Nepal's Middle School Nano-Satellite
          </h1>
          <p className="text-[#2f5064] text-[16px] leading-[1.75] mb-9 max-w-115 mx-auto">
            A 1U CubeSat designed and built by students - making Nepal a
            pioneer in educational space technology.
          </p>
          </div>

        </div>
      </section>

    </div>
  );
}