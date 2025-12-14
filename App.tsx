import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import PropertyModal from './components/PropertyModal';
import AddPropertyModal from './components/AddPropertyModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import HelpModal from './components/HelpModal';
import UserProfile from './components/UserProfile';
import { MOCK_PROPERTIES, LEGAL_CONTENT } from './constants';
import { Property, SearchFilters, User } from './types';

const App: React.FC = () => {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [properties, setProperties] = useState<Property[]>(MOCK_PROPERTIES);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // View State
  const [currentView, setCurrentView] = useState<'home' | 'profile'>('home');

  // New states for Footer modals
  const [activeLegalPage, setActiveLegalPage] = useState<'terms' | 'privacy' | 'cookies' | 'safety' | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Handle Search Logic
  const handleSearch = (filters: SearchFilters) => {
    const filtered = properties.filter(p => {
      // Filter by Type (Sale/Rent)
      if (p.type !== filters.type) return false;

      // Filter by Category
      if (filters.category && filters.category !== 'all' && p.category !== filters.category) return false;

      // Filter by Price Range
      if (p.price < filters.minPrice) return false;
      if (p.price > filters.maxPrice) return false;

      // Filter by Location Query
      if (filters.query && !p.location.toLowerCase().includes(filters.query.toLowerCase()) && !p.title.toLowerCase().includes(filters.query.toLowerCase())) {
        return false;
      }

      return true;
    });

    setProperties(filtered);
    setIsFiltered(true);
    setCurrentView('home'); // Ensure we are on home view to see results
    
    // Scroll to results
    const resultsElement = document.getElementById('results-section');
    if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setProperties(MOCK_PROPERTIES);
    setIsFiltered(false);
    setCurrentView('home');
  };

  const handleAddProperty = (newProperty: Property) => {
    // If logged in, update the agent details to match the user
    if (user) {
        newProperty.agent = {
            name: user.name,
            email: user.email,
            phone: '+92 000 0000000', // Placeholder or add phone to user profile
            image: user.avatar || 'https://ui-avatars.com/api/?name=User&background=random'
        };
    }
    
    setProperties(prev => [newProperty, ...prev]);
    setIsAddPropertyOpen(false);
    
    // If currently on profile view, stay there to see new property. If on home, scroll to it.
    if (currentView === 'home') {
        const resultsElement = document.getElementById('results-section');
        if (resultsElement) {
            resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleLoginSuccess = (user: User) => {
    setUser(user);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        user={user}
        onHomeClick={handleReset} 
        onAddPropertyClick={() => setIsAddPropertyOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogoutClick={handleLogout}
        onProfileClick={() => setCurrentView('profile')}
      />
      
      {currentView === 'home' ? (
        <>
            {/* Search Hero */}
            <Hero onSearch={handleSearch} />

            <main className="flex-grow container mx-auto px-4 py-8" id="results-section">
                
                {/* Section Header */}
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    {isFiltered ? `Search Results (${properties.length})` : 'Featured Properties'}
                </h2>
                {isFiltered && (
                    <button 
                    onClick={handleReset}
                    className="text-green-600 text-sm font-medium hover:underline"
                    >
                    Show All Properties
                    </button>
                )}
                </div>

                {/* Property Grid */}
                {properties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {properties.map(prop => (
                    <PropertyCard 
                        key={prop.id} 
                        property={prop} 
                        onClick={setActiveProperty} 
                    />
                    ))}
                </div>
                ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-300 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria.</p>
                    <button onClick={handleReset} className="mt-4 text-green-600 font-semibold hover:underline">Clear Filters</button>
                </div>
                )}
            </main>
        </>
      ) : (
          <main className="flex-grow">
              {user && (
                <UserProfile 
                    user={user} 
                    properties={properties} 
                    onBack={() => setCurrentView('home')} 
                    onPropertyClick={setActiveProperty}
                />
              )}
          </main>
      )}

      <Footer 
        onLegalClick={(type) => setActiveLegalPage(type)}
        onHelpClick={() => setIsHelpOpen(true)}
      />

      {/* Property Detail Modal */}
      {activeProperty && (
        <PropertyModal 
          property={activeProperty} 
          onClose={() => setActiveProperty(null)} 
        />
      )}

      {/* Add Property Modal */}
      <AddPropertyModal 
        isOpen={isAddPropertyOpen} 
        onClose={() => setIsAddPropertyOpen(false)} 
        onSubmit={handleAddProperty}
      />
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSignupClick={switchToSignup}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        onLoginClick={switchToLogin}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Legal & Safety Modal */}
      <LegalModal 
        isOpen={!!activeLegalPage}
        onClose={() => setActiveLegalPage(null)}
        title={activeLegalPage ? LEGAL_CONTENT[activeLegalPage].title : ''}
        content={activeLegalPage ? LEGAL_CONTENT[activeLegalPage].content : ''}
      />

      {/* Help Center Modal */}
      <HelpModal 
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
};

export default App;