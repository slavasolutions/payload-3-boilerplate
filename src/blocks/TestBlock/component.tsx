import React from 'react';
import { Block } from 'payload/types';

export type SampleCardProps = {
  
};

const SampleCard: React.FC<SampleCardProps> = (props) => {
  return (
    <html><head></head><body><div className="p-8 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4" data-field-id="text-0" onClick={(e) => handleFieldSelect(e, "text-0")}>Welcome to HyperPayload</h2>
  <p className="text-gray-600 mb-6" data-field-id="text-1" onClick={(e) => handleFieldSelect(e, "text-1")}>This is a sample HyperUI snippet that you can convert to a Payload block.</p>
  <img src="https://via.placeholder.com/400x200" alt="Sample image" className="w-full rounded-md mb-4" data-field-id="img-2" onClick={(e) => handleFieldSelect(e, "img-2")}>
  <div className="flex justify-between items-center">
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-field-id="text-3" onClick={(e) => handleFieldSelect(e, "text-3")}>Learn More</button>
    <span className="text-gray-500" data-field-id="text-4" onClick={(e) => handleFieldSelect(e, "text-4")}>Last updated: May 2025</span>
  </div>
</div></body></html>
  );
};

export default SampleCard;
