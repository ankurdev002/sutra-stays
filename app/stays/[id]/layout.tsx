import { getStayById } from "@/constants/staysData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
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

export default function StayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


