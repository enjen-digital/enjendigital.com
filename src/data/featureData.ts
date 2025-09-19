import { Feature } from '../types';
import { BarChart3, Users, UserCheck, Calendar } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'Gain valuable insights into your business performance with comprehensive analytics including revenue tracking, customer growth, and appointment trends.',
    icon: BarChart3
  },
  {
    id: 2,
    title: 'Team Management',
    description: 'Easily manage your staff by adding, editing, or removing team member profiles. Set individual schedules and availability for smooth operations.',
    icon: Users
  },
  {
    id: 3,
    title: 'Customer Management',
    description: 'Keep all customer information organized and accessible. Import data, manage profiles, and send targeted communications or bulk promotional messages.',
    icon: UserCheck
  },
  {
    id: 4,
    title: 'Appointment Scheduling',
    description: 'Stay on top of your schedule with clear overviews of upcoming appointments. Add manual bookings and view schedules by team member or entire staff.',
    icon: Calendar
  }
];