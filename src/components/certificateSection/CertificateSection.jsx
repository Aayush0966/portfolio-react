import React from 'react';
import { certificates } from './certificateData';
import Certificate from '../common/Certificate';

function CertificateSection() {
  return (
    <div className="relative w-full text-center">
<div className="relative">
  <h2 className="opacity-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-gray-200 ">
    Certificates
  </h2>
  {/* <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-black">
    Certificates
  </h3> */}
</div>


      <div className=" gap-6 mt-8">
        {certificates.map((certificate) => (
          <Certificate key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default CertificateSection;
