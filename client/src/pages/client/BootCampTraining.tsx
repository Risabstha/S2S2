import { useRef, useState } from "react";
import TrainingCard from "../../components/client/TrainingCard";

const CARDS = [
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
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const stopDrag = () => setIsDragging(false);

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

            {CARDS.map((card) => (
              <div
                key={card.num}
                className={`flex-shrink-0 w-[20rem]  sm:w-[33rem] border-r border-black/[0.07] last:border-r-0`}
              >
                <TrainingCard card={card} />
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}
