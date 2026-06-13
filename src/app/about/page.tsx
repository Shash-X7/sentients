import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FOUNDER, TIMELINE, SITE } from "@/lib/config";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Shaashwath Vijayakumar — AI Systems Automation Engineer, Technical Product Owner and Cognitive AI Systems Engineer.",
};

export default function AboutPage() {
  return <AboutClient />;
}
