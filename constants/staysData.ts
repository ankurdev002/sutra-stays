export interface Stay {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  host: {
    name: string;
    isSuperhost: boolean;
    avatar?: string;
  };
  property: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
    type: string;
  };
  images: string[];
  amenities: {
    name: string;
    icon?: string;
  }[];
  reviewsData: {
    cleanliness: number;
    communication: number;
    checkin: number;
    accuracy: number;
    location: number;
    value: number;
  };
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const staysData: Stay[] = [
  {
    id: "joes-nest",
    title: "Sutra Stays® — Joe's Nest",
    location: "Saraswati Kunj, Sector 54, Gurugram, Haryana",
    rating: 4.5,
    reviews: 50,
    price: 5000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Sutra Stays",
      isSuperhost: false,
    },
    property: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 2,
      type: "Serviced Apartment",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Roof Top Lounge" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
      { name: "Fully Furnished" },
    ],
    reviewsData: {
      cleanliness: 4.5,
      communication: 4.5,
      checkin: 4.5,
      accuracy: 4.5,
      location: 4.5,
      value: 4.5,
    },
    description:
      "Welcome to Joe's Nest by Sutra Stays, a cozy 1BHK with a private sky lounge overlooking the lush greens of DLF Camellias. Tucked in the heart of Gurugram at the Golf Course Road, it connects easily to all major business hubs. The space carries a boho-chic, handcrafted charm, perfect for small parties, sundowners, kitty gatherings or relaxed evenings under the open sky. 🌿",
    coordinates: {
      lat: 28.4089,
      lng: 77.0928,
    },
  },
  {
    id: "serene-67",
    title: "Sutra Stays® — Serene 67",
    location: "Sector 67, Gurgaon, 122102, Haryana",
    rating: 4.5,
    reviews: 50,
    price: 6500,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Sutra Stays",
      isSuperhost: false,
    },
    property: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1,
      type: "Serviced Apartment",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
      { name: "Fully Furnished" },
    ],
    reviewsData: {
      cleanliness: 4.5,
      communication: 4.5,
      checkin: 4.5,
      accuracy: 4.5,
      location: 4.5,
      value: 4.5,
    },
    description:
      "A modern serviced apartment in Sector 67, Gurgaon offering comfort and convenience. Fully furnished with all essential amenities for a comfortable stay.",
    coordinates: {
      lat: 28.3949,
      lng: 77.0824,
    },
  },
];

export const getStayById = (id: string): Stay | undefined => {
  return staysData.find((stay) => stay.id === id);
};

