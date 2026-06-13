import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Shaashwath Vijayakumar — AI Systems Automation Engineer, Technical Product Owner and Cognitive AI Systems Engineer.",
};

export default function AboutPage() {
  return <AboutClient />;
}
