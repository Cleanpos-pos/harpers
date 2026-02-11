
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Fixed: Added missing Leaf import from lucide-react
import { Sparkles, Truck, CheckCircle, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Local Independent Dry Cleaners & Launderers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
            High Quality <span className="text-emerald-600">Eco-Friendly</span> Dry Cleaning
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Struggling to get to your dry cleaners? Let us come to you. Professional garment care with zero toxic chemicals.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center"
            >
              Schedule Pickup
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-slate-700 hover:text-emerald-600 transition-colors border border-slate-200 hover:border-emerald-200 flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700">Free Collection*</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700">Non-Toxic Process</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main Visual */}
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-emerald-200 transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img
              src="https://picsum.photos/seed/harpers-hero/800/1000"
              alt="Impeccable clothes"
              className="w-full h-auto"
            />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Delivery</p>
                <p className="text-lg font-bold text-slate-800">Coming to you</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                {/* Fixed: Use imported Leaf icon */}
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Process</p>
                <p className="text-lg font-bold text-slate-800">100% Eco-Safe</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
