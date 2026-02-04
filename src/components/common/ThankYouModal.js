export default function ThankYouModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-sm w-full shadow-xl text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Thank You!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your message has been successfully submitted.  
          We will get back to you shortly.
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
