
import React from 'react';
import { Shirt, Wind, Scissors, Home, Building2, Leaf, Clock, MapPin } from 'lucide-react';
import { Service, LocationInfo, PricingItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'dry-cleaning',
    title: 'Dry Cleaning',
    description: 'Expert cleaning for your most delicate garments using eco-friendly solvents.',
    icon: 'Shirt',
    image: '/assets/v1-dry-cleaning.png'
  },
  {
    id: 'laundry',
    title: 'Laundry & Ironing',
    description: 'Freshly laundered shirts and bedding, pressed to perfection.',
    icon: 'Wind',
    image: '/assets/v1-laundry.png'
  },
  {
    id: 'alterations',
    title: 'Repairs & Alterations',
    description: 'Professional seamstresses to ensure your clothes fit perfectly.',
    icon: 'Scissors',
    image: '/assets/v1-alterations.png'
  },
  {
    id: 'household',
    title: 'Household Items',
    description: 'Specialist care for curtains, rugs, and oversized duvets.',
    icon: 'Home',
    image: '/assets/v1-household.png'
  },
  {
    id: 'commercial',
    title: 'Commercial/B2B',
    description: 'High-volume laundry solutions for local businesses and hotels.',
    icon: 'Building2',
    image: '/assets/v1-commercial.png'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    name: 'Wylde Green',
    address: '390 Birmingham Rd',
    postcode: 'B72 1YJ',
    phone: '0121 384 5152',
    hours: 'Mon-Sat: 8:00 AM - 5:30 PM',
    mapUrl: 'https://maps.google.com/maps?q=390%20Birmingham%20Rd,%20Wylde%20Green,%20B72%201YJ&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    name: 'Mere Green',
    address: '286A Lichfield Rd',
    postcode: 'B74 2UG',
    phone: '0121 308 3939',
    hours: 'Mon-Sat: 8:30 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/maps?q=286A%20Lichfield%20Rd,%20Mere%20Green,%20B74%202UG&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export const PRICING: PricingItem[] = [
  {
    category: 'Dry Cleaning',
    items: [
      { name: '2-Piece Suit', price: '£14.50' },
      { name: 'Trousers', price: '£7.25' },
      { name: 'Dress', price: 'From £12.50' },
      { name: 'Winter Coat', price: 'From £18.00' }
    ]
  },
  {
    category: 'Laundry',
    items: [
      { name: 'Shirt (Laundered & Ironed)', price: '£2.80' },
      { name: 'Wash & Fold (8kg bag)', price: '£16.00' },
      { name: 'Duvet (Double)', price: '£22.00' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Thompson',
    text: "The collection service is a lifesaver. Harpers always return my clothes looking brand new. Excellent attention to detail!",
    rating: 5
  },
  {
    name: 'James Wilson',
    text: "Best dry cleaners in Sutton Coldfield. I appreciate their eco-friendly approach and the friendly staff at Mere Green.",
    rating: 5
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Shirt': return <Shirt className="w-6 h-6" />;
    case 'Wind': return <Wind className="w-6 h-6" />;
    case 'Scissors': return <Scissors className="w-6 h-6" />;
    case 'Home': return <Home className="w-6 h-6" />;
    case 'Building2': return <Building2 className="w-6 h-6" />;
    case 'Leaf': return <Leaf className="w-6 h-6" />;
    case 'Clock': return <Clock className="w-6 h-6" />;
    case 'MapPin': return <MapPin className="w-6 h-6" />;
    default: return null;
  }
};
