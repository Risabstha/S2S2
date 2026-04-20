import NavBar from "../../layouts/client/NavBar";

export default function Home() {


  return (
    <div className="w-full bg-[#ebe9e3] relative text-black overflow-x-hidden  max-w-[100rem] mx-auto home_bg">
      <div className="flex justify-center">
        <NavBar />
      </div>

      <section className="relative w-full h-screen max-h-[80rem] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
          src="https://main.antarikchya.org.np/images/s2s2/s2s2.mp4"
          poster="https://main.antarikchya.org.np/images/s2s2/s2s2.avif"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Black Tint Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10 pointer-events-none" />


        {/* <div className="absolute inset-0 pointer-events-none ">
          <div className="absolute top-0 left-0 bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[18%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[33%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 left-[50%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-[33%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-[18%] bottom-0 w-px bg-black/[0.07]" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-black/[0.07]" />
        </div> */}


        <div className="relative z-20 flex items-center h-screen max-h-[80rem] max-w-400 mx-auto px-0 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="text-center max-w-255 mx-auto">
          <p className="text-[14px] font-medium tracking-[0.16em] uppercase text-white mb-5 ">
            Slippers2Sat-2 · S2S-2 · 1U CubeSat
          </p>
          {/* <h1 className="lg:text-[3rem] md:text-[2rem] text-[1.9rem] text-[#c18374] leading-[1.08] tracking-[-0.03em] font-bold mb-5 playfairDisplayDiv"> */}
          <h1 className="lg:text-[3rem] md:text-[2rem] text-[1.9rem] text-gray-100 leading-[1.08] tracking-[-0.03em] font-bold mb-5 playfairDisplayDiv">
            Nepal's Middle School Nano-Satellite
          </h1>
          <p className="text-white text-[18px] leading-[1.75] mb-9 max-w-130 mx-auto">
            A 1U CubeSat designed and built by students - making Nepal a
            pioneer in educational space technology.
          </p>
          </div>

        </div>
      </section>

    </div>
  );
}