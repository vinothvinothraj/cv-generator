import React, { useState } from 'react';

function CVForm({ cvData, setCvData }) {
  const [imagePreview, setImagePreview] = useState(null);
  const handleInputChange = (section, field, value) => {
    setCvData({
      ...cvData,
      [section]: {
        ...cvData[section],
        [field]: value
      }
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCvData({
          ...cvData,
          personalInfo: {
            ...cvData.personalInfo,
            image: reader.result,
          },
        });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-1/2 p-4 border-r-2">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <input
        type="text"
        value={cvData.personalInfo.name}
        onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
        placeholder="Name"
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        value={cvData.personalInfo.email}
        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
        placeholder="Email"
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="tel"
        value={cvData.personalInfo.phone}
        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
        placeholder="Phone"
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="git"
        value={cvData.personalInfo.github}
        onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
        placeholder="Github"
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="link"
        value={cvData.personalInfo.linkedin}
        onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
        placeholder="Linkedin"
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        className="block w-full mb-4"
      />

      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="w-32 h-32  object-cover mb-4" />
      )}
    </div>
  );
}

export default CVForm;
