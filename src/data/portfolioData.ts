import { Project, Contact } from '../types';

const profileImage = require('../../assets/images/lui-image-light.png');
const profileImageDark = require('../../assets/images/lui-image-dark.png')
const medisysVideo = require('../../assets/videos/medisys-landing.mp4');
const studySpotPHVideo = require('../../assets/videos/studyspotph-landing.mp4');
const pinoyRecipeFinderVideo = require('../../assets/videos/pinoy-recipe-finder-landing.mp4');

export const profileData = {
  name: 'Luis Antonio',
  bio: 'A developer passionate about building mobile and web applications. I enjoy crafting innovative digital solutions that simplify complex problems.',
  profileImages: {
    light: profileImage,
    dark: profileImageDark
  }
};

export const skills: string[] = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'React Native',
  'React',
  'Next.js',
  'MongoDB',
  'Supabase',
  'Git',
  'Vercel',
  'IntelliJ IDEA'
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Medisys',
    description: 'A role-based hospital management system designed to streamline appointment scheduling, medical records management, and operational workflows for healthcare providers.',
    technologies: ['React', 'TailwindCSS', 'MongoDB',],
    link: 'https://github.com/luisantonioj/final-project-group1-webdevt-frontend',
    video: medisysVideo,
  },
  {
    id: '2',
    title: 'StudySpot PH',
    description: 'A booking platform for co-working spaces and study hubs, enabling users to discover locations, view detailed listings, and manage reservations through a personalized dashboard.',
    technologies: ['React', 'TailwindCSS'],
    link: 'https://github.com/luisantonioj/midterm-project',
    video: studySpotPHVideo,
  },
  {
    id: '3',
    title: 'Pinoy Recipe Finder',
    description: 'A food discovery application that helps users explore and search for Filipino recipes with clear instructions and curated local dishes.',
    technologies: ['Vite + React', 'TailwindCSS'],
    link: 'https://github.com/luisantonioj/pinoy-recipe-finder',
    video: pinoyRecipeFinderVideo,
  },
];

export const contactInfo: Contact = {
  email: 'luisantoniojopia@gmail.com',
  github: 'https://github.com/luisantoniojopia',
  linkedin: 'https://www.linkedin.com/in/luis-antonio-jopia-8b9549389/'
};