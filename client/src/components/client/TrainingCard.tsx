
import { useEffect, useRef, type JSX } from "react";


  interface cards {
    num: string;
    title: string;
    desc: string;
    canvas: JSX.Element;
  }

  interface CardProps {
    card: cards;
  }

const TrainingCard = ({ card }: CardProps) => {
  return (
    <div>
                <div key={card.num} className="flex flex-col p-5 sm:p-6 lg:p-7 gap-4 lg:gap-5">
            {/* Number */}
            <span className="text-[13px] text-[#888] font-normal tabular-nums">
              {card.num}
            </span>

            {/* Canvas area */}
            <div className="w-full aspect-[4/3] bg-[#dedad3] rounded-r-[80px] overflow-hidden">
              {card.canvas}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 pt-1">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-black leading-snug">
                {card.title}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#555] leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
    </div>
  )
}

export default TrainingCard
