import { ReactNode } from "react";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "[Forest Name] - Ascot Micro-Forest Connect",
	description: "View information on a specific micro-forest",
  };

export default function ForestLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
