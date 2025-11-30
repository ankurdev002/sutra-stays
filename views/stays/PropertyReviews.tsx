import Image from "next/image";
import { Stay } from "@/constants/staysData";

interface PropertyReviewsProps {
  stay: Stay;
}

const PropertyReviews = ({ stay }: PropertyReviewsProps) => {
  const reviewCategories = [
    { label: "Cleanliness", value: stay.reviewsData.cleanliness },
    { label: "Communication", value: stay.reviewsData.communication },
    { label: "Check-in", value: stay.reviewsData.checkin },
    { label: "Accuracy", value: stay.reviewsData.accuracy },
    { label: "Location", value: stay.reviewsData.location },
    { label: "Value", value: stay.reviewsData.value },
  ];

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1">
          <Image
            src="/assets/icons/star.svg"
            alt="star"
            width={20}
            height={20}
          />
          <span className="text-xl font-semibold font-inter text-black">
            {stay.rating}
          </span>
        </div>
        <span className="text-base font-inter text-gray-600">
          • {stay.reviews.toLocaleString()} reviews
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewCategories.map((category) => (
          <div key={category.label} className="flex items-center gap-4">
            <div className="w-24 shrink-0">
              <span className="text-sm font-inter text-gray-700">
                {category.label}
              </span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-deep-green"
                  style={{ width: `${(category.value / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium font-inter text-black w-8">
                {category.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReviews;

