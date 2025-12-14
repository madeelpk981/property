import React, { useState } from 'react';
import { Property } from '../types';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (property: Property) => void;
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: 'sale' as 'sale' | 'rent',
    category: 'house' as 'house' | 'apartment' | 'commercial',
    beds: '',
    baths: '',
    area: '',
    areaUnit: 'sq.ft',
    description: '',
    imageUrl: '',
    features: '',
    securityDeposit: '',
    minLease: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct new property object
    const newProperty: Property = {
      id: Date.now().toString(),
      title: formData.title,
      location: formData.location,
      price: parseInt(formData.price) || 0,
      currency: 'PKR',
      type: formData.type,
      category: formData.category,
      beds: parseInt(formData.beds) || 0,
      baths: parseInt(formData.baths) || 0,
      area: parseInt(formData.area) || 0,
      areaUnit: formData.areaUnit,
      description: formData.description,
      imageUrl: formData.imageUrl || 'https://picsum.photos/800/600', // Default if empty
      added: 'Just now',
      agent: {
        name: 'You (Owner)',
        phone: '+92 000 0000000',
        image: 'https://ui-avatars.com/api/?name=User&background=random',
        email: 'owner@example.com'
      },
      features: formData.features.split(',').map(f => f.trim()).filter(f => f),
      securityDeposit: formData.type === 'rent' ? parseInt(formData.securityDeposit) || 0 : undefined,
      minLease: formData.type === 'rent' ? parseInt(formData.minLease) || 0 : undefined
    };

    onSubmit(newProperty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl">
          <div className="bg-green-600 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">List Your Property</h3>
            <button onClick={onClose} className="text-green-100 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Type Selection */}
            <div className="flex gap-4 border-b border-gray-200 pb-4">
               <label className="flex-1 cursor-pointer">
                 <input 
                    type="radio" 
                    name="type" 
                    value="sale" 
                    checked={formData.type === 'sale'} 
                    onChange={handleChange}
                    className="peer sr-only"
                 />
                 <div className="text-center py-2 rounded-lg border border-gray-300 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 hover:bg-gray-50 transition font-medium">
                    For Sale
                 </div>
               </label>
               <label className="flex-1 cursor-pointer">
                 <input 
                    type="radio" 
                    name="type" 
                    value="rent" 
                    checked={formData.type === 'rent'} 
                    onChange={handleChange}
                    className="peer sr-only"
                 />
                 <div className="text-center py-2 rounded-lg border border-gray-300 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 hover:bg-gray-50 transition font-medium">
                    To Rent
                 </div>
               </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Picture</label>
                    <div className="flex items-center gap-4">
                        <div className="relative w-32 h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-300 flex items-center justify-center shrink-0">
                            {formData.imageUrl ? (
                                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            )}
                        </div>
                        <div>
                             <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-50 transition shadow-sm inline-block">
                                Upload Picture
                                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                            </label>
                            <p className="text-xs text-gray-500 mt-2">Recommended: 800x600px or larger</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                    <input required name="title" value={formData.title} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="e.g. Luxury Villa in DHA" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input required name="location" value={formData.location} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="e.g. DHA Phase 6, Lahore" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {formData.type === 'rent' ? 'Monthly Rent (PKR)' : 'Total Price (PKR)'}
                    </label>
                    <input required name="price" value={formData.price} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="0" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500">
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>

                {formData.type === 'rent' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Security Deposit (PKR)</label>
                            <input name="securityDeposit" value={formData.securityDeposit} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="0" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Min Lease (Months)</label>
                            <input name="minLease" value={formData.minLease} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="e.g. 6" />
                        </div>
                    </>
                )}

                <div className="grid grid-cols-2 gap-2">
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Area Size</label>
                         <input required name="area" value={formData.area} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="Size" />
                    </div>
                     <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                         <select name="areaUnit" value={formData.areaUnit} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500">
                            <option value="sq.ft">Sq. Ft</option>
                            <option value="marla">Marla</option>
                            <option value="kanal">Kanal</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Beds</label>
                         <input name="beds" value={formData.beds} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="0" />
                    </div>
                     <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Baths</label>
                         <input name="baths" value={formData.baths} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="0" />
                    </div>
                </div>

                <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                     <input name="features" value={formData.features} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="Pool, Garden, Solar Panels..." />
                </div>

                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea required name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500" placeholder="Describe your property..."></textarea>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={onClose} className="px-5 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
                    Cancel
                </button>
                <button type="submit" className="px-6 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 shadow-md transition">
                    {formData.type === 'rent' ? 'List for Rent' : 'List for Sale'}
                </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;