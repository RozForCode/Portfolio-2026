"use client";

import Link from "next/link";
import PrismVisual from "@/components/PrismVisual";
import GlassButton from "@/components/GlassButton";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden relative bg-black">
      <PrismVisual />

      <div className={styles.content}>
        {/* <h1 className={styles.title}>PRISM</h1>
        <p className={styles.tagline}>Spectrum of Light</p> */}
        <h1 className={styles.title}>Navrose Singh Johal</h1>

        <p className={styles.tagline}>Software Development & Network Engineering Student @ Sheridan College</p>

        <p className={styles.subtag}>
          Turning ideas into reliable, scalable, and user-focused digital experiences.
        </p>

        <p className={styles.skills}>
          Full-Stack Development • Unity • Node.js • React • Angular • C# • Azure • MongoDB • Python • Cloud Systems
        </p>


        <div className={styles.buttons}>
          <Link href="/timeline">
            <GlassButton>Timeline</GlassButton>
          </Link>
          <Link href="/projects">
            <GlassButton>Projects</GlassButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
