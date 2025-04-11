import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";
import ActivityListSection from "@/sections/ActivityListSection";
import FooterSection from "@/sections/FooterSection";
import EsportsSection from "@/sections/EsportsSection";
import ExhibitionSection from "@/sections/ExhibitionSection";
import HackathonSection from "@/sections/HackathonSection";
import LandingSection from "@/sections/Landing";
import { PrizePoolSection } from "@/sections/PrizePoolSection";
import RoboticsSection from "@/sections/RoboticsSection";
import { LocationSection } from "@/sections/LocationSection";

export default function Home() {
    return (
      <>
        <LandingSection />
        <PrizePoolSection />
        <ActivityListSection />
        <EsportsSection />
        <RoboticsSection />
        <HackathonSection />
        <ExhibitionSection />
        <LocationSection />
        <FooterSection />
      </>
    );
}