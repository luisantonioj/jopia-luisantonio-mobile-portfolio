import { Project, Contact } from '../types';

// CUSTOMIZE THIS WITH YOUR OWN INFORMATION
export const profileData = {
  name: 'Your Name',
  bio: 'Full Stack Developer passionate about building mobile and web applications. I love creating elegant solutions to complex problems.',
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
  'Redux',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'A full-featured e-commerce application with cart functionality, payment integration, and user authentication.',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    id: '2',
    title: 'Weather Forecast App',
    description: 'Real-time weather application with location services and 7-day forecast.',
    technologies: ['React Native', 'OpenWeather API', 'Redux'],
    link: 'https://github.com/yourusername/project2',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Collaborative task management app with real-time updates and team features.',
    technologies: ['React Native', 'Node.js', 'Socket.io'],
    link: 'https://github.com/yourusername/project3',
  },
];

export const contactInfo: Contact = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  website: 'https://yourwebsite.com',
};