
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Package, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const BookNow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postcode: '',
    serviceType: 'Dry Cleaning',
    itemsCount: '1-5',
    date: '',
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    { icon: <MapPin />, title: 'Location' },
    { icon: <Package />, title: 'Service' },
    { icon: <Calendar />, title: 'Schedule' },
    { icon: <CheckCircle />, title: 'Confirm' }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10" />
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-4 ${
                  step > i + 1 ? 'bg-emerald-600 text-white border-emerald-600' :
                  step === i + 1 ? 'bg-white text-emerald-600 border-emerald-600 shadow-lg' :
                  'bg-white text-slate-300 border-slate-200'
                }`}>
                  {step > i + 1 ? <CheckCircle size={20} /> : s.icon}
                </div>
                <span className={`text-xs font-bold mt-2 uppercase tracking-tighter ${step >= i + 1 ? 'text-emerald-700' : 'text-slate-400'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4">Where should we collect?</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="e.g., Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Address</label>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="House number and street name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Postcode</label>
                      <input
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="B72 1YJ"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Phone</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4">What do you need cleaned?</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Service Category</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>Dry Cleaning</option>
                      <option>Laundry & Ironing</option>
                      <option>Curtains & Rugs</option>
                      <option>Repairs & Alterations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Approximate Item Count</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['1-5', '6-10', '10+'].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setFormData({...formData, itemsCount: val})}
                          className={`py-4 rounded-xl font-bold transition-all ${
                            formData.itemsCount === val ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4">Select a Pickup Date</h3>
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl mb-4">
                    <p className="text-sm text-emerald-800">Note: Collections are available Monday to Saturday between 8am and 4pm.</p>
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold">Great! You're all set.</h3>
                  <p className="text-slate-600 text-lg">
                    We've received your request for <strong>{formData.serviceType}</strong>. Our driver will be at <strong>{formData.address}</strong> on <strong>{formData.date}</strong>.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100">
                    <h5 className="font-bold mb-2">Booking Summary:</h5>
                    <p className="text-sm">Name: {formData.name}</p>
                    <p className="text-sm">Phone: {formData.phone}</p>
                    <p className="text-sm">Items: {formData.itemsCount}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between">
              {step > 1 && step < 4 && (
                <button
                  onClick={prevStep}
                  className="flex items-center text-slate-500 font-bold hover:text-slate-800 transition-colors"
                >
                  <ChevronLeft className="mr-1" /> Back
                </button>
              )}
              {step < 4 && (
                <button
                  onClick={nextStep}
                  disabled={step === 1 && !formData.name}
                  className="ml-auto flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all disabled:opacity-50"
                >
                  {step === 3 ? 'Confirm Booking' : 'Next Step'} <ChevronRight className="ml-1" />
                </button>
              )}
              {step === 4 && (
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-emerald-600 text-white py-4 rounded-full font-bold hover:bg-emerald-700 transition-all"
                >
                  Back to Home
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
