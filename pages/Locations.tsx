
import React from 'react';
import { motion } from 'framer-motion';
import { LOCATIONS } from '../constants';
import { Phone, Clock, MapPin, Navigation } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Locations</h1>
          <p className="text-lg text-slate-600">Visit us at one of our friendly branches in Sutton Coldfield. We're here to help with all your garment care needs.</p>
        </div>

        <div className="space-y-16">
          {LOCATIONS.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100">
                  <h2 className="text-4xl font-serif font-bold mb-8 text-emerald-900">{loc.name}</h2>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Address</p>
                        <p className="text-lg text-slate-800">{loc.address}, {loc.postcode}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Contact</p>
                        <p className="text-lg text-slate-800 font-bold">{loc.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Opening Hours</p>
                        <p className="text-lg text-slate-800">{loc.hours}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address + ' ' + loc.postcode)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors"
                  >
                    <Navigation size={18} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
