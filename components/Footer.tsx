import React from 'react';

interface FooterProps {
  onLegalClick: (type: 'terms' | 'privacy' | 'cookies' | 'safety') => void;
  onHelpClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHelpClick }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white text-2xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              EstateAI
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We combine market expertise with advanced AI to make your real estate journey seamless and efficient.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
                 {/* Facebook */}
                 <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
                 {/* Twitter */}
                 <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
                 {/* Instagram */}
                 <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
                 {/* LinkedIn */}
                 <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Buy Property</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Rent Property</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Find Agents</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Careers</a></li>
             </ul>
          </div>

          {/* Legal Links */}
          <div>
             <h4 className="text-white text-lg font-bold mb-6">Legal</h4>
             <ul className="space-y-3">
                <li><button onClick={() => onLegalClick('terms')} className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Terms & Conditions</button></li>
                <li><button onClick={() => onLegalClick('privacy')} className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Privacy Policy</button></li>
                <li><button onClick={() => onLegalClick('cookies')} className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Cookie Policy</button></li>
                <li><button onClick={onHelpClick} className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Help Center</button></li>
                <li><button onClick={() => onLegalClick('safety')} className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"><span className="text-green-600">›</span> Safety Guide</button></li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest property updates and market trends.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <input type="email" placeholder="Your email address" className="w-full bg-gray-800 text-white pl-4 pr-12 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition" />
                    <button type="submit" className="absolute right-2 top-1.5 bg-green-600 text-white p-1.5 rounded-md hover:bg-green-700 transition">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                         </svg>
                    </button>
                </div>
                <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1 rounded text-green-600 focus:ring-green-600 bg-gray-800 border-gray-700" />
                    <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer">I agree to the <button onClick={() => onLegalClick('terms')} className="text-green-500 hover:underline">Terms & Conditions</button> and <button onClick={() => onLegalClick('privacy')} className="text-green-500 hover:underline">Privacy Policy</button>.</label>
                </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">&copy; 2024 EstateAI. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-green-500 transition">Sitemap</a>
                <a href="#" className="hover:text-green-500 transition">Disclaimer</a>
                <span>Powered by Google Gemini API</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;