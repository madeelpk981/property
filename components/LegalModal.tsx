import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl max-h-[80vh] flex flex-col">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4 overflow-y-auto text-gray-600 leading-relaxed">
             <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
            <button 
                onClick={onClose} 
                className="bg-green-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-700 transition shadow-sm"
            >
                Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;