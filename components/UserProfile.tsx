import React from 'react';
import { User, Property } from '../types';
import PropertyCard from './PropertyCard';

interface UserProfileProps {
  user: User;
  properties: Property[];
  onBack: () => void;
  onPropertyClick: (property: Property) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, properties, onBack, onPropertyClick }) => {
  // Filter properties owned by the user (simulated by checking agent name or specific user email match)
  const myProperties = properties.filter(p => 
      p.agent.name === 'You (Owner)' || 
      p.agent.email === user.email || 
      (p.agent.name === user.name)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-32"></div>
        <div className="px-8 pb-8">
            <div className="relative flex flex-col sm:flex-row justify-between items-end -mt-12 mb-6 gap-4">
                <div className="flex items-end gap-6">
                     <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white overflow-hidden flex items-center justify-center">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                             <div className="w-full h-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                     </div>
                    <div className="mb-1">
                        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                        <p className="text-gray-500 flex items-center gap-1">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            {user.email}
                        </p>
                    </div>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition shadow-sm w-full sm:w-auto">
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-gray-100 pt-6">
                 <div>
                    <div className="text-2xl font-bold text-gray-900">{myProperties.length}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Properties Listed</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Sold / Rented</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Agent Rating</div>
                 </div>
            </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-6">My Properties</h2>
      
      {myProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myProperties.map(prop => (
                <PropertyCard key={prop.id} property={prop} onClick={onPropertyClick} />
            ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No properties listed yet</h3>
            <p className="text-gray-500 mb-6">Start your real estate journey by adding your first property.</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;