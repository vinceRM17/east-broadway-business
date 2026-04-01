import type { Metadata } from "next";
import { GetInvolvedContent } from "./get-involved-content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the East Broadway Business Association as a member, volunteer, or community partner.",
};

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Get Involved</h1>
        <p className="mt-2 text-muted-foreground">
          There are many ways to support the East Broadway corridor. Whether you
          own a business, want to volunteer, or just want to stay connected —
          we&apos;d love to hear from you.
        </p>
      </div>
      <GetInvolvedContent />
    </div>
  );
}
