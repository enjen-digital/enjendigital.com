// Simple form submission utilities
// All form data is stored locally in the browser

export interface ConsultationLead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  message: string;
  timestamp: string;
}

export interface NewsletterSubscription {
  email: string;
  timestamp: string;
}

// Save consultation form submission
export function saveConsultationForm(formData: Omit<ConsultationLead, 'timestamp'>): void {
  const lead: ConsultationLead = {
    ...formData,
    timestamp: new Date().toISOString()
  };
  
  const existingLeads = getConsultationLeads();
  existingLeads.push(lead);
  localStorage.setItem('consultation_leads', JSON.stringify(existingLeads));
}

// Save newsletter subscription
export function saveNewsletterForm(email: string): void {
  const subscription: NewsletterSubscription = {
    email,
    timestamp: new Date().toISOString()
  };
  
  const existingSubscriptions = getNewsletterSubscriptions();
  existingSubscriptions.push(subscription);
  localStorage.setItem('newsletter_subscriptions', JSON.stringify(existingSubscriptions));
}

// Get all consultation leads
export function getConsultationLeads(): ConsultationLead[] {
  try {
    return JSON.parse(localStorage.getItem('consultation_leads') || '[]');
  } catch {
    return [];
  }
}

// Get all newsletter subscriptions
export function getNewsletterSubscriptions(): NewsletterSubscription[] {
  try {
    return JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
  } catch {
    return [];
  }
}