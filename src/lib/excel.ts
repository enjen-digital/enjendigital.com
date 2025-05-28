import * as XLSX from 'xlsx';

interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessSize: string;
  date: string;
}

export async function saveToExcel(data: Omit<Lead, 'date'>) {
  try {
    const lead: Lead = {
      ...data,
      date: new Date().toISOString(),
    };

    // Create a new workbook if it doesn't exist in memory
    let workbook = XLSX.utils.book_new();
    const sheetName = 'Leads';

    try {
      // Try to read existing file from localStorage
      const existingData = localStorage.getItem('leads');
      if (existingData) {
        const leads = JSON.parse(existingData);
        leads.push(lead);
        localStorage.setItem('leads', JSON.stringify(leads));
        
        // Convert leads array to worksheet
        const worksheet = XLSX.utils.json_to_sheet(leads);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      } else {
        // Create new leads array with current lead
        const leads = [lead];
        localStorage.setItem('leads', JSON.stringify(leads));
        
        // Create new worksheet with current lead
        const worksheet = XLSX.utils.json_to_sheet(leads);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      }
    } catch (error) {
      console.error('Error reading existing data:', error);
      // If there's an error, create new worksheet with current lead
      const worksheet = XLSX.utils.json_to_sheet([lead]);
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    // Write to file and trigger download
    XLSX.writeFile(workbook, 'leads.xlsx');
    return true;
  } catch (error) {
    console.error('Error saving to Excel:', error);
    throw new Error('Failed to save lead information');
  }
}