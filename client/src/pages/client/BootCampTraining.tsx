import { useEffect, useRef, useState, type JSX } from "react";
import TrainingCard from "../../components/client/TrainingCard";
import bardibasImg1 from "../../assets/client/bardibas training/1.jpg";
import bardibasImg2 from "../../assets/client/bardibas training/2.jpg";
import bardibasImg3 from "../../assets/client/bardibas training/3.jpg";
import bardibasImg4 from "../../assets/client/bardibas training/5.jpg";
import bardibasImg5 from "../../assets/client/bardibas training/6.jpg";
import bardibasImg6 from "../../assets/client/bardibas training/7.jpg";
import surkhetImg1 from "../../assets/client/surkhet training/1.jpg";
import surkhetImg2 from "../../assets/client/surkhet training/2.jpg";
import surkhetImg3 from "../../assets/client/surkhet training/3.jpg";
import surkhetImg4 from "../../assets/client/surkhet training/4.jpg";
import surkhetImg5 from "../../assets/client/surkhet training/5.jpg";

const BARDIBAS_IMAGES = [
  bardibasImg1,
  bardibasImg2,
  bardibasImg3,
  bardibasImg4,
  bardibasImg5,
  bardibasImg6,
];
const SURKHET_IMAGES = [
  surkhetImg1,
  surkhetImg2,
  surkhetImg3,
  surkhetImg4,
  surkhetImg5,
];

interface cards {
  num: string;
  title: string;
  desc: string;
  canvas: JSX.Element;
}

interface CardData {
  num: string;
  title: string;
  desc: string;
  images: string[];
}
// Bento Grid or Card Grid.

const getRotatingWindow = (
  images: string[],
  startIndex: number,
  count: number,
) => {
  if (!images.length) return [];
  return Array.from({ length: Math.min(count, images.length) }, (_, index) => {
    return images[(startIndex + index) % images.length];
  });
};

const CARD_DATA: CardData[] = [
  {
    num: "01",
    title: "Private Data",
    desc: "Run code inside hardware-secured enclaves. Data stays encrypted even from server operators.",
    images: BARDIBAS_IMAGES,
  },
  {
    num: "02",
    title: "Verifiable Execution",
    desc: "Every execution produces cryptographic proof that users can verify without blind trust.",
    images: SURKHET_IMAGES,
  },

];

