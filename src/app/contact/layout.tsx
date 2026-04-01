import { ReactNode } from "react";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Contact - Ascot Micro-Forest Connect",
	description: "Contact the team behind Ascot Micro-Forest Connect",
  };

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
