import React, { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import ExportButton from './components/ExportButton';

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
    },
    experience: [
      { company: '', role: '', duration: '', description: '' }
    ],
    education: [{ school: '', degree: '', year: '' }],
    skills: ['']
  });

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">CV Generator</h1>
      <div className="flex justify-between space-x-4">
        <CVForm cvData={cvData} setCvData={setCvData} />
        <CVPreview cvData={cvData} />
      </div>
      <div className="text-center mt-8">
        <ExportButton cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
