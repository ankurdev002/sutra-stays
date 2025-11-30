"use client";
import Image from "next/image";

interface PropertyMapProps {
  coordinates: { lat: number; lng: number };
  location: string;
 title: string
}

const PropertyMap = ({ coordinates, location, title}: PropertyMapProps) => {
  // Using Google Maps embed API - you can replace with a proper map component
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${coordinates.lat},${coordinates.lng}`;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold font-inter text-black mb-4">
        Where you'll be
      </h2>
      <h4 className="text-[16px] font-medium font-inter text-black my-4">{title}</h4>
      <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-200">
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
          ></iframe>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/assets/icons/loc-icon.svg"
                alt="location"
                width={48}
                height={48}
                className="mx-auto mb-2 opacity-50 "
              />
              <p className="text-gray-600 font-inter">
                Map view for {location}
              </p>
              <p className="text-sm text-gray-500 font-inter mt-1">
                Add Google Maps API key to enable map
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;

