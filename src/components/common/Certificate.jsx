import React from 'react';

const Certificate = ({ certificate }) => {
    const navigateToCertificate = () => {
        window.open(certificate.url, '_blank');
    };

    return (
        <div className="relative w-full mx-4 md:mx-8 lg:mx-20 my-8 md:my-12 lg:my-20 max-w-2xl">
            {/* Gradient background with blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-gray-300 to-gray-500 rounded-2xl md:rounded-3xl opacity-90 blur-lg" />
            
            {/* Main container with glass effect */}
            <div className="relative w-full bg-black bg-opacity-60 backdrop-blur-lg flex flex-col items-start justify-between gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-gray-700 transition-all duration-300 hover:bg-opacity-80 dark:border-gray-100 dark:bg-gradient-to-t dark:from-gray-400 dark:via-gray-300 dark:to-gray-400 dark:hover:bg-opacity-100 dark:hover:from-gray-100 dark:hover:via-gray-200 dark:hover:to-gray-300 dark:shadow-gray-300">

                {/* Header with logos */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
                    {/* Brand container */}
                    <div className="flex items-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-md p-2">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-2 shadow-inner">
                            <img 
                                src={certificate.platformLogo}
                                alt="Platform logo" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h1 className="text-lg md:text-xl font-bold text-white px-3">
                            {certificate.platform}
                        </h1>
                    </div>
                    
                    {/* Certificate icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-100 to-white rounded-full p-2 shadow-md border border-gray-200 self-center sm:self-start">
                        <img 
                            src="https://img.icons8.com/nolan/64/certificate.png"
                            alt="Certificate icon" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                
                {/* Certificate title */}
                <div className="w-full text-center sm:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 dark:text-gray-700">
                        {certificate.title}
                    </h1>
                </div>
                
                {/* View button */}
                <div onClick={navigateToCertificate} className="w-full flex justify-center mt-2 md:mt-4">
                    <button
                        type="button"
                        className="group relative px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-bold overflow-hidden rounded-full transition-all duration-300"
                    >
                        {/* Button gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 group-hover:opacity-90" />
                        
                        {/* Button content */}
                        <div className="relative flex items-center gap-2 text-white">
                            <span className="hidden sm:inline">View Certificate</span>
                            <span className="sm:hidden">View</span>
                            <svg
                                className="w-6 h-6 md:w-8 md:h-8 p-1 md:p-2 bg-white bg-opacity-10 rounded-full rotate-45 group-hover:rotate-90 transition-all duration-300"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-white"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Certificate;