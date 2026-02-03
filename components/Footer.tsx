
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-8 text-white">
              <Leaf className="text-emerald-500 w-8 h-8" />
              <span className="text-2xl font-bold font-serif">Harpers®</span>
            </Link>
            <p className="mb-8 leading-relaxed">
              Birmingham's premier eco-friendly dry cleaners. Dedicated to excellence, convenience, and our planet since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing List</Link></li>
              <li><Link to="/eco" className="hover:text-emerald-400 transition-colors">Sustainability</Link></li>
              <li><Link to="/locations" className="hover:text-emerald-400 transition-colors">Find a Store</Link></li>
              <li><Link to="/book" className="hover:text-emerald-400 transition-colors">Book a Collection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-8">Our Branches</h4>
            <ul className="space-y-6">
              {LOCATIONS.map(loc => (
                <li key={loc.name} className="flex space-x-3">
                  <MapPin className="text-emerald-500 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white font-semibold">{loc.name}</p>
                    <p className="text-sm">{loc.address}, {loc.postcode}</p>
                    <p className="text-sm text-emerald-400 font-bold mt-1">{loc.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-8">Newsletter</h4>
            <p className="mb-4 text-sm">Join our mailing list for exclusive offers and garment care tips.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:row justify-between items-center text-slate-500">
          <p>© {new Date().getFullYear()} Harpers Dry Cleaners. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
