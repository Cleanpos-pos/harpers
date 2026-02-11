
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Scissors,
    Wind,
    Trash2,
    Shirt,
    Clock,
    ShieldCheck,
    Zap,
    UserPlus,
    Star,
    ChevronRight,
    Search
} from 'lucide-react';

interface PriceItem {
    name: string;
    price: string;
}

interface PriceSubCategory {
    title: string;
    items: PriceItem[];
}

interface PriceCategory {
    id: string;
    label: string;
    icon: React.ReactNode;
    description: string;
    subcategories?: PriceSubCategory[];
    items?: PriceItem[]; // For simple categories like Membership
}

const pricingData: PriceCategory[] = [
    {
        id: 'alterations',
        label: 'Alterations',
        icon: <Scissors className="w-6 h-6" />,
        description: 'Expert tailoring and repairs for all your garments. From simple hems to complex re-lining.',
        subcategories: [
            {
                title: 'Coats',
                items: [
                    { name: 'New Zip 30"–35"', price: '£32.89' },
                    { name: 'New Zip 25"–30"', price: '£29.49' },
                    { name: 'New Zip 20"–25"', price: '£27.29' },
                    { name: 'Shorten Sleeve (No Vent)', price: '£27.29' },
                    { name: 'Shorten Sleeve (With Vent)', price: '£32.89' },
                    { name: 'Shorten From Shoulder', price: '£34.45' },
                    { name: 'Shorten Length (No Vent)', price: '£31.69' },
                    { name: 'Shorten Length (With Vent)', price: '£39.29' },
                    { name: 'Lengthen Sleeve (No Vent)', price: '£27.29' },
                    { name: 'Lengthen Sleeve (With Vent)', price: '£33.89' },
                    { name: 'Take In / Take Out', price: '£31.69' },
                    { name: 'Button Resew', price: '£2.65' },
                    { name: 'New Button', price: '£3.20' },
                    { name: 'Reline Jacket', price: '£54.50' },
                    { name: 'Elbow Patches', price: '£20.69' },
                    { name: 'Emblems', price: '£9.25' },
                    { name: 'Seam Repair', price: '£11.35' },
                ]
            },
            {
                title: 'Dresses',
                items: [
                    { name: 'Shorten', price: '£16.35' },
                    { name: 'Re-Hem', price: '£10.35' },
                    { name: 'Adjust Waist', price: '£21.89' },
                    { name: 'Adjust Hips', price: '£17.49' },
                    { name: 'Adjust Waist & Hips', price: '£26.29' },
                    { name: 'New Zip (Basic)', price: '£16.49' },
                    { name: 'New Zip (Long)', price: '£21.89' },
                    { name: 'Re-Line', price: '£34.95' },
                    { name: 'Misc Repair (Standard)', price: '£9.25' },
                    { name: 'Misc Repair (Medium)', price: '£12.45' },
                    { name: 'Misc Repair (Large)', price: '£15.75' },
                ]
            },
            {
                title: 'Jackets',
                items: [
                    { name: 'Shorten Sleeve (No Vent)', price: '£27.29' },
                    { name: 'Shorten Sleeve (With Vent)', price: '£33.89' },
                    { name: 'Shorten From Shoulder', price: '£34.45' },
                    { name: 'Shorten Length (No Vent)', price: '£31.69' },
                    { name: 'Shorten Length (With Vent)', price: '£38.29' },
                    { name: 'Take In / Take Out', price: '£31.69' },
                    { name: 'Button Resew', price: '£2.65' },
                    { name: 'New Button', price: '£3.20' },
                    { name: 'Reline', price: '£54.50' },
                    { name: 'Elbow Patches', price: '£20.69' },
                ]
            },
            {
                title: 'Shirts',
                items: [
                    { name: 'Shorten Sleeves (Plain)', price: '£13.00' },
                    { name: 'Shorten Sleeves (Vented)', price: '£16.85' },
                    { name: 'Shorten Length (Straight)', price: '£13.00' },
                    { name: 'Shorten Length (Curved)', price: '£16.85' },
                    { name: 'Shirt Repair', price: '£10.25' },
                    { name: 'Side Seam Alter', price: '£13.00' },
                    { name: 'Reverse Collar', price: '£13.00' },
                    { name: 'Reverse Cuffs', price: '£19.65' },
                    { name: 'Button Resew', price: '£2.65' },
                    { name: 'New Button', price: '£3.20' },
                ]
            },
            {
                title: 'Skirts',
                items: [
                    { name: 'Shorten', price: '£16.35' },
                    { name: 'Re-Hem', price: '£10.35' },
                    { name: 'Adjust Waist', price: '£21.89' },
                    { name: 'Adjust Hips', price: '£17.49' },
                    { name: 'New Zip', price: '£15.29' },
                    { name: 'Re-Line', price: '£33.99' },
                    { name: 'Misc Repair (Standard)', price: '£9.25' },
                ]
            },
            {
                title: 'Suits',
                items: [
                    { name: 'Shorten Trousers', price: '£15.99' },
                    { name: 'Lengthen Trousers', price: '£15.99' },
                    { name: 'Take In Waist (Trousers)', price: '£17.99' },
                    { name: 'New Zip (Normal)', price: '£15.99' },
                    { name: 'New Zip (Invisible)', price: '£17.09' },
                    { name: 'Taper (Half)', price: '£16.99' },
                    { name: 'Taper (Full)', price: '£19.99' },
                    { name: 'Take In Jacket', price: '£31.69' },
                    { name: 'Let Out Jacket', price: '£31.69' },
                    { name: 'Reline', price: '£54.50' },
                ]
            },
        ]
    },
    {
        id: 'dry-cleaning',
        label: 'Dry Cleaning',
        icon: <Wind className="w-6 h-6" />,
        description: 'Professional dry cleaning for your fine garments, using eco-friendly processes.',
        subcategories: [
            {
                title: 'Suits',
                items: [
                    { name: '2 Piece', price: '£19.99' },
                    { name: '3 Piece', price: '£24.79' },
                    { name: 'Designer', price: '£22.39' },
                    { name: 'Evening', price: '£22.39' },
                ]
            },
            {
                title: 'Jackets',
                items: [
                    { name: 'Standard', price: '£12.49' },
                    { name: 'Dinner', price: '£13.69' },
                    { name: 'Puffa', price: '£24.99' },
                ]
            },
            {
                title: 'Trousers & Jeans',
                items: [
                    { name: 'Standard Trousers', price: '£10.89' },
                    { name: 'Evening Trousers', price: '£12.29' },
                    { name: 'Jeans', price: '£10.49' },
                ]
            },
            {
                title: 'Coats',
                items: [
                    { name: 'Standard', price: '£17.29' },
                    { name: 'Full Length', price: '£20.19' },
                    { name: 'Wool', price: '£20.69' },
                    { name: 'Puffa', price: '£25.99' },
                ]
            },
            {
                title: 'Dresses',
                items: [
                    { name: 'Standard', price: '£18.69' },
                    { name: 'Delicate', price: '£20.59' },
                    { name: 'Evening', price: '£26.39' },
                ]
            },
        ]
    },
    {
        id: 'laundry',
        label: 'Laundry',
        icon: <Shirt className="w-6 h-6" />,
        description: 'Expert wash and iron services for your regular laundry and bedding.',
        subcategories: [
            {
                title: 'Personal Items',
                items: [
                    { name: 'Trousers', price: '£8.29' },
                    { name: 'Jeans', price: '£8.79' },
                    { name: 'Dress', price: '£10.99' },
                    { name: 'Coat', price: '£14.69' },
                    { name: 'Jacket', price: '£9.99' },
                    { name: 'Pyjamas (Pair)', price: '£12.49' },
                ]
            },
            {
                title: 'Bedding (Wash & Iron)',
                items: [
                    { name: 'Sheet Single', price: '£5.09' },
                    { name: 'Sheet Double', price: '£5.39' },
                    { name: 'Duvet Cover Single', price: '£6.39' },
                    { name: 'Duvet Cover Double', price: '£6.99' },
                    { name: 'Pillowcase', price: '£3.09' },
                    { name: 'Blanket Single', price: '£25.49' },
                ]
            },
            {
                title: 'Duvets',
                items: [
                    { name: 'Single', price: '£26.09' },
                    { name: 'Double', price: '£28.79' },
                    { name: 'King Size', price: '£32.69' },
                    { name: 'Super King', price: '£36.89' },
                ]
            },
        ]
    },
    {
        id: 'shoe-repair',
        label: 'Shoe Repair',
        icon: <Star className="w-6 h-6" />,
        description: 'Revitalize your favorite footwear with our professional cobblers.',
        subcategories: [
            {
                title: 'Gents',
                items: [
                    { name: 'Rubber Heels (<1.5")', price: '£11.19' },
                    { name: 'Leather Heels (<1.5")', price: '£16.09' },
                    { name: 'Trainers', price: '£14.89' },
                    { name: '1/2 Sole Rubber', price: '£25.99' },
                    { name: '1/2 Sole Leather', price: '£37.19' },
                    { name: 'Combination Sole & Heel (Rubber)', price: '£35.89' },
                    { name: 'Combination Sole & Heel (Leather)', price: '£48.29' },
                ]
            },
            {
                title: 'Ladies',
                items: [
                    { name: 'Stiletto Heels', price: '£9.89' },
                    { name: 'Rubber Heels (<1.5")', price: '£10.59' },
                    { name: 'Leather Heels (<1.5")', price: '£12.39' },
                    { name: '1/2 Sole Rubber', price: '£21.09' },
                    { name: '1/2 Sole Leather', price: '£24.79' },
                ]
            },
        ]
    },
    {
        id: 'membership',
        label: 'Membership',
        icon: <UserPlus className="w-6 h-6" />,
        description: 'Join our VIP membership for exclusive benefits and priority service.',
        items: [
            { name: 'VIP Monthly Membership', price: '£14.59' },
            { name: 'VIP Renewal', price: '£14.59' },
        ]
    },
];

