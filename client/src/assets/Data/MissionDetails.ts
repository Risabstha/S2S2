import ADCS from "../client/mission/ ADCS.pdf";
import EPDM from "../client/mission/EPDM.pdf";
import Camera from "../client/mission/Camera.pdf";
import Digipeater from "../client/mission/Digipeater.pdf";

// ─── TYPES ────────────────────────────────────────────────────────────────────

export type ResourceIcon = "pdf" | "hardware" | "zip" | "github";

export interface OpenSourceResource {
  label: string;
  icon: ResourceIcon;
  href?: string; // optional link to resource (e.g., PDF, GitHub repo)
}

export interface OpenSourceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  // accentColor: string;   // hex – used for dot, border, hover glows
  resources: OpenSourceResource[];
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

export const missionSystemITEMS: OpenSourceItem[] = [
  {
    id: "1",
    title: "ADCS",
    description:
      "Attitude Determination and Control System (ADCS) is a crucial subsystem of a satellite that determines and controls its orientation in space.",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765266343_adcswebp.webp",
    imageAlt: "ADCS board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: ADCS},
      // { label: "Hardware Schematics",     icon: "hardware"},
      // { label: "Files ZIP",        icon: "zip", link: "" },
      // { label: "GitHub Repo",      icon: "github", link: "" },
    ],
  },
  {
    id: "2",
    title: "EPDM",
    description:
      "The Earthquake Precursor Detection Mission (EPDM) aims to detect early earthquake signals using advanced Quad-Mag technology. It employs four PNI RM3100 magnetometers to monitor ULF and ELF electromagnetic emissions from the Earths surface.",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765267619_EPDMwebp.webp",
    imageAlt: "EPDM board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: EPDM },
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip", link: "" },
    ],
  },
  {
    id: "3",
    title: "Camera",
    description:
      "The satellite's camera system captures high-resolution images of Earth and space, providing valuable data for scientific research and Earth observation.",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765266114_camerawebp.webp",
    imageAlt: "Camera board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: Camera },
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip" },
      // { label: "GitHub Repo",      icon: "github", link: "" },
    ],
  },
  {
    id: "4",
    title: "Digipeater",
    description:
      "The mission establishes and maintains communication between the satellite and ground station. It enables command reception and data transmission over the Amateur UHF band.",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765267983_digipeaterwebp.webp",
    imageAlt: "Digipeater board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: Digipeater },
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip" },
      // { label: "GitHub Repo",      icon: "github", link: ""},
    ],
  },
 
];