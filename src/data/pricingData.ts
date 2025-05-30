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
    name: 'Single Seat',
    price: 49,
    description: 'Perfect for independent professionals and small operations',
    features: [
      'Online Booking System',
      'Professional Website',
      'Client Management',
      'Automated Reminders',
      'Mobile App Access',
      'Sales Analytics',
      'Email Support'
    ],
    url: 'https://buy.stripe.com/single-seat'
  },
  {
    id: 2,
    name: 'Team',
    price: 99,
    description: 'Ideal for salons and spas with multiple staff members',
    features: [
      'Everything in Single Seat',
      'Multi-Staff Support',
      'Team Scheduling',
      'Personal Web Designer',
      'Advanced Reporting',
      'Priority Support',
      'Team Management Tools',
      'Multiple Service Locations'
    ],
    highlighted: true,
    url: 'https://buy.stripe.com/team'
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