const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState(pricingData[0].id);
    const [searchTerm, setSearchTerm] = useState('');

    const activeCategory = pricingData.find(c => c.id === activeTab) || pricingData[0];

    const filteredItems = (items: PriceItem[]) => {
        return items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full"
                    >
                        Price Guide
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Simple, Transparent <br />
                        <span className="text-emerald-600 italic">Pricing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Professional care for your wardrobe needn't be complicated.
                        Select a category below to view our comprehensive price list.
                    </motion.p>
                </div>

                {/* Search Bar - Optional but premium touch */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for a service... (e.g. 'shorten', 'zip')"
                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {pricingData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveTab(category.id);
                                setSearchTerm('');
                            }}
                            className={`
                flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all duration-300
                ${activeTab === category.id
                                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}
              `}
                        >
                            <span className={activeTab === category.id ? 'text-emerald-400' : 'text-emerald-600'}>
                                {category.icon}
                            </span>
                            <span>{category.label}</span>
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
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 overflow-hidden border border-slate-100">
                            <div className="mb-10">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">{activeCategory.label}</h2>
                                <p className="text-slate-500">{activeCategory.description}</p>
                            </div>

                            {activeCategory.subcategories ? (
                                <div className="space-y-12">
                                    {activeCategory.subcategories.map((sub) => {
                                        const filtered = filteredItems(sub.items);
                                        if (filtered.length === 0 && searchTerm) return null;

                                        return (
                                            <div key={sub.title} className="space-y-4">
                                                <h3 className="text-xl font-bold text-slate-800 flex items-center">
                                                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3">
                                                        <ChevronRight size={18} />
                                                    </span>
                                                    {sub.title}
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                                    {filtered.map((item, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50/50 px-2 rounded-lg transition-colors group"
                                                        >
                                                            <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item.name}</span>
                                                            <span className="font-bold text-emerald-700">{item.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {searchTerm && activeCategory.subcategories.every(sub => filteredItems(sub.items).length === 0) && (
                                        <div className="text-center py-12">
                                            <p className="text-slate-400">No services found matching "{searchTerm}"</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    {filteredItems(activeCategory.items || []).map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50/50 px-2 rounded-lg transition-colors group"
                                        >
                                            <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item.name}</span>
                                            <span className="font-bold text-emerald-700">{item.price}</span>
                                        </div>
                                    ))}
                                    {searchTerm && filteredItems(activeCategory.items || []).length === 0 && (
                                        <div className="col-span-2 text-center py-12">
                                            <p className="text-slate-400">No services found matching "{searchTerm}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Loyalty/Booking CTA */}
                        <div className="mt-12 flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <Star size={80} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Join Harpers VIP</h4>
                                <p className="text-emerald-100/80 text-sm mb-6">Enjoy exclusive priority service and monthly member benefits for just £14.59.</p>
                                <button className="bg-white text-emerald-900 px-6 py-2 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                                    Join Today
                                </button>
                            </div>
                            <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-emerald-100 group-hover:scale-110 transition-transform">
                                    <Zap size={80} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to Book?</h4>
                                <p className="text-slate-500 text-sm mb-6">Schedule your collection and delivery in just a few clicks.</p>
                                <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                                    Book Pickup
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Disclaimer */}
                <div className="mt-16 text-center text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
                    <p>
                        * Prices are subject to change and may vary based on item condition, material complexity,
                        and specific requirements. For garments not listed or for a definitive quote, please visit us
                        at one of our locations or contact our specialists.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
