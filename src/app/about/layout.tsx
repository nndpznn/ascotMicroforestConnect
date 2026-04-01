import { ReactNode } from "react";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "About - Ascot Micro-Forest Connect",
	description: "Learn about the Ascot Micro-Forest Project",
  };

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
