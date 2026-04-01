import type { Metadata } from "next";
import { DirectoryContent } from "./directory-content";
import { businesses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Directory",
  description:
    "Explore businesses along Louisville's East Broadway corridor. Search by category and discover restaurants, shops, services, and more.",
};

export default function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Business Directory</h1>
        <p className="mt-2 text-muted-foreground">
          Discover the businesses that make East Broadway a vibrant corridor.
          Filter by category or search by name.
        </p>
      </div>
      <DirectoryContent businesses={businesses} />
    </div>
  );
}
