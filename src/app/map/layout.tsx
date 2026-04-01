import { ReactNode } from "react";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Map - Ascot Micro-Forest Connect",
	description: "View the map showing locations and quick data on all micro-forests",
  };

export default function MapLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
