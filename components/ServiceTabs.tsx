
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shirt,
    Home,
    Sparkles,
    Truck,
    Clock,
    Scissors,
    Wind,
    Bed,
    Layout,
    Palmtree,
    Heart,
    ShieldCheck,
    Leaf,
    Hotel,
    Briefcase
} from 'lucide-react';

interface ServiceItem {
    name: string;
    description: string;
    icon: React.ReactNode;
}

interface Category {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    services: ServiceItem[];
    image: string;
}

const categories: Category[] = [
    {
        id: 'everyday',
        label: 'Everyday Care',
        icon: <Shirt className="w-6 h-6" />,
        color: 'emerald',
        description: 'Professional care for your regular wardrobe and urgent items.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
        services: [
            { name: 'Dry Cleaning', description: 'Everyday garments, specialist fabrics & high value designer items', icon: <Shirt className="w-5 h-5 text-emerald-500" /> },
            { name: 'Laundry Services', description: 'Including service washes & bulk laundry', icon: <Wind className="w-5 h-5 text-emerald-500" /> },
            { name: 'Shirt Cleaning & Ironing', description: 'Professional pressing and finishing', icon: <Shirt className="w-5 h-5 text-emerald-500" /> },
            { name: 'Express Same‑Day Service', description: 'Speedy service for when you need it most', icon: <Clock className="w-5 h-5 text-emerald-500" /> },
        ]
    },
    {
        id: 'household',
        label: 'Home & Household',
        icon: <Home className="w-6 h-6" />,
        color: 'sky',
        description: 'Expert cleaning for bulky household items and fine furnishings.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
        services: [
            { name: 'Bedding Cleaning & Ironing', description: 'Includes duvets, bedspreads, and other household bedding items', icon: <Bed className="w-5 h-5 text-sky-500" /> },
            { name: 'Duvet Cleaning', description: 'Fast turnaround available for all sizes', icon: <Wind className="w-5 h-5 text-sky-500" /> },
            { name: 'Curtain Cleaning', description: 'Both household and business curtains', icon: <Layout className="w-5 h-5 text-sky-500" /> },
            { name: 'Rug & Upholstery Cleaning', description: 'Deep cleaning for home furnishings and loose covers', icon: <Palmtree className="w-5 h-5 text-sky-500" /> },
        ]
    },
    {
        id: 'specialist',
        label: 'Specialist Care',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'indigo',
        description: 'Bespoke treatments for delicate and complex items.',
        image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200',
        services: [
            { name: 'Wedding Dress Cleaning', description: 'Specialist bridal care and preservation', icon: <Heart className="w-5 h-5 text-indigo-500" /> },
            { name: 'Suede & Leather Cleaning', description: 'Specialist treatment for natural skins', icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
            { name: 'Eco-Friendly Wet Cleaning', description: 'Greener alternative for sensitive fabrics', icon: <Leaf className="w-5 h-5 text-indigo-500" /> },
            { name: 'Repairs & Alterations', description: 'Full repair and alteration services by expert seamstresses', icon: <Scissors className="w-5 h-5 text-indigo-500" /> },
        ]
    },
    {
        id: 'commercial',
        label: 'Business & B2B',
        icon: <Truck className="w-6 h-6" />,
        color: 'slate',
        description: 'Scalable solutions for hotels, leisure, and large enterprise.',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800',
        services: [
            { name: 'Collection & Delivery', description: 'From home or workplace across Birmingham', icon: <Truck className="w-5 h-5 text-slate-500" /> },
            { name: 'Hotel & Leisure Industry', description: 'Guest valet and staff uniform programmes', icon: <Hotel className="w-5 h-5 text-slate-500" /> },
            { name: 'Large‑Volume Contracts', description: 'Bespoke contracts for high-capacity requirements', icon: <Briefcase className="w-5 h-5 text-slate-500" /> },
            { name: 'Specialist Industrial Contracts', description: 'Technical wear and specialist cleaning', icon: <Briefcase className="w-5 h-5 text-slate-500" /> },
        ]
    }
];

const ServiceTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`
              relative flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300
              ${activeTab === category.id
                                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                            }
            `}
                    >
                        <span className={activeTab === category.id ? 'text-white' : 'text-emerald-600'}>
                            {category.icon}
                        </span>
                        <span className="font-bold whitespace-nowrap">{category.label}</span>
                        {activeTab === category.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 border-2 border-emerald-500 rounded-2xl pointer-events-none"
                                initial={false}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Detailed Description */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                {activeCategory.label}
                            </h3>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {activeCategory.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {activeCategory.services.map((service, idx) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all border border-transparent hover:border-slate-100"
                                >
                                    <div className={`p-3 rounded-xl transition-colors ${activeCategory.color === 'emerald' ? 'bg-emerald-50 group-hover:bg-emerald-100' :
                                        activeCategory.color === 'sky' ? 'bg-sky-50 group-hover:bg-sky-100' :
                                            activeCategory.color === 'indigo' ? 'bg-indigo-50 group-hover:bg-indigo-100' :
                                                'bg-slate-50 group-hover:bg-slate-100'
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                                            {service.name}
                                        </h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Showcase */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            layoutId="categoryImage"
                            className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl relative"
                        >
                            <img
                                src={activeCategory.image}
                                alt={activeCategory.label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                                        <ShieldCheck />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold">Premium Quality Guaranteed</p>
                                        <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Birmingham's Top Rated Cleaners</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ServiceTabs;
