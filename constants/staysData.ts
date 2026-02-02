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
  map: string;
}

export const staysData: Stay[] = [
  {
    id: "joes-nest",
    title: "Stay® — Joe's Nest",
    location: "Saraswati Kunj, Sector 54, Gurugram, Haryana",
    rating: 4.5,
    reviews: 50,
    price: 5000,
    image: "/assets/images/joesnext_property/finals/IMG_5948.JPG",
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
      "/assets/images/joesnext_property/finals/IMG_5948.JPG",
      "/assets/images/joesnext_property/finals/IMG_5950.JPG",
      "/assets/images/joesnext_property/finals/IMG_5980.JPG",
      "/assets/images/joesnext_property/finals/IMG_5984.JPG",
      "/assets/images/joesnext_property/finals/IMG_6017.JPG",
      "/assets/images/joesnext_property/finals/IMG_6043.JPG",
      "/assets/images/joesnext_property/finals/IMG_6077.JPG",
      "/assets/images/joesnext_property/finals/IMG_6083.JPG",
      "/assets/images/joesnext_property/finals/IMG_6088.JPG",
      "/assets/images/joesnext_property/finals/IMG_6168.JPG",
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
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.2038163585696!2d77.09906693558193!3d28.437125918737536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f5326160b63%3A0xce7bdc466390c4b6!2sSaraswati%20Kunj%20Rd%2C%20Sector%2053%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1767811716713!5m2!1sen!2sin",
  },
  {
    id: "serene-67",
    title: "Stay® — Serene 67",
    location: "Sector 67, Gurgaon, 122102, Haryana",
    rating: 4.5,
    reviews: 50,
    price: 6500,
    image: "/assets/images/serene/media/serene1.JPG",
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
      "/assets/images/serene/media/serene1.JPG",
      "/assets/images/serene/media/serene2.JPG",
      "/assets/images/serene/media/serene3.JPG",
      "/assets/images/serene/media/serene4.JPG",
      "/assets/images/serene/media/serene5.JPG",
      "/assets/images/serene/media/serene6.JPG",
      "/assets/images/serene/media/serene7.JPG",
      "/assets/images/serene/media/serene8.JPG",
      "/assets/images/serene/media/serene9.JPG",
      "/assets/images/serene/media/serene10.JPG",
      "/assets/images/serene/media/serene11.JPG",

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
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7020.161277253786!2d77.05053206274366!3d28.386632292454735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23ca0e000c0d%3A0x6037ed9e24222602!2sSector%2067%2C%20Gurugram%2C%20Haryana%20122101!5e0!3m2!1sen!2sin!4v1767811979086!5m2!1sen!2sin",
  },
];

export const getStayById = (id: string): Stay | undefined => {
  return staysData.find((stay) => stay.id === id);
};

