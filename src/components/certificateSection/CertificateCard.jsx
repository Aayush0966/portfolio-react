import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="w-full max-w-3xl bg-gray-500 dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
    >
      {/* Header - Increased padding and logo size */}
      <div className="p-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src={certificate.platformLogo}
              alt={certificate.platform}
              className="w-16 h-16 rounded-lg object-cover" // Increased logo size
            />
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {certificate.platform}
              </h4>
              <div className="flex items-center gap-3 mt-2">
                <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded">
                  Verified
                </span>
                <span className="text-base text-gray-600 dark:text-gray-400">
                  Professional Certificate
                </span>
              </div>
            </div>
          </div>
          
          {/* Issue Date - Increased text size */}
          <div className="text-right text-base text-gray-600 dark:text-gray-400">
            {certificate.issueDate}
          </div>
        </div>
      </div>

      {/* Content - Increased padding and spacing */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {certificate.title}
        </h3>

        {/* Skills Section - Increased spacing */}
        {certificate.skills && (
          <div className="mb-8">
            <h5 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
              Skills Verified
            </h5>
            <div className="flex flex-wrap gap-3">
              {certificate.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-base rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <motion.a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-750 transition-colors"
          whileHover={{ x: 4 }}
        >
          <div className="flex items-center gap-4">
            <svg 
              className="w-6 h-6 text-blue-600 dark:text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <span className="block text-base font-medium text-gray-900 dark:text-white">
                Verify Certificate
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                View credential
              </span>
            </div>
          </div>
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;