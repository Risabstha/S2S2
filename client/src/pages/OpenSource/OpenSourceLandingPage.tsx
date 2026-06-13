import React from "react";
import { ArrowRight } from "lucide-react";
import NavBar from "../../layouts/client/NavBar";
import Footer from "../../components/client/Footer";
import { useNavigate } from "react-router-dom";

// Define types for the card items
interface CardProps {
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  icon: React.ReactNode;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  items,
  buttonText,
  icon,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-[420px] bg-[#f1f1ee] rounded-lg shadow-sm border border-slate-100/80 overflow-hidden min-h-[460px]">
      {/* Card Content */}
      <div className="p-8 pb-4">
        <div className="flex items-center gap-6 mb-4">
          {/* Icon */}
          <div className="mb-3 text-purple-600 ">{icon}</div>
          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-800 mb-3 ">{title}</h2>
        </div>
        {/* Description */}
        <p className="text-md text-slate-500 leading-relaxed mb-6">
          {description}
        </p>

        {/* List Title */}
        <p className="text-md text-slate-400  tracking-wider mb-4">
          It includes:
        </p>

        {/* List Items */}
        <ul className="space-y-3 ml-4 xl:ml-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm font-medium text-slate-700"
            >
              {/* Custom Checkmark Icon */}
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-indigo-600">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer / Action Button */}
      <div className="p-6 bg-[#f1f1ee] border-t border-slate-100/60 flex items-center">
        <button
          onClick={onButtonClick}
          className="flex w-full justify-center items-center gap-2 px-5 py-2.5 bg-[#EDEAED] hover:bg-[#D8D4D8] border border-slate-200 hover:border-slate-300 rounded-md text-base  font-semibold text-slate-800 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          {buttonText}
          <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default function OpenSourceLandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(destination);
  };

  return (
    <div className="w-full bg-[#ebe9e3] min-h-screen lg:mt-35  mt-22 ">
      <div className=" pb-30 antialiased">
        <div className="flex justify-center">
          <NavBar />
        </div>
        <section className="w-full max-w-400 mx-auto px-6 sm:px-8 lg:px-12 pb-30 relative">
          {/* Header */}
          <header className="mb-8 sm:mb-10 ">
            <h1 className="text-[clamp(1.5rem,4vw,3.2rem)] leading-[1.1] playfairDisplayDiv text-[#C18374]">
              Open Source Resources
            </h1>
            <p className="text-[11px] lg:text-[12px] uppercase tracking-[0.14em] pt-1 text-black/45 mb-3">
              Select a mission / system to navigate{" "}
            </p>
          </header>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row   gap-6 lg:gap-6 xl:gap-12 w-full  justify-center items-center md:items-stretch">
            {/* BUS System Card */}
            {/* <Card
              title="BUS System"
              description="The bus system provides the core infrastructure required for satellite operation."
              items={[
                "Daughter Board",
                "Antenna Board",
                "Backplane Board",
                "Structure",
              ]}
              buttonText="Access BUS System"
              onButtonClick={() => handleNavigation("bus/amateur")}
              icon={
                // Custom Bi-directional Arrow Icon matching the image 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left-right-icon lucide-arrow-left-right"
                >
                  <path d="M8 3 4 7l4 4" />
                  <path d="M4 7h16" />
                  <path d="m16 21 4-4-4-4" />
                  <path d="M20 17H4" />
                </svg>
              }
            /> */}

            {/* S2S Mission Card */}
             <Card
              title="S2S-2 Mission"
              description="The mission system consists of payloads that define the satellite's purpose."
              items={["ADCS", "EPDM", "Camera", "Digipeater"]}
              buttonText="Launch S2S-2 Mission"
              onButtonClick={() => handleNavigation("mission/amateur")}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-satellite-dish-icon lucide-satellite-dish"
                >
                  <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
                  <path d="m9 15 3-3" />
                  <path d="M17 13a6 6 0 0 0-6-6" />
                  <path d="M21 13A10 10 0 0 0 11 3" />
                </svg>
              }
            /> 
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
