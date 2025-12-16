"use client";

import Link from "next/link";
import GlassButton from "@/components/3d/GlassButton";
import styles from "./home.module.css";
// import TubesCursor from "@/components/3d/TubesCursor"; //too heavy on performance
// import Laptop3d from "@/components/3d/Laptop3d"; // doesn't look good
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden relative bg-black">


      {/* <TubesCursor /> */}
      {/* <Laptop3d /> */}
      <div className={styles.content}>
        <h1 className={styles.title}>Navrose Singh Johal</h1>

        <p className={styles.tagline}>Software Development & Network Engineering Student @ Sheridan College</p>

        <p className={styles.subtag}>
          Turning ideas into reliable, scalable, and user-focused digital experiences.
        </p>



        <p className={styles.skills}>
          Full-Stack Development • Unity • Node.js • React • Angular • C# • Azure • MongoDB • Python • Cloud Systems
        </p>


        <div className={styles.buttons}>
          <SkillsGrid />
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
