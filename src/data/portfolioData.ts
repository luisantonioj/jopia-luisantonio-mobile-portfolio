import { Project, Contact } from '../types';

export const profileData = {
  name: 'Luis Antonio M. Jopia',
  bio: 'A developer passionate about building mobile and web applications. I love creating elegant solutions to complex problems.',
  profileImage: 'https://via.placeholder.com/150', // Replace with your image URL
};

export const skills: string[] = [
  'React Native',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'REST APIs',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Medisys',
    description: 'A role-based hospital management system designed to streamline appointment scheduling, medical records management, and operational workflows for healthcare providers.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB',],
    link: 'https://github.com/luisantonioj/final-project-group1-webdevt-frontend',
  },
  {
    id: '2',
    title: 'StudySpot PH',
    description: 'A booking platform for co-working spaces and study hubs, enabling users to discover locations, view detailed listings, and manage reservations through a personalized dashboard.',
    technologies: ['React', 'TailwindCSS'],
    link: 'https://github.com/luisantonioj/midterm-project',
  },
  {
    id: '3',
    title: 'Pinoy Recipe Finder',
    description: 'A food discovery application that helps users explore and search for Filipino recipes with clear instructions and curated local dishes.',
    technologies: ['React', 'TailwindCSS'],
    link: 'https://github.com/luisantonioj/pinoy-recipe-finder',
  },
];

export const contactInfo: Contact = {
  email: 'luisantoniojopia@gmail.com',
  github: 'https://github.com/luisantoniojopia',
  linkedin: 'https://www.linkedin.com/in/luis-antonio-jopia-8b9549389/'
};