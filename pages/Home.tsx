
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Leaf, Award, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Expert Care for Every Garment</h2>
            <p className="text-lg text-slate-600">From everyday essentials to your most precious items, we provide specialized care using eco-friendly processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-emerald-600 font-bold text-lg hover:underline">
              View All Services & Pricing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* USP / Why Choose Us Section */}
      <section className="py-24 bg-emerald-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">Why Harpers® stands apart</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We've invested substantially in environmentally friendly dry cleaning and solar energy. Our commitment to sustainability doesn't compromise on quality—it enhances it.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-emerald-600 shrink-0">
                    <Leaf />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Solar Powered Cleaning</h4>
                    <p className="text-slate-600">Our main processing site is powered by substantial solar investment, reducing our carbon footprint.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-emerald-600 shrink-0">
                    <Award />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Award Winning Service</h4>
                    <p className="text-slate-600">Independent and family-owned since 1995, maintaining the highest standards of garment care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">100% Non-Toxic</h4>
                    <p className="text-slate-600">We use advanced biodegradable solvents that are safe for your skin, your clothes, and the planet.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-[40px] shadow-2xl"
            >
              <BeforeAfterSlider />
              <div className="p-8 text-center">
                <p className="text-slate-500 italic">"Our cleaning process removes tough stains while preserving fabric integrity and color vibrancy."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Trusted by Birmingham's finest</h2>
            <div className="flex justify-center space-x-1 text-amber-400">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[32px] border border-slate-100"
              >
                <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-sm text-slate-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-800 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready for a fresh start?</h2>
              <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of happy customers in Sutton Coldfield & Birmingham. Book your collection today and get 10% off.
              </p>
              <Link
                to="/book"
                className="inline-block bg-white text-emerald-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all shadow-2xl shadow-emerald-950/20"
              >
                Book Your Collection Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
