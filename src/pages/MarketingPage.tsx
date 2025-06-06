import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { Check, ArrowRight, BarChart, Globe, Users, TrendingUp, Search, Share2, Mail, LineChart, Target, Megaphone } from 'lucide-react';

const MarketingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your visibility and drive organic traffic with our data-driven SEO strategies.'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all major social platforms.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Convert leads and retain customers with targeted email campaigns and automation.'
    },
    {
      icon: LineChart,
      title: 'PPC Advertising',
      description: 'Maximize ROI with carefully managed paid advertising campaigns on Google and social media.'
    },
    {
      icon: Target,
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and retains your target audience.'
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Develop a strong brand identity and messaging that resonates with your audience.'
    }
  ];
  
  const stats = [
    { icon: BarChart, value: '250%', label: 'Average ROI' },
    { icon: Globe, value: '1M+', label: 'Ad Impressions' },
    { icon: Users, value: '10K+', label: 'Leads Generated' },
    { icon: TrendingUp, value: '85%', label: 'Client Growth' }
  ];
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Solutions',
      content: 'EnJen Digital transformed our online presence. Their strategic approach to digital marketing helped us achieve a 200% increase in qualified leads within just 6 months.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'InnovateX',
      content: 'The ROI we\'ve seen with EnJen Digital has been incredible. Their team\'s expertise in PPC and social media marketing has directly contributed to our company\'s rapid growth.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ];
  
  const faqs = [
    {
      question: 'What makes EnJen Digital different from other agencies?',
      answer: 'We combine data-driven strategies with creative excellence to deliver measurable results. Our team of experts specializes in creating customized solutions that align with your business goals.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'While results vary by campaign and industry, most clients see significant improvements within 3-6 months. We provide detailed monthly reports to track progress and ROI.'
    },
    {
      question: 'Do you offer customized solutions?',
      answer: 'Yes! Every business is unique, and we tailor our strategies to meet your specific needs and goals. Our packages can be customized based on your requirements.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with businesses across various industries, including technology, healthcare, e-commerce, professional services, and more. Our diverse experience allows us to adapt our strategies effectively.'
    }
  ];
  
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
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 lg:mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                Accelerate Your <span className="text-primary-500">Digital Growth</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 text-center lg:text-left">
                Data-driven digital marketing strategies that deliver measurable results and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => window.location.href = '/contact'}>
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group text-white border-white hover:bg-white hover:text-gray-900"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-gray-800 border border-gray-700 p-4 sm:p-6 text-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mb-2 sm:mb-4 mx-auto" />
                      <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
              Our Digital Marketing Services
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-8 sm:mb-12">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gray-800 border border-gray-700 p-4 sm:p-8 hover:border-primary-500 transition-colors"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-500 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="text-center mb-8 sm:mb-12 pt-12 sm:pt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Transparent Pricing, Exceptional Results
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your business growth
            </p>
          </div>

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-gray-800 p-1 shadow-sm inline-flex border border-gray-700">
              <button
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 text-sm font-medium transition-colors ${
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gray-800 shadow-lg overflow-hidden border border-gray-700 ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{plan.description}</p>
                  
                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                    onClick={() => {
                      const footer = document.querySelector('footer');
                      footer?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
                
                <div className="border-t border-gray-700 p-4 sm:p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 p-4 sm:p-8">
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
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