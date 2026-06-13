import antenna from "../client/mission/Antenna Radiation Pattern-s2s2.pdf";
import power_budget from "../client/mission/Power Budget.pdf";
import transmission from "../client/mission/Transmission Plan.pdf";
import link_budget from "../client/mission/Link Budget.pdf";
import cad from "../client/mission/CAD_Drawing.pdf";
import com_block_diagram from "../client/mission/ComBlockDiagram.pdf";

// ─── TYPES (common type of bus system and mission) ────────────────────────────────────────────────────────────────────
import type { OpenSourceItem, } from "./MissionDetails";

// ─── DATA ─────────────────────────────────────────────────────────────────────

export const missionITEMS: OpenSourceItem[] = [
  {
    id: "111",
    title: "CAD",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765266343_adcswebp.webp",
    imageAlt: "OBC board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: cad},
      // { label: "Hardware Schematics",     icon: "hardware"},
      // { label: "Files ZIP",        icon: "zip", link: "" },
      // { label: "GitHub Repo",      icon: "github", link: "" },
    ],
  },
  {
    id: "1",
    title: "Transmission Plan",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765266343_adcswebp.webp",
    imageAlt: "transmission plan",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: transmission},
      // { label: "Hardware Schematics",     icon: "hardware"},
      // { label: "Files ZIP",        icon: "zip", link: "" },
      // { label: "GitHub Repo",      icon: "github", link: "" },
    ],
  },
  {
    id: "2",
    title: "Communication (COM)",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765267619_EPDMwebp.webp",
    imageAlt: "EPDM board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: com_block_diagram },
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip", link: "" },
    ],
  },
  {
    id: "3",
    title: "Power System (EPS)",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/admin/upload/mission/img/1765266114_camerawebp.webp",
    imageAlt: "Camera board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: power_budget },
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip" },
      // { label: "GitHub Repo",      icon: "github", link: "" },
    ],
  },
  {
    id: "4",
    title: "Antenna Radiation Pattern",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/images/bussystem/antennaboradwebp.webp",
    imageAlt: "Antenna board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: antenna},
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip" },
      // { label: "GitHub Repo",      icon: "github", link: ""},
    ],
  },
   {
    id: "5",
    title: "Link Budget",
    description:
      "",
    imageSrc: "https://s2s.antarikchya.org.np/images/bussystem/antennaboradwebp.webp",
    imageAlt: "Antenna board",
    resources: [
      { label: "Introduction PDF", icon: "pdf", href: link_budget},
      // { label: "Hardware Schematics",     icon: "hardware" },
      // { label: "Files ZIP",        icon: "zip" },
      // { label: "GitHub Repo",      icon: "github", link: ""},
    ],
  },
 
];