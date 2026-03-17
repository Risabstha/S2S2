import { useRef, useState } from "react";
import TrainingCard from "../../components/client/TrainingCard";
import bardibasImg1 from "../../assets/client/bardibas training/1.jpg";
import bardibasImg2 from "../../assets/client/bardibas training/2.jpg";
import bardibasImg3 from "../../assets/client/bardibas training/3.jpg";
import bardibasImg4 from "../../assets/client/bardibas training/5.jpg";
import bardibasImg5 from "../../assets/client/bardibas training/6.jpg";
import bardibasImg6 from "../../assets/client/bardibas training/7.jpg";

const BARDIBAS_IMAGES = [
  bardibasImg1,
  bardibasImg2,
  bardibasImg3,
  bardibasImg4,
  bardibasImg5,
  bardibasImg6,
];
// Bento Grid or Card Grid.

const COLLAGE_IMAGES = BARDIBAS_IMAGES.slice(0, 4);

const CARD_DATA = [
  {
    num: "01",
    title: "Private Data",
    desc: "Run code inside hardware-secured enclaves. Data stays encrypted even from server operators.",
  },
  {
    num: "02",
    title: "Verifiable Execution",
    desc: "Every execution produces cryptographic proof that users can verify without blind trust.",
  },
  {
    num: "01",
    title: "Private Data",
    desc: "Run code inside hardware-secured enclaves. Data stays encrypted even from server operators.",
  },
  {
    num: "02",
    title: "Verifiable Execution",
    desc: "Every execution produces cryptographic proof that users can verify without blind trust.",
  },
  {
    num: "01",
    title: "Private Data",
    desc: "Run code inside hardware-secured enclaves. Data stays encrypted even from server operators.",
    canvas: <div>not available</div>,
  },
  {
    num: "02",
    title: "Verifiable Execution",
    desc: "Every execution produces cryptographic proof that users can verify without blind trust.",
    canvas: <div>not available</div>,
  },
];

export default function BootCampTraining() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastXRef = useRef(0);

  const cards = CARD_DATA.map((card, index) => ({
    ...card,
    canvas:
      index === 0 ? (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full overflow-hidden rounded-r-[80px] gap-2  bg-[#d9d7d0]">
          {COLLAGE_IMAGES.map((image, imageIndex) => (
            <img
              key={image}
              src={image}
              alt={`Bardibas training collage ${imageIndex + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ))}
        </div>
      ) : (
        <div>not available</div>
      ),
  }));

  const getCardStep = () => {
    if (!scrollRef.current) return 0;
    const card = scrollRef.current.firstElementChild as HTMLElement | null;
    if (!card) return 0;
    const gap = Number.parseFloat(getComputedStyle(scrollRef.current).columnGap || "0");
    return card.offsetWidth + gap;
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = getCardStep();
    if (!step) return;
    const currentIndex = Math.round(scrollRef.current.scrollLeft / step);
    const nextIndex = dir === "left" ? currentIndex - 1 : currentIndex + 1;
    scrollRef.current.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });
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
    scrollRef.current.scrollLeft = scrollLeftRef.current - (x - startXRef.current);
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

    if (step) {
      scrollRef.current.scrollTo({
        left: targetIndex * step,
        behavior: "smooth",
      });
    }

    setIsDragging(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[100rem] bg-[#ebe9e3] flex flex-col">
        {/* Header row with nav arrows */}
        <div className="flex items-center justify-between mt-15 mb-15 px-6">
          <h1 className="text-4xl">Bootcamp Training</h1>

          {/*  arrow left and right */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontally scrollable card row */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-x-2 border-y border-black/[0.07] border cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

          {cards.map((card, index) => (
            <div
              key={`${card.num}-${index}`}
              className={`flex-shrink-0 w-[20rem]  sm:w-[47.5rem] border-r border-black/[0.07] last:border-r-0`}
            >
              <div key={card.num} className="flex flex-col p-5 sm:p-6 lg:p-7 gap-4  lg:gap-5">

                <TrainingCard card={card} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
