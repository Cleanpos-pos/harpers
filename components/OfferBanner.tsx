
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag } from 'lucide-react';

const OfferBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-emerald-900 text-white py-2 px-6 flex justify-center items-center relative z-[60]"
        >
          <div className="flex items-center space-x-2 text-sm md:text-base font-medium">
            <Tag className="w-4 h-4 text-emerald-400" />
            <span>Special Offer: <strong className="text-emerald-300">10% OFF</strong> your first order!</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:text-emerald-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferBanner;
