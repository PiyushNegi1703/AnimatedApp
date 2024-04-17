import styles from "@/app/page.module.scss";
import Carousel from "@/components/Carousel";
import EqIq from "@/components/EqIq";
import ExplainSection from "@/components/ExplainSection";
import HeroSection from "@/components/HeroSection";
import MeetAhead from "@/components/MeetAhead";
import Navbar from "@/components/Navbar";
import SelfImprovement from "@/components/SelfImprovement";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <EqIq />
      <Carousel />
      <MeetAhead />
      <SelfImprovement />
      <ExplainSection />
    </main>
  );
}
