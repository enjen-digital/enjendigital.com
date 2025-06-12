// Simple form submission utilities
// All form data is stored locally in the browser

import axios from "axios";
import { ConsultationLead } from "../types";


export interface NewsletterSubscription {
  email: string;
  timestamp: string;
}

// Save consultation form submission
export const saveConsultationForm = async (formData: Omit<ConsultationLead, 'timestamp'>): Promise<void> => {

  return await axios.post('https://hook.us2.make.com/4hn48tei9s66vp3vprhjdi4gcfhyu6j0', {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    company: formData.company,
    phone_number: formData.phone,
    source: window.location.href,
    notes: formData.notes,
    custom_attributes: {
      product_interest: formData.productInterest
    }
  });
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