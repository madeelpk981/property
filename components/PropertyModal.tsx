import React, { useState } from 'react';
import { FORMAT_CURRENCY } from '../constants';
import AIChatAgent from './AIChatAgent';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          
          {/* Close Button */}
          <div className="absolute right-4 top-4 z-10">
            <button onClick={onClose} className="bg-white/80 hover:bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 transition">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-white/90 px-3 py-1 rounded text-sm font-medium shadow-sm flex items-center gap-1 hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  12 Photos
                </button>
                <button className="bg-white/90 px-3 py-1 rounded text-sm font-medium shadow-sm flex items-center gap-1 hover:bg-white">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Map
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[600px]">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <h2 className="text-3xl font-bold text-gray-900">{FORMAT_CURRENCY(property.price, property.currency)}</h2>
                   <p className="text-gray-500 text-sm mt-1">{property.location}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-bold uppercase rounded text-white ${property.type === 'sale' ? 'bg-red-500' : 'bg-purple-500'}`}>
                    For {property.type}
                </span>
              </div>

              {/* Key Specs */}
              <div className="flex gap-6 border-b border-gray-100 pb-6 mb-6">
                <div className="text-center">
                    <div className="flex items-center gap-1 justify-center font-bold text-xl text-gray-700">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.75h3.75M12 7.5h.008v.008H12V7.5z" />
                        </svg>
                        {property.beds}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Beds</div>
                </div>
                <div className="text-center">
                    <div className="flex items-center gap-1 justify-center font-bold text-xl text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        {property.baths}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Baths</div>
                </div>
                 <div className="text-center">
                    <div className="flex items-center gap-1 justify-center font-bold text-xl text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                        {property.area}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">{property.areaUnit}</div>
                </div>
              </div>
              
              {property.type === 'rent' && (
                <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-100">
                    <h4 className="text-purple-800 font-bold mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        Rental Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block text-gray-500">Security Deposit</span>
                            <span className="font-semibold text-gray-800">{property.securityDeposit ? FORMAT_CURRENCY(property.securityDeposit, property.currency) : 'N/A'}</span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Min. Lease</span>
                            <span className="font-semibold text-gray-800">{property.minLease ? `${property.minLease} Months` : 'Flexible'}</span>
                        </div>
                    </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
              </div>

               <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                    {property.features.map(feat => (
                        <span key={feat} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                            {feat}
                        </span>
                    ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-4">
                <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Listing Agent</div>
                    <div className="font-bold text-lg">{property.agent.name}</div>
                    <div className="text-green-600 font-medium">{property.agent.phone}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                    <a 
                        href={`tel:${property.agent.phone.replace(/\s+/g, '')}`}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition text-center flex items-center justify-center w-full"
                    >
                        Call Agent
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg z-10">
                        {property.agent.phone}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </div>

                 <div className="relative group">
                    <a 
                        href={`mailto:${property.agent.email}`}
                        className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 rounded-lg transition text-center flex items-center justify-center w-full"
                    >
                        Email
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg z-10">
                        {property.agent.email}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </div>

                <button 
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="col-span-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                    Ask AI Assistant
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Bubble */}
      <AIChatAgent property={property} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default PropertyModal;