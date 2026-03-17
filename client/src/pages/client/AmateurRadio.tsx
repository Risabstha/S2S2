import NavBar from "../../layouts/client/NavBar";

interface Document {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl?: string;
}

const DOCUMENTS: Document[] = [
  {
    id: "antenna",
    title: "Antenna Radiation Pattern",
    description:
      "Technical documentation for antenna radiation patterns and performance characteristics for S2S amateur radio operations.",
    icon: <AntennIcon />,
    downloadUrl: "#",
  },
  {
    id: "communication",
    title: "Communication Block Diagram",
    description:
      "Complete block diagram showing communication system architecture and signal flow for the satellite platform.",
    icon: <BlockDiagramIcon />,
    downloadUrl: "#",
  },
  {
    id: "linkmargin",
    title: "Link Margin Calculation",
    description:
      "Detailed calculations and analysis of link margins for transmission planning and signal reliability assessment.",
    icon: <CalculationIcon />,
    downloadUrl: "#",
  },
  {
    id: "transmission",
    title: "Transmission Plan",
    description:
      "Comprehensive transmission plan detailing frequency allocations, timing schedules, and operational procedures.",
    icon: <TransmissionIcon />,
    downloadUrl: "#",
  },
];

function AntennIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12 text-[#2e50f0]"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
    </svg>
  );
}

function BlockDiagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12 text-[#2e50f0]"
    >
      <rect x="3" y="3" width="6" height="6" />
      <rect x="11" y="3" width="6" height="6" />
      <rect x="3" y="11" width="6" height="6" />
      <rect x="11" y="11" width="6" height="6" />
      <line
        x1="9"
        y1="6"
        x2="11"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="6"
        y1="9"
        x2="6"
        y2="11"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="9"
        x2="14"
        y2="11"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function CalculationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12 text-[#2e50f0]"
    >
      <path d="M7 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm0 2h10v16H7V4zm2 3h6v2H9V7zm0 3h6v2H9v-2zm0 3h6v2H9v-2z" />
    </svg>
  );
}

function TransmissionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12 text-[#2e50f0]"
    >
      <path d="M21.5 2h-19C1.12 2 0 3.12 0 4.5v15C0 20.88 1.12 22 2.5 22h19c1.38 0 2.5-1.12 2.5-2.5v-15C24 3.12 22.88 2 21.5 2zm0 15h-19v-11h19v11zm-10-6L6.5 14h11L11.5 11z" />
    </svg>
  );
}

export default function AmateurRadio() {
  return (
    <div className="w-full bg-[#ebe9e3] min-h-screen">
      <div className="flex justify-center">
        <NavBar />
      </div>

      <section className="w-full max-w-400 mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-20 relative">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-[#1a1a18] playfairDisplayDiv">
            Amateur Radio Information
          </h1>
          <p className="text-[12px] uppercase tracking-[0.14em] text-black/45 mb-3">
            S2S Project Information for Amateur Radio Operators
          </p>
        </header>

        {/* Grid of Document Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="p-8 sm:p-10 border-black/8 md:odd:border-r border-b md:[&:nth-child(1)]:border-b md:[&:nth-child(2)]:border-b "
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className=" p-5 rounded-2xl group-hover:bg-[#e8e8ff] transition-colors duration-300">
                  {doc.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1a1a18] text-center mb-3">
                {doc.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-[1.6] text-black/65 text-center mb-6">
                {doc.description}
              </p>

              {/* Download Button */}
              <div className="flex justify-center">
                <a
                  href={doc.downloadUrl ?? "#"}
                  className="inline-flex items-center justify-center bg-[#2e50f0] hover:bg-[#2342d1] text-white font-semibold py-2.5 px-8 rounded-lg transition-all duration-300 gap-2 group/btn"
                >
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
