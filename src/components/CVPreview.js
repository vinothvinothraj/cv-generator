import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // For brand icons

function CVPreview({ cvData }) {
  return (
    <div className="w-1/2 p-4  border-2 border-gray-300" id="cv-preview">

      <div className="flex items-center justify-between">
        {/* Left side content */}
        <div className="text-left">
          {/* Name */}
          <h2 className="text-2xl font-semibold">{cvData.personalInfo.name}</h2>

          {/* Email and Phone in the same row */}
          <div className="flex space-x-4">
            {/* Email with icon */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />  {/* GitHub icon */}
              <a href={cvData.personalInfo.email} className="text-sm text-blue-600 hover:underline">
                Email
              </a>
            </div>

            {/* Phone with icon */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
              <p className="text-sm">{cvData.personalInfo.phone}</p>
            </div>
          </div>

          {/* GitHub and LinkedIn in the next row */}
          <div className="flex space-x-4 mt-2">
            {/* GitHub with clickable link */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
              <a href={cvData.personalInfo.github} className="text-sm text-blue-600 hover:underline">
                GitHub
              </a>
            </div>

            {/* LinkedIn with clickable link */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
              <a href={cvData.personalInfo.linkedin} className="text-sm text-blue-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right side image */}
        {cvData.personalInfo.image && (
          <img
            src={cvData.personalInfo.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
      </div>




    </div>
  );
}

export default CVPreview;
