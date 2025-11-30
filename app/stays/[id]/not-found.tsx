import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold font-inter text-black mb-4">
          Property Not Found
        </h1>
        <p className="text-lg font-inter text-gray-600 mb-8">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/#stays">
          <Button
            variant="deep-green"
            label="Browse All Stays"
            className="px-6 py-3"
          />
        </Link>
      </div>
    </div>
  );
}

