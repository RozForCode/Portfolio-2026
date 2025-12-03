"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function HobbiesPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-background">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-orchid border-t-transparent rounded-full animate-spin" />
            <p className="text-orchid font-mono animate-pulse">Loading 3D Scene...</p>
          </div>
        </div>
      )}

      {/* Content Overlay - Optional text over the 3D scene */}
      <div className="absolute top-24 left-4 md:left-10 z-10 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
          Art & <span className="text-orchid">Books</span>
        </h1>
        <p className="text-gray-300 max-w-md drop-shadow-md">
          Explore my creative world in 3D. Drag to rotate, scroll to zoom.
        </p>
      </div>

      {/* Spline Scene */}
      <div className="w-full h-screen">
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </main>
  );
}
