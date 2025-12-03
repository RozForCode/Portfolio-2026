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
        <h1 className={styles.title}>PRISM</h1>
        <p className={styles.tagline}>Spectrum of Light</p>

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
