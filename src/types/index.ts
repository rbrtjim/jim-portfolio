// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
}