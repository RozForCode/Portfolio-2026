"use client";

import Link from "next/link";
import GlassButton from "@/components/3d/GlassButton";
import styles from "./home.module.css";
// import TubesCursor from "@/components/3d/TubesCursor"; //too heavy on performance
// import Laptop3d from "@/components/3d/Laptop3d"; // doesn't look good
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-black flex flex-col">


      {/* <TubesCursor /> */}
      {/* <Laptop3d /> */}
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleStroke}>Navrose Singh Johal</h2>
          <h2 className={styles.titleFill}>Navrose Singh Johal</h2>
        </div>


        <p className={styles.tagline}>Software Development & Network Engineering Student @ Sheridan College</p>

        <p className={styles.subtag}>
          Turning ideas into reliable, scalable, and user-focused digital experiences.
        </p>



        <div className={styles.buttons}>
          {/* SkillsGrid moved below hero section */}
          <Link href="/timeline">
            <GlassButton>Timeline</GlassButton>
          </Link>
          <Link href="/projects">
            <GlassButton>Projects</GlassButton>
          </Link>
        </div>
      </div>

      <SkillsGrid />
    </main>
  );
}
