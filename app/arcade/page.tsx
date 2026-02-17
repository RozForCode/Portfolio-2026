"use client";

import { motion } from "framer-motion";

export default function ArcadePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-4 md:px-8 relative overflow-hidden">
      {/* Simple Background Gradient for Arcade Vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />

      <div className="
        text-4xl md:text-6xl
        font-semibold
        text-center
        mb-12
        bg-gradient-to-r from-timelineHeader via-cyan to-timelineHeader
        bg-clip-text text-transparent
        tracking-tight
        pb-2
        gradient-animate
      ">
        Arcade
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="p-12 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
          <p className="text-gray-400 text-lg">
            Interactive experiments and games coming soon.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
