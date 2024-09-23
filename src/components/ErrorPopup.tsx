import React, { useEffect } from 'react';

export const ErrorPopup: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-opacity-50 flex items-center justify-center text-center">
      <div className="bg-red-100 p-4 rounded-lg shadow-lg w-72">
        <p className="text-red-500">{message}</p>
      </div>
    </div>
  );
};
