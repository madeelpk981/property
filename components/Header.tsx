import React, { useState } from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onHomeClick: () => void;
  onAddPropertyClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onHomeClick, onAddPropertyClick, onLoginClick, onLogoutClick, onProfileClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="relative bg-green-800 text-white shadow-md sticky top-0 z-50">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1920&auto=format&fit=crop" 
          alt="Header Background" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/90"></div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-8">
          <button onClick={onHomeClick} className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            EstateAI
          </button>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={onHomeClick} className="hover:text-green-100 transition">Buy</button>
            <button onClick={onHomeClick} className="hover:text-green-100 transition">Rent</button>
            <a href="#" className="hover:text-green-100 transition">Agents</a>
            <a href="#" className="hover:text-green-100 transition">Projects</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <button onClick={onLoginClick} className="hidden sm:block text-sm font-medium hover:text-green-100">Login</button>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm font-medium hover:text-green-100 focus:outline-none"
              >
                {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-green-500" />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white border-2 border-green-500">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                )}
                <span className="hidden sm:block">{user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="font-bold truncate">{user.email}</p>
                    </div>
                    <button 
                        onClick={() => {
                            onProfileClick();
                            setIsDropdownOpen(false);
                        }} 
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        My Properties
                    </button>
                    <button 
                         onClick={() => {
                            onProfileClick();
                            setIsDropdownOpen(false);
                        }} 
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        Profile Settings
                    </button>
                    <button 
                        onClick={() => {
                            onLogoutClick();
                            setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                    >
                        Sign out
                    </button>
                </div>
              )}
            </div>
          )}
          
          <button 
            onClick={onAddPropertyClick}
            className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-bold hover:bg-green-50 transition shadow-sm"
          >
            + Add Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;