import * as msal from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`,
    redirectUri: window.location.origin,
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

async function initMsal() {
  await msalInstance.initialize();
}

async function getToken() {
  await initMsal();
  const account = msalInstance.getAllAccounts()[0];
  
  if (!account) {
    const response = await msalInstance.loginPopup({
      scopes: ['Files.ReadWrite', 'Sites.ReadWrite.All']
    });
    return response.accessToken;
  }

  const response = await msalInstance.acquireTokenSilent({
    scopes: ['Files.ReadWrite', 'Sites.ReadWrite.All'],
    account
  });
  
  return response.accessToken;
}

interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessSize: string;
}

export async function saveToExcel(data: Lead) {
  try {
    const token = await getToken();
    const client = Client.init({
      authProvider: (done) => {
        done(null, token);
      }
    });

    // Get or create the Excel file
    const driveItem = await client
      .api('/me/drive/root:/leads.xlsx')
      .get()
      .catch(async () => {
        // File doesn't exist, create it
        const workbook = {
          application: 'Microsoft Excel',
          worksheets: [{
            name: 'Leads',
            tables: [{
              name: 'LeadsTable',
              columns: [
                { name: 'First Name' },
                { name: 'Last Name' },
                { name: 'Email' },
                { name: 'Phone' },
                { name: 'Business Size' },
                { name: 'Date' }
              ],
              rows: []
            }]
          }]
        };

        return client
          .api('/me/drive/root:/leads.xlsx:/content')
          .put(workbook);
      });

    // Add the new row
    await client
      .api(`/me/drive/items/${driveItem.id}/workbook/tables/LeadsTable/rows`)
      .post({
        values: [[
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.businessSize,
          new Date().toISOString()
        ]]
      });

    return true;
  } catch (error) {
    console.error('Error saving to Excel:', error);
    throw new Error('Failed to save lead information');
  }
}