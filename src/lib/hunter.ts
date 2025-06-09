const HUNTER_API_KEY = import.meta.env.VITE_HUNTER_API_KEY || 'your-hunter-api-key-here';

export async function verifyEmail(email: string) {
  if (!HUNTER_API_KEY) {
    throw new Error('Hunter API key not configured');
  }

  try {
    const response = await fetch(
      `https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${HUNTER_API_KEY}`
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Email verification failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`Email verification failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Email verification error:', error);
    throw error;
  }
}

export async function addToList(email: string, firstName?: string, lastName?: string, company?: string, productInterest?: string) {
  if (!HUNTER_API_KEY) {
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
      source: 'Website Consultation Form',
      attributes: [
        {
          name: 'product_interest',
          value: productInterest || ''
        },
        {
          name: 'lead_source',
          value: 'consultation_form'
        }
      ]
    };

    const response = await fetch(
      `https://api.hunter.io/v2/leads?api_key=${HUNTER_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Add to list failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        payload
      });
      throw new Error(`Failed to add to list: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Add to list error:', error);
    throw error;
  }
}