export default function BootCampTraining() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const fadeTimeoutRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imageFrame, setImageFrame] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [showArrows, setShowArrows] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastXRef = useRef(0);

  useEffect(() => {
    const switchDuration = 550;
    const timer = window.setInterval(() => {
      setIsImageVisible(false);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setImageFrame((prev) => prev + 4);
        setIsImageVisible(true);
      }, switchDuration);
    }, 3000);

    return () => {
      window.clearInterval(timer);
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateArrowVisibility = () => {
      const isMobile = window.innerWidth < 640; // matches your sm:w-[49.75%] breakpoint
      const cardsPerView = isMobile ? 1 : 2;
      setShowArrows(CARD_DATA.length > cardsPerView);
    };

    updateArrowVisibility();
    window.addEventListener("resize", updateArrowVisibility);
    return () => window.removeEventListener("resize", updateArrowVisibility);
  }, []); // CARD_DATA.length is a constant, no need in deps

  const cards: cards[] = CARD_DATA.map((card) => {
    const collageImages = getRotatingWindow(card.images, imageFrame, 4);

    return {
      num: card.num,
      title: card.title,
      desc: card.desc,
      canvas: (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full overflow-hidden rounded-br-[45px] md:rounded-br-[60px] xl:rounded-br-[80px]  xl:gap-3 lg:gap-2 md:gap-1.5 sm:gap-1 gap-2 bg-[#d9d7d0]">
          {collageImages.map((image, imageIndex) => (
            <img
              key={image}
              src={image}
              alt={`${card.title} collage ${imageIndex + 1}`}
              className={`w-full h-full object-cover transition-all duration-500 ease-out ${isImageVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"} ${imageIndex === 0 ? "delay-0" : imageIndex === 1 ? "delay-75" : imageIndex === 2 ? "delay-150" : "delay-200"}`}
              draggable={false}
            />
          ))}
        </div>
      ),
    };
  });

  const getCardStep = () => {
    if (!scrollRef.current) return 0;
    const card = scrollRef.current.firstElementChild as HTMLElement | null;
    if (!card) return 0;
    const gap = Number.parseFloat(
      getComputedStyle(scrollRef.current).columnGap || "0",
    );
    return card.offsetWidth + gap;
  };

  const getCardsPerView = () => (window.innerWidth < 640 ? 1 : 2);

  const getMaxIndex = () => Math.max(CARD_DATA.length - getCardsPerView(), 0);

  const syncActiveIndex = () => {
    if (!scrollRef.current) return;
    const step = getCardStep();
    if (!step) return;
    const currentIndex = Math.round(scrollRef.current.scrollLeft / step);
    setActiveIndex(Math.min(Math.max(currentIndex, 0), getMaxIndex()));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const step = getCardStep();
    if (!step) return;
    const boundedIndex = Math.min(Math.max(index, 0), getMaxIndex());
    scrollRef.current.scrollTo({
      left: boundedIndex * step,
      behavior: "smooth",
    });
    setActiveIndex(boundedIndex);
  };

  const scroll = (dir: "left" | "right") => {
    scrollToIndex(activeIndex + (dir === "left" ? -1 : 1));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    startXRef.current = x;
    lastXRef.current = x;
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    lastXRef.current = x;
    scrollRef.current.scrollLeft =
      scrollLeftRef.current - (x - startXRef.current);
  };

  const stopDrag = () => {
    if (!isDragging || !scrollRef.current) return;

    const step = getCardStep();
    const dragDelta = lastXRef.current - startXRef.current;
    const dragThreshold = 30;
    const startIndex = step ? Math.round(scrollLeftRef.current / step) : 0;

    let targetIndex = startIndex;
    if (dragDelta > dragThreshold) targetIndex = startIndex - 1;
    if (dragDelta < -dragThreshold) targetIndex = startIndex + 1;

    if (step) scrollToIndex(targetIndex);

    setIsDragging(false);
  };

  const pageCount = Math.max(CARD_DATA.length - getCardsPerView() + 1, 1);

  return (
    <div className="w-full flex justify-center items-center pt-30 md:pt-50 md:pb-30 pb-20">
      <div className="w-full max-w-[100rem] bg-[#ebe9e3] flex flex-col">
        {/* Header row with nav arrows */}
        <div className={`flex items-center justify-between  px-6  mb-15`}>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-[#C18374] playfairDisplayDiv">Bootcamp Training</h1>
        </div>

        {/*  arrow left and right */}
        {/* Arrows — only shown when there are more cards than the viewport fits */}
        {/* {showArrows && (
          <div className="flex gap-3 justify-end mb-4 mr-10 ">
            <button
              onClick={() => scroll("left")}
              className="md:w-10 w-8 h-8 md:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="md:w-10 w-8 h-8 md:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        )} */}

        {/* Horizontally scrollable card row */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onScroll={syncActiveIndex}
          // snap-x snap-mandatory is a neat CSS way to snap to cards, but it doesn't work well with the custom drag behavior, so we handle snapping manually in stopDrag
          className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory gap-x-2 border-y border-black/[0.07] border cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.num}-${index}`}
              className={`snap-start flex-shrink-0 px-3 sm:px-0 xl:px-6 py-1  sm:py-0 xl:py-2 w-full sm:w-[49.75%] border-r border-black/[0.07] last:border-r-0`}
            >
              <div
                key={card.num}
                className="flex flex-col sm:p-6 lg:p-7  gap-4 lg:gap-5"
              >
                <TrainingCard card={card} />
              </div>
            </div>
          ))}
        </div>

        {showArrows && (
          <div className="flex items-center justify-between mt-3 mx-4  mb-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous training"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/[0.06] transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to training slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-5 h-2 bg-black/70"
                      : "w-2 h-2 bg-black/25 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              aria-label="Next training"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/[0.06] transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
