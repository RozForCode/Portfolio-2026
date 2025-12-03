"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JellyButton } from "@/components/ui/JellyButton";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orchid/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="z-10 text-center max-w-4xl px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orchid via-white to-cyan"
          variants={slideUp}
        >
          FUTURE VISION
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          variants={slideUp}
        >
          Crafting award-winning digital experiences with next-gen web technologies.
        </motion.p>

        <motion.div variants={fadeIn} className="flex gap-4 justify-center">
          <Link href="/timeline">
            <JellyButton>Explore Journey</JellyButton>
          </Link>
          <Link href="/projects">
            <button className="px-8 py-4 rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-colors duration-300 font-bold text-lg">
              View Work
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
