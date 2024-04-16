import styles from "@/app/page.module.scss";
import Carousel from "@/components/Carousel";
import EqIq from "@/components/EqIq";
import HeroSection from "@/components/HeroSection";
import MeetAhead from "@/components/MeetAhead";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <EqIq />
      <Carousel />
      <MeetAhead />
    </main>
  );
}
