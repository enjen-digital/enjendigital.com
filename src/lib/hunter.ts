const HUNTER_API_KEY = import.meta.env.VITE_HUNTER_API_KEY || 'your-hunter-api-key-here';

export async function verifyEmail(email: string) {
  if (!HUNTER_API_KEY || HUNTER_API_KEY === 'your-hunter-api-key-here') {
    console.warn('Hunter API key not configured, skipping email verification');
    return { result: 'deliverable' }; // Skip verification if no API key
  }

  try {
    const response = await fetch(
      `https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${HUNTER_API_KEY}`
    );

    if (!response.ok) {
      console.warn('Email verification failed, continuing without verification');
      return { result: 'deliverable' }; // Continue without verification on error
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.warn('Email verification error, continuing without verification:', error);
    return { result: 'deliverable' }; // Continue without verification on error
  }
}

export async function addToList(email: string, firstName?: string, lastName?: string, company?: string, productInterest?: string) {
  if (!HUNTER_API_KEY || HUNTER_API_KEY === 'your-hunter-api-key-here') {
    throw new Error('Hunter API key not configured');
  }

  try {
    // Validate required parameters
    if (!email) {
      throw new Error('Email is required');
    }

    const payload = {
      email,
      first_name: firstName || '',
      last_name: lastName || '',
      company: company || '',
      position: productInterest || '',
      source: 'Website Consultation Form',
      confidence_score: 100
    };

    console.log('Sending to Hunter.io:', payload);

    const response = await fetch(
      `https://api.hunter.io/v2/leads?api_key=${HUNTER_API_KEY}`,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'User-Agent': 'EnJenDigital/1.0'
        },
        body: JSON.stringify(payload),
      }
    );

    const responseText = await response.text();
    console.log('Hunter.io response:', response.status, responseText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch {
        errorData = { message: responseText };
      }
      
      console.error('Add to list failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        payload
      });
      
      throw new Error(`Failed to add to list: ${errorData.message || response.statusText}`);
    }

    const data = JSON.parse(responseText);
    console.log('Successfully added to Hunter.io:', data);
    return data.data;
  } catch (error) {
    console.error('Add to list error:', error);
    throw error;
  }
}