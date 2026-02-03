
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Info, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [showPolicy, setShowPolicy] = useState<'privacy' | 'terms' | null>(null);

    useEffect(() => {
        const consent = localStorage.getItem('harpers-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShowConsent(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('harpers-cookie-consent', 'accepted');
        setShowConsent(false);
    };

    return (
        <>
            {/* Cookie Banner */}
            <AnimatePresence>
                {showConsent && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-6 z-[100]"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600 shrink-0">
                                <Cookie size={24} />
                            </div>
                            <div className="flex-grow">
                                <h4 className="font-bold text-slate-900 mb-1">Cookie Preferences</h4>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                                </p>
                                <div className="flex flex-col space-y-2">
                                    <button
                                        onClick={acceptAll}
                                        className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors"
                                    >
                                        Accept All
                                    </button>
                                    <div className="flex justify-between items-center px-1">
                                        <button
                                            onClick={() => setShowPolicy('privacy')}
                                            className="text-xs font-semibold text-slate-400 hover:text-emerald-600 underline"
                                        >
                                            Privacy Policy
                                        </button>
                                        <button
                                            onClick={() => setShowPolicy('terms')}
                                            className="text-xs font-semibold text-slate-400 hover:text-emerald-600 underline"
                                        >
                                            Terms of Service
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Policy Modals */}
            <AnimatePresence>
                {showPolicy && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPolicy(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                        >
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <div className="flex items-center space-x-3 text-emerald-600">
                                    {showPolicy === 'privacy' ? <Shield size={24} /> : <Info size={24} />}
                                    <h2 className="text-2xl font-serif font-bold text-slate-900">
                                        {showPolicy === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                                    </h2>
                                </div>
                                <button onClick={() => setShowPolicy(null)} className="p-2 hover:bg-white rounded-full transition-colors">
                                    <X />
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed">
                                {showPolicy === 'privacy' ? (
                                    <div className="space-y-6">
                                        <p>Last updated: February 2026</p>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">1. Information We Collect</h3>
                                            <p>We collect personal information such as your name, contact details, and address when you book a collection service to ensure efficient delivery and communication.</p>
                                        </section>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">2. How We Use Your Data</h3>
                                            <p>Your data is used solely for the purpose of fulfilling dry cleaning and laundry services, processing payments, and improving our customer experience.</p>
                                        </section>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">3. Data Security</h3>
                                            <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
                                        </section>
                                        <p className="text-sm italic">For more information, contact us at info@harpers-clear.co.uk</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <p>Last updated: February 2026</p>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">1. Service Agreement</h3>
                                            <p>By using Harpers® services, you agree to our terms of processing. We strive for excellence, but processing is at the owner's risk for delicate or vintage items without care labels.</p>
                                        </section>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">2. Limitation of Liability</h3>
                                            <p>Our liability for any lost or damaged garment is limited to a maximum of 10 times the cleaning charge for that specific item, unless otherwise agreed in writing.</p>
                                        </section>
                                        <section>
                                            <h3 className="font-bold text-slate-900 mb-2">3. Collection & Delivery</h3>
                                            <p>Free collection is subject to a minimum order value. Times are approximate and subject to traffic and operational conditions.</p>
                                        </section>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                                <button
                                    onClick={() => setShowPolicy(null)}
                                    className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CookieConsent;
