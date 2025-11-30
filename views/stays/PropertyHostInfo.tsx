import Image from "next/image";
import { Stay } from "@/constants/staysData";
import SuperhostStrokeIcon from "@/public/assets/icons/superhost-stroke";
import LocationIcon from "@/public/assets/icons/location";
import KeyIcon from "@/public/assets/icons/key-icon";
import TimerIcon from "@/public/assets/icons/timer-icon";

interface PropertyHostInfoProps {
  stay: Stay;
}

const PropertyHostInfo = ({ stay }: PropertyHostInfoProps) => {
  return (
    <div className="mb-8 pb-8">
      <div className="flex flex-col lg:flex-row gap-6  border-b border-gray-200 pb-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold font-inter text-black mb-4">
            {stay.property.type} hosted by {stay.host.name}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm font-inter text-gray-700 mb-6">
            <span>{stay.property.guests} guests</span>
            <span>•</span>
            <span>{stay.property.bedrooms} bedroom</span>
            <span>•</span>
            <span>{stay.property.beds} bed</span>
            <span>•</span>
            <span>{stay.property.baths} bath</span>
          </div>

          <div className="space-y-4">
            {stay.host.isSuperhost && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-start justify-center shrink-0">
                  <span className="text-lg font-semibold font-inter text-black">
                  <SuperhostStrokeIcon /> 
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold font-inter text-black mb-1 flex items-center gap-2">
                  {stay.host.name} is a Superhost
                  </h3>
                  <p className="text-sm font-inter text-gray-600">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full  flex items-start justify-center shrink-0">
                <LocationIcon />
              </div>
              <div>
                <h3 className="font-semibold font-inter text-black mb-1">
                  Great location
                </h3>
                <p className="text-sm font-inter text-gray-600">
                  95% of recent guests gave the location a 5-star rating.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-start justify-center shrink-0">
                <KeyIcon />
              </div>
              <div>
                <h3 className="font-semibold font-inter text-black mb-1">
                  Great check-in experience
                </h3>
                <p className="text-sm font-inter text-gray-600">
                  100% of recent guests gave the check-in process a 5-star
                  rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 pl-8 border border-gray-200 rounded-lg flex items-center justify-between gap-3">
       
        <p className="text-sm font-inter text-gray-700">
          Only 5 hours left to book. The host will stop accepting bookings for
          your dates soon.
        </p>
        <TimerIcon />
      </div>
    </div>
  );
};

export default PropertyHostInfo;

