
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface LocationInfo {
  name: string;
  address: string;
  postcode: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

export interface PricingItem {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}
