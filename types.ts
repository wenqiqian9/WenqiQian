export enum MemberRole {
  PI = "Principal Investigator",
  ASSOCIATE = "Associate Professor",
  POSTDOC = "Postdoc",
  PHD = "PhD Student",
  MASTER = "Master Student",
  ALUMNI = "Alumni"
}

export interface TeamMember {
  id: string;
  name: string;
  role: MemberRole;
  image: string;
  email?: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  highlight?: boolean;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
  image: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
}