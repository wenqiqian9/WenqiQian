import { MemberRole, TeamMember, Publication, ResearchArea, NewsItem } from './types';

export const LAB_NAME = "Shanghai CHEER Lab";
export const LAB_FULL_NAME = "Chemical Engineering & Energy Research Lab";
export const UNIVERSITY = "Shanghai University / Tongji University"; // Placeholder, adjust based on real affiliation

export const HERO_IMAGE = "https://picsum.photos/1600/900?grayscale"; // Artistic generic lab background

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "r1",
    title: "Electrocatalysis & Energy Conversion",
    description: "Developing novel catalysts for water splitting, CO2 reduction, and fuel cells to enable a sustainable energy future.",
    iconName: "Zap",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "r2",
    title: "Advanced Battery Materials",
    description: "Design and synthesis of high-performance cathode/anode materials for Lithium-ion and Sodium-ion batteries.",
    iconName: "BatteryCharging",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "r3",
    title: "Nanomaterial Synthesis",
    description: "Controlled synthesis of 2D materials, MOFs, and COFs for environmental and energy applications.",
    iconName: "Hexagon",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "pi1",
    name: "Prof. Zhang San",
    role: MemberRole.PI,
    image: "https://picsum.photos/400/400?random=10",
    email: "zhang.san@university.edu.cn",
    description: "Professor of Chemical Engineering. Research interests focus on renewable energy storage and conversion."
  },
   {
    id: "pi1",
    name: "Prof. Zhang San",
    role: MemberRole.PI,
    image: "https://picsum.photos/400/400?random=10",
    email: "zhang.san@university.edu.cn",
    description: "Professor of Chemical Engineering. Research interests focus on renewable energy storage and conversion."
  },
  {
    id: "m1",
    name: "Dr. Li Si",
    role: MemberRole.POSTDOC,
    image: "https://picsum.photos/400/400?random=11",
    email: "li.si@university.edu.cn"
  },
  {
    id: "s1",
    name: "Wang Wu",
    role: MemberRole.PHD,
    image: "https://picsum.photos/400/400?random=12"
  },
  {
    id: "s2",
    name: "Zhao Liu",
    role: MemberRole.MASTER,
    image: "https://picsum.photos/400/400?random=13"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "High-performance electrocatalysts for oxygen evolution reaction based on NiFe layered double hydroxides",
    authors: "Wang W., Li S., Zhang S.*",
    journal: "Nature Energy",
    year: 2024,
    highlight: true,
    doi: "10.1038/s41560-000-00000-x"
  },
  {
    id: "p2",
    title: "Single-atom catalysts for CO2 reduction: A comprehensive review",
    authors: "Zhao L., Zhang S.*",
    journal: "Chemical Reviews",
    year: 2023,
    highlight: true
  },
  {
    id: "p3",
    title: "Stable lithium metal anodes via surface engineering",
    authors: "Li S., Wang W., Zhang S.*",
    journal: "Advanced Materials",
    year: 2023
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "2024-05-20",
    title: "Congratulations to Wang Wu for his paper in Nature Energy!",
    summary: "Wang Wu's work on OER electrocatalysts has been published in Nature Energy. Great job!"
  },
  {
    id: "n2",
    date: "2024-03-15",
    title: "Welcome new Master students to the group",
    summary: "The CHEER lab welcomes 3 new master students joining us this spring semester."
  }
];

export const CONTACT_INFO = {
  address: "Room 405, Chemistry Building, No. 123 University Road, Shanghai, China",
  email: "contact@cheerlab.cn",
  phone: "+86-21-12345678"
};
