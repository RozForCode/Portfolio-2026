"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import CustomCursor from "../CustomCursor";


const experiences = [
    {
        year: "2025",
        title: "Senior Creative Developer",
        company: "Future Corp",
        description: "Leading the development of immersive web experiences using WebGL and WebGPU.",
    },
    {
        year: "2023",
        title: "Frontend Engineer",
        company: "Tech Innovators",
        description: "Built high-performance React applications and design systems.",
    },
    {
        year: "2021",
        title: "Web Developer",
        company: "Digital Agency",
        description: "Created award-winning websites for various clients.",
    },
    {
        year: "2019",
        title: "Junior Developer",
        company: "StartUp Inc",
        description: "Assisted in backend development and API integration.",
    },
];

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      const cards = gsap.utils.toArray(".timeline-card");
      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[9999] pointer-events-none">
      <CustomCursor />
    </div>

      <main className="min-h-screen relative z-0 bg-background text-foreground py-20 px-4 overflow-x-hidden">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 text-orchid">
          Experience Timeline
        </h1>

        <div ref={containerRef} className="relative max-w-4xl mx-auto z-0">
          {/* Central Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orchid via-cyan to-orchid-dark transform -translate-x-1/2 origin-top z-0"
          />

          <div className="flex flex-col gap-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "timeline-card relative w-full md:w-[45%] p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm z-0",
                  index % 2 === 0 ? "self-start md:text-right" : "self-end md:text-left"
                )}
              >
                {/* ... card content ... */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
