import React, { useState } from 'react';
import { SearchFilters } from '../types';

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'sale' | 'rent'>('sale');
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleSearch = () => {
    onSearch({
      query,
      type,
      category,
      minPrice: minPrice ? parseInt(minPrice) : 0,
      maxPrice: maxPrice ? parseInt(maxPrice) : Infinity,
      beds: null
    });
  };

  return (
    <div className="relative h-[550px] w-full bg-gray-900 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
          alt="Real Estate Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Search Box Container */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg tracking-tight">Search properties for sale and to rent</h1>
            <p className="text-gray-100 text-lg drop-shadow-md font-light">Find your dream home in the best locations</p>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-t-lg p-2 inline-flex gap-1">
            <button 
              onClick={() => setType('sale')}
              className={`px-6 py-2 rounded-md font-bold transition text-sm uppercase tracking-wide ${type === 'sale' ? 'bg-white text-green-700 shadow-sm' : 'text-white hover:bg-white/10'}`}
            >
              Buy
            </button>
            <button 
               onClick={() => setType('rent')}
               className={`px-6 py-2 rounded-md font-bold transition text-sm uppercase tracking-wide ${type === 'rent' ? 'bg-white text-green-700 shadow-sm' : 'text-white hover:bg-white/10'}`}
            >
              Rent
            </button>
        </div>

        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Location */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">City or Location</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter location..." 
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
              </div>
            </div>

            {/* Property Type */}
            <div className="md:col-span-3">
                 <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Property Type</label>
                 <div className="relative">
                     <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition appearance-none bg-white"
                     >
                        <option value="all">All Types</option>
                        <option value="house">Houses</option>
                        <option value="apartment">Apartments</option>
                        <option value="commercial">Commercial</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                     </div>
                 </div>
            </div>

             {/* Price Range */}
             <div className="md:col-span-4 grid grid-cols-2 gap-2">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Min Price</label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Max Price</label>
                    <input 
                        type="number" 
                        placeholder="Any" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
            
            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <button 
                onClick={handleSearch}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center shadow-md hover:shadow-lg transform active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500">
             <span className="font-medium">Popular:</span>
             <button onClick={() => { setQuery('DHA'); handleSearch(); }} className="hover:text-green-600 underline">DHA Lahore</button>
             <button onClick={() => { setQuery('Bahria Town'); handleSearch(); }} className="hover:text-green-600 underline">Bahria Town</button>
             <button onClick={() => { setQuery('Islamabad'); handleSearch(); }} className="hover:text-green-600 underline">Islamabad Sector F-10</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;