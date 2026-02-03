
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { getIcon } from '../constants';
import { ArrowRight } from 'lucide-react';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors" />

        {/* Watermark */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none select-none">
          <span className="text-sm font-bold tracking-widest text-white uppercase italic">@harpers</span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
          {getIcon(service.icon)}
        </div>
        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-800">{service.title}</h3>
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        <button className="flex items-center text-emerald-600 font-bold group/btn">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
