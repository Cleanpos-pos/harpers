import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Hotel,
    Shirt,
    ChefHat,
    Bed,
    Utensils,
    Calendar,
    Trophy,
    CheckCircle2,
    Clock,
    ShieldCheck,
    MapPin,
    Star
} from 'lucide-react';

const services = [
    {
        title: "Hotel Guest Valet",
        description: "Premium same-day dry cleaning and laundry services for hotel guests.",
        icon: <Hotel className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Employee & Uniform Care",
        description: "Expert cleaning for staff attire to ensure your team always looks their best.",
        icon: <Shirt className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Professional Chef Wear",
        description: "Specialist cleaning and flexible rental options for culinary environments.",
        icon: <ChefHat className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Full Linen Management",
        description: "Comprehensive rental and laundering of high-quality bed and bath linens.",
        icon: <Bed className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Restaurant & F&B Services",
        description: "Dedicated linen rental and cleaning for prestigious dining rooms.",
        icon: <Utensils className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1550966841-3ee71031f38b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Event & Venue Solutions",
        description: "Scalable cleaning services for large-scale events and household requirements.",
        icon: <Calendar className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Elite Sports Laundry",
        description: "Specialists in team kit and technical wear cleaning for professional sporting organisations.",
        icon: <Trophy className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1526676023601-d75a706bd5d0?auto=format&fit=crop&q=80&w=800"
    }
];

const partners = [
    "The Grand Hotel", "The Belfry Hotel & Resort", "Birmingham Hilton Metropole",
    "Hyatt Regency", "Malmaison", "Radisson Blu", "The Forest of Arden",
    "Park Regis", "Genting Resorts World", "Crowne Plaza Hotels",
    "Marriott Hotels", "Leonardo Hotels", "Holiday Inn Group",
    "Newhall Hotel", "Moxy Hotel", "Clayton Hotel", "Aloft Hotels",
    "Birmingham City University (BCU)"
];

const Services: React.FC = () => {
    useEffect(() => {
        document.title = "Professional Hospitality & Commercial Laundry Birmingham | Harpers®";

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
        if (!metaDescription) {
            metaDescription = document.createElement('meta') as HTMLMetaElement;
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute("content", "Birmingham's leading hospitality laundry services. Trusted by The Grand, The Belfry, and ECB. Premium 5-star linen management, hotel guest valet, and elite sports laundry.");

        // Add Schema.org JSON-LD
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Laundry Services",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Harpers Laundry",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Birmingham",
                    "addressRegion": "West Midlands",
                    "addressCountry": "UK"
                },
                "image": "https://harpers.co.uk/logo-nobg.png",
                "priceRange": "$$$"
            },
            "areaServed": {
                "@type": "City",
                "name": "Birmingham"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "1250"
            }
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            // Optionally, reset title and meta description or remove meta tag
            document.title = "Harpers Laundry"; // Or a default title
            if (metaDescription) {
                metaDescription.setAttribute("content", ""); // Or a default description
            }
        };
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1545173168-9f1947eebb9f?auto=format&fit=crop&q=80&w=2000"
                        alt="Laundry Facility"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Premier Hospitality & <span className="text-emerald-400">Commercial Laundry</span> Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                            At the heart of Birmingham’s hospitality sector, we provide industry-leading laundry and cleaning services tailored to the exacting standards of major hotels, elite sporting bodies, and large-scale venues.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 px-4 py-2 rounded-full">
                                <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                                <span className="text-sm font-bold">Official ECB Partner</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 px-4 py-2 rounded-full">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-bold">5-Star Quality Guarantee</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-2xl text-slate-700 leading-relaxed italic">
                            "Our reputation is built on reliability, precision, and a commitment to excellence that allows our clients to focus entirely on the guest experience."
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Core Services</h2>
                        <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute bottom-4 left-6 text-white bg-emerald-600 p-3 rounded-2xl shadow-lg -mb-0 transition-all">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-8 pt-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By / Clients */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 transform translate-x-20" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Trusted by Industry Leaders</h2>
                            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                Our portfolio includes the most prestigious names in the Midlands. From luxury city-centre boutiques to sprawling golf resorts, we are the preferred partner for Birmingham’s flagship destinations.
                            </p>

                            <div className="bg-emerald-600/20 border border-emerald-500/30 p-8 rounded-[40px] mb-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <Trophy className="w-10 h-10 text-emerald-400" />
                                    <h3 className="text-2xl font-bold">Exclusive Service Provider</h3>
                                </div>
                                <p className="text-lg text-slate-200 leading-relaxed">
                                    We are proud to be the official service provider for the <span className="text-emerald-400 font-bold">ECB (England Cricket Board)</span> and <span className="text-emerald-400 font-bold">The Hundred</span>, managing the rigorous requirements of professional international athletes.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {partners.map((partner) => (
                                <div key={partner} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <span className="text-sm font-medium text-slate-300">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 underline-offset-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
                        <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full" />
                        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
                            In the fast-paced world of hospitality and professional sports, there is no margin for error. We are the "invisible engine" behind Birmingham’s most successful establishments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Unmatched Reliability & Scale</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    With a client list featuring the region’s largest hotels and international sporting bodies, we possess the infrastructure to handle high volumes without ever compromising on detail.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <Clock className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Market-Leading Turnaround</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Time is of the essence in the guest-experience industry. We offer guaranteed same-day turnaround for guest valet and urgent requirements, ensuring premium service for your patrons.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Bespoke Solutions</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Whether you are a boutique hotel requiring delicate care or a large-scale stadium needing rapid kit turnarounds, we tailor our workflows to meet your specific operational timelines.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Expertise, Global Standards</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Based in the heart of the West Midlands, we provide a localized, responsive service with the professional rigour expected by global brands like Marriott, Hilton, and the ECB.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-emerald-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Ready to Elevate Your Service Standards?</h2>
                    <button className="bg-white text-emerald-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-xl">
                        Partner With Us Today
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
