import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const MarketingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 499 : 449,
      description: 'Perfect for small businesses just getting started',
      features: [
        'Social Media Management (2 platforms)',
        'Monthly Content Calendar',
        'Basic SEO Optimization',
        'Weekly Performance Reports',
        'Email Marketing Setup',
        'Google Business Profile Management',
        '2 Blog Posts per Month',
        'Basic Analytics Tracking'
      ]
    },
    {
      name: 'Growth',
      price: billingCycle === 'monthly' ? 999 : 899,
      description: 'Ideal for businesses ready to expand their reach',
      popular: true,
      features: [
        'Social Media Management (4 platforms)',
        'Advanced Content Strategy',
        'Comprehensive SEO Campaign',
        'Weekly Performance Reports',
        'Email Marketing Automation',
        'Google & Bing Ads Management',
        '4 Blog Posts per Month',
        'Competitor Analysis',
        'Lead Generation Campaign',
        'Marketing Automation Setup'
      ]
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 1999 : 1799,
      description: 'For businesses needing comprehensive marketing solutions',
      features: [
        'Social Media Management (All platforms)',
        'Custom Content Strategy',
        'Enterprise SEO Solutions',
        'Daily Performance Monitoring',
        'Advanced Email Marketing',
        'Full PPC Campaign Management',
        'Unlimited Blog Posts',
        'Market Research',
        'Custom Marketing Dashboard',
        'Dedicated Account Manager',
        'Brand Strategy Development',
        'Video Marketing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar onDemoClick={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Digital Marketing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your online presence with our comprehensive digital marketing services
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-1 shadow-sm inline-flex border border-gray-700">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly (10% off)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                    onClick={() => window.location.href = '#contact'}
                  >
                    Get Started
                  </Button>
                </div>
                
                <div className="border-t border-gray-700 p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingPage;