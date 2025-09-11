import { Feature } from '../types';
import { Calendar, Globe, BarChart, Smartphone, Clock, Mail, Users, MessageSquare } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Online Booking System',
    description: 'Allow clients to book appointments 24/7, reducing no-shows and scheduling conflicts.',
    icon: Calendar
  },
  {
    id: 2,
    title: 'Professional Website',
    description: 'Showcase your services with a beautiful, customizable website that matches your brand.',
    icon: Globe
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Track performance, bookings, and revenue with easy-to-understand reports and insights.',
    icon: BarChart
  },
  {
    id: 4,
    title: 'Mobile App',
    description: 'Manage your business on the go with our powerful mobile application.',
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automated SMS and email appointment reminders.',
    icon: Clock
  },
  {
    id: 6,
    title: 'Email Marketing',
    description: 'Create and send promotional emails to grow your customer base and increase bookings.',
    icon: Mail
  },
  {
    id: 7,
    title: 'Staff Management',
    description: 'Easily manage staff schedules, services, and availability.',
    icon: Users
  },
  {
    id: 8,
    title: 'Client Communication',
    description: 'Stay connected with your clients through integrated messaging and emails.',
    icon: MessageSquare
  }
];