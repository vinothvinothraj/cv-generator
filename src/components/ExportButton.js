import React from 'react';
import { generatePDF } from '../utils/pdfGenerator';

function ExportButton() {
  return (
    <button
      className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={generatePDF}
    >
      Download as PDF
    </button>
  );
}

export default ExportButton;
