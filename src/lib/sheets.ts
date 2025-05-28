interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessSize: string;
}

const SHEET_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export async function saveToSheet(data: Lead) {
  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok && response.status !== 0) { // status 0 is expected with no-cors
      throw new Error('Failed to save data');
    }

    return true;
  } catch (error) {
    console.error('Error saving to sheet:', error);
    throw new Error('Failed to save lead information');
  }
}