import styles from "@/app/page.module.scss";
import EqIq from "@/components/EqIq";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <EqIq />
    </main>
  );
}
