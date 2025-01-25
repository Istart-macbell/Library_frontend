import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full"
      >
        {/* <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Modal Title</h2>
          <button
            className="text-gray-400 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div> */}
        <div className="text-gray-700">{children}</div>
        {/* <div className="mt-6 flex justify-start">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Modal;
