"use client";

import Link from "next/link";
import TypingTagline from "@/components/TypingTagline";
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
          <h2 className={styles.titleStroke}>Navrose S. Johal</h2>
          <h2 className={styles.titleFill}>Navrose S. Johal</h2>
        </div>


        <TypingTagline
          text={['SDNE @ Sheridan College']}
          className={styles.tagline}
        />





        <div className={styles.buttons}>
          {/* SkillsGrid moved below hero section */}
          <Link href="/timeline">
            <GlassButton>Timeline</GlassButton>
          </Link>
          <Link href="/projects">
            <GlassButton>Projects</GlassButton>
          </Link>
        </div>

        <p className={styles.subtag}>
          Building across layers &nbsp;
          <span className={styles.droppingTexts}>
            <span>application development</span>
            <span>game systems</span>
            <span>services analysis</span>
            <span>low-level development</span>
            <span>architecture</span>
            <span>linux internals</span>
          </span>
        </p>
      </div>

      <SkillsGrid />
    </main>
  );
}
