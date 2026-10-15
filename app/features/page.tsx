import type { Metadata } from "next";
import FeaturesExplorer from "./FeaturesExplorer";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Orbet’s tools for online bookings, customers, payments and venue operations. Find the features included in Growth and Pro.",
};

export default function FeaturesPage() {
  return <FeaturesExplorer />;
}
