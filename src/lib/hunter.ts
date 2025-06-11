// Simple local storage utilities for form submissions

interface LeadData {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  productInterest?: string;
  timestamp: string;
  source: string;
}

interface NewsletterData {
  email: string;
  timestamp: string;
  source: string;
}

export async function saveConsultationLead(
  email: string, 
  firstName?: string, 
  lastName?: string, 
  company?: string, 
  productInterest?: string
) {
  try {
    const leadData: LeadData = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      company: company || '',
      productInterest: productInterest || '',
      timestamp: new Date().toISOString(),
      source: 'Website Consultation Form'
    };
    
    // Store in localStorage
    const existingLeads = JSON.parse(localStorage.getItem('consultation_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('consultation_leads', JSON.stringify(existingLeads));
    
    console.log('Consultation lead saved locally:', leadData);
    return leadData;
  } catch (error) {
    console.error('Error saving consultation lead:', error);
    throw new Error('Failed to save consultation request');
  }
}

export async function saveNewsletterSubscription(email: string) {
  try {
    const subscriptionData: NewsletterData = {
      email,
      timestamp: new Date().toISOString(),
      source: 'Website Newsletter Subscription'
    };
    
    // Store in localStorage
    const existingSubscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
    existingSubscriptions.push(subscriptionData);
    localStorage.setItem('newsletter_subscriptions', JSON.stringify(existingSubscriptions));
    
    console.log('Newsletter subscription saved locally:', subscriptionData);
    return subscriptionData;
  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    throw new Error('Failed to save newsletter subscription');
  }
}

// Utility functions to retrieve stored data
export function getConsultationLeads(): LeadData[] {
  try {
    return JSON.parse(localStorage.getItem('consultation_leads') || '[]');
  } catch {
    return [];
  }
}

export function getNewsletterSubscriptions(): NewsletterData[] {
  try {
    return JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
  } catch {
    return [];
  }
}

// Utility to export data as CSV
export function exportLeadsAsCSV() {
  const leads = getConsultationLeads();
  if (leads.length === 0) return;

  const headers = ['Email', 'First Name', 'Last Name', 'Company', 'Product Interest', 'Timestamp', 'Source'];
  const csvContent = [
    headers.join(','),
    ...leads.map(lead => [
      lead.email,
      lead.firstName,
      lead.lastName,
      lead.company,
      lead.productInterest,
      lead.timestamp,
      lead.source
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'consultation_leads.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

export function exportNewsletterAsCSV() {
  const subscriptions = getNewsletterSubscriptions();
  if (subscriptions.length === 0) return;

  const headers = ['Email', 'Timestamp', 'Source'];
  const csvContent = [
    headers.join(','),
    ...subscriptions.map(sub => [
      sub.email,
      sub.timestamp,
      sub.source
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'newsletter_subscriptions.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}