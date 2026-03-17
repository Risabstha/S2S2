
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
        {/* Number */}
        <span className="text-[13px] text-[#888] font-normal tabular-nums">
          {card.num}
        </span>

        {/* Canvas area */}
        <div className="w-full aspect-[4/3] shadow-[0_2px_12px_rgba(0,0,0,0.06)] bg-[#dedad3]  xl:p-3 lg:p-2 md:p-1.5 sm:p-1 p-2  rounded-br-[45px] md:rounded-br-[60px] xl:rounded-br-[80px] overflow-hidden">
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
  )
}

export default TrainingCard
