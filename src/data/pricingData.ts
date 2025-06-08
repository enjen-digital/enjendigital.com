interface PricingTier {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  url: string;
}

interface AddOn {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export const pricingTiers = [
  {
    id: 1,
    name: 'Single Seat Package',
    price: 49,
    description: 'Perfect for independent professionals and small operations',
    features: [
      'Online Booking System',
      'Professional Website',
      'Search Engine Optimization',
      'Client Management',
      'Automated Reminders',
      'Mobile App Access',
      'Custom Domain',
      'Sales Analytics',
    ],
    url: 'https://buy.stripe.com/single-seat'
  },
  {
    id: 2,
    name: 'Shop Package',
    price: 99,
    description: 'Ideal for salons and spas with multiple staff members',
    features: [
      'Everything in Single Seat Package',
      'Multi-Staff Support',
      'Team Scheduling',
      'Personal Web Designer',
      'Customer Marketing',
      'Priority Support',
      'Team Management Tools',
      'Advanced Analytics'
    ],
    highlighted: true,
    url: 'https://buy.stripe.com/premium'
  },
  {
    id: 3,
    name: 'Enterprise Package',
    price: 199,
    description: 'Perfect for businesses with multiple locations',
    features: [
      'Everything in Shop Package',
      'Multiple Locations',
      'Cross-Location Booking',
      'Enterprise Analytics',
      'Dedicated Account Manager',
      'Custom Integration Support',
      'Staff Training Program',
      'Priority Phone Support'
    ],
    url: 'https://buy.stripe.com/enterprise'
  }
];

export const addOns = [
  {
    id: 1,
    name: 'POS System',
    price: 49,
    description: 'Complete point-of-sale system',
    features: [
      'Inventory Management',
      'Payment Processing',
      'Sales Reports',
    ]
  },
  {
    id: 2,
    name: 'Customer Marketing',
    price: 99,
    description: 'Grow your business with marketing tools',
    features: [
      'Email Marketing Campaigns',
      'SMS Marketing',
      'Loyalty Program'
    ]
  }
];