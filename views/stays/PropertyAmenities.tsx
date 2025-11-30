import { Stay } from "@/constants/staysData";

interface PropertyAmenitiesProps {
  amenities: Stay["amenities"];
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  const displayedAmenities = amenities.slice(0, 6);
  const remainingCount = amenities.length - displayedAmenities.length;

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold font-inter text-black mb-6">
        What this place offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-deep-green"></div>
            </div>
            <span className="text-base font-inter text-gray-700">
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
      {remainingCount > 0 && (
        <button className="mt-6 text-base font-semibold font-inter text-deep-green hover:underline">
          Show all {amenities.length} facilities
        </button>
      )}
    </div>
  );
};

export default PropertyAmenities;

