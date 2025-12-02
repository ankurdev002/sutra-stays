import { getStayById } from "@/constants/staysData";
import { notFound } from "next/navigation";
import PropertyHeader from "@/views/stays/PropertyHeader";
import PropertyGallery from "@/views/stays/PropertyGallery";
import PropertyBookingWidget from "@/views/stays/PropertyBookingWidget";
import PropertyHostInfo from "@/views/stays/PropertyHostInfo";
import PropertyAmenities from "@/views/stays/PropertyAmenities";
import PropertyReviews from "@/views/stays/PropertyReviews";
import PropertyMap from "@/views/stays/PropertyMap";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stay = getStayById(id);

  if (!stay) {
    return {
      title: "Property Not Found | Sutra Stays",
    };
  }

  return {
    title: `${stay.title} | Sutra Stays`,
    description: stay.description,
  };
}

export default async function StayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stay = getStayById(id);

  if (!stay) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden" data-section={`stay-${stay.id}`}>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[70px] w-full mt-[120px]">
        <PropertyHeader stay={stay} />
        <PropertyGallery images={stay.images} />
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-16 py-6">
            <div className="flex-1 min-w-0">
              <PropertyHostInfo stay={stay} />
              <PropertyAmenities amenities={stay.amenities} />
              <PropertyReviews stay={stay} />
            </div>
            <div className="w-full lg:w-[400px] lg:sticky lg:top-24 lg:self-start lg:h-fit">
              <PropertyBookingWidget stay={stay} />
            </div>
          </div>
          <PropertyMap coordinates={stay.coordinates} location={stay.location} title={stay.title} />
        </div>
      </div>
    </div>
  );
}

