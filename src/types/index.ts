export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  video?: any;
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}