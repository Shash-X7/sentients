import { Hero }             from "@/components/sections/Hero";
import { Problem }          from "@/components/sections/Problem";
import { ServicePillars }   from "@/components/sections/ServicePillars";
import { Capabilities }     from "@/components/sections/Capabilities";
import { SystemsPreview }   from "@/components/sections/SystemsPreview";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { AboutPreview }     from "@/components/sections/AboutPreview";
import { ContactCTA }       from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <ServicePillars />
      <Capabilities />
      <SystemsPreview />
      <EngagementModels />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
