export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}