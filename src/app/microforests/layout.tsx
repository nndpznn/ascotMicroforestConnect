import { ReactNode } from "react";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Micro-Forests - Ascot Micro-Forest Connect",
	description: "View information on all micro-forests",
  };

export default function AllForestsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
