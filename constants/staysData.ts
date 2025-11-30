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
    id: "silver-oaks-cottage-1",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.83,
    reviews: 1800,
    price: 22000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
  {
    id: "silver-oaks-cottage-2",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.8,
    reviews: 100,
    price: 1000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
  {
    id: "silver-oaks-cottage-3",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.8,
    reviews: 100,
    price: 1000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
  {
    id: "silver-oaks-cottage-4",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.8,
    reviews: 100,
    price: 1000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
  {
    id: "silver-oaks-cottage-5",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.8,
    reviews: 100,
    price: 1000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
  {
    id: "silver-oaks-cottage-6",
    title: "Sutra Stays® — The Silver Oaks Cottage",
    location: "Bhimtal, Uttarakhand",
    rating: 4.8,
    reviews: 100,
    price: 1000,
    image: "/assets/images/grid-img.svg",
    host: {
      name: "Mr Yogesh",
      isSuperhost: true,
    },
    property: {
      guests: 4,
      bedrooms: 3,
      beds: 3,
      baths: 4,
      type: "Entire villa",
    },
    images: [
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
      "/assets/images/grid-img.svg",
    ],
    amenities: [
      { name: "Beach access - Beachfront" },
      { name: "TV" },
      { name: "Private Pool" },
      { name: "Free parking on premises" },
      { name: "Wifi" },
      { name: "Air conditioning" },
    ],
    reviewsData: {
      cleanliness: 4.8,
      communication: 4.9,
      checkin: 4.9,
      accuracy: 4.8,
      location: 4.9,
      value: 4.7,
    },
    description:
      "Our featured properties bring together nature, comfort, and mindful design. From curated interiors to personalized services, every Sutra stay offers a seamless balance of warmth, privacy, and tranquility.",
    coordinates: {
      lat: 15.2993,
      lng: 74.124,
    },
  },
];

export const getStayById = (id: string): Stay | undefined => {
  return staysData.find((stay) => stay.id === id);
};

