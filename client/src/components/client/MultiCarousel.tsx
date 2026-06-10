import React, { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type MultiCarouselProps = {
  children: ReactNode;
};

 export const MultiCarousel = React.memo(({ children }: MultiCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    // containScroll: "trimSnaps",
  });

  const [canScroll, setCanScroll] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);


  // Check if scrolling is possible
  useEffect(() => {
    const checkScroll = () => {
      if (emblaApi) {
        const canScrollPrev = emblaApi.canScrollPrev();
        const canScrollNext = emblaApi.canScrollNext();
        setCanScroll(canScrollPrev || canScrollNext);
      }
    };

    checkScroll();
    emblaApi?.on("select", checkScroll);
    emblaApi?.on("reInit", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      emblaApi?.off("select", checkScroll);
      emblaApi?.off("reInit", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [emblaApi]);

  return (
    <div className="w-full flex justify-center ">
      <div className="relative w-full 2xl:max-w-[92.7rem] xl:max-w-[78.5rem] lg:max-w-[59rem] md:max-w-[38.5rem] max-w-[19.3rem]">
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden ">
          {/* Track */}
          <div className="flex">
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                className="
                  2xl:px-1
                  lg:px-3
                  md:px-2
                  px-2
                  flex-[0_0_100%]
                  md:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                  xl:flex-[0_0_25%]
                  2xl:flex-[0_0_20%]
                " 
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-12 right-5 flex gap-2 ">
          {/* Controls - Only show if scrolling is possible */}
          {canScroll && (
            <>
              <button
                type="button"
                title="left direction"
                onClick={scrollPrev}
                className={`w-12 h-8 font-light flex items-center cursor-pointer justify-center rounded-full border bg-white text-[#1e2939] border-gray-200 hover:bg-gray-100 shadow`}
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                type="button"
                title="right direction"
                onClick={scrollNext}
                className={`w-12 h-8 flex items-center justify-center cursor-pointer rounded-full border bg-white text-[#1e2939] border-gray-200 hover:bg-gray-100 shadow`}
              >
                <FaChevronRight size={13} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
});