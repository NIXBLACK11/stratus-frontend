import React, { useEffect } from 'react';

export const ErrorPopup: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-[#1f50ff63] bg-opacity-50 flex items-center justify-center">
      <div className="bg-transparent p-4 rounded shadow-lg">
        <p className="text-red-500">{message}</p>
        <button onClick={onClose} className="mt-2 bg-red-500 text-white p-1 rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};