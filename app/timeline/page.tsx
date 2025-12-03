"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

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
            // Animate the central line
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

            // Animate cards
            const cards = gsap.utils.toArray(".timeline-card");
            cards.forEach((card: any, i) => {
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
        <main className="min-h-screen bg-background text-foreground py-20 px-4 overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 text-orchid">
                Experience Timeline
            </h1>

            <div ref={containerRef} className="relative max-w-4xl mx-auto">
                {/* Central Line */}
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orchid via-cyan to-orchid-dark transform -translate-x-1/2 origin-top"
                />

                <div className="flex flex-col gap-20">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={cn(
                                "timeline-card relative w-full md:w-[45%] p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
                                index % 2 === 0 ? "self-start md:text-right" : "self-end md:text-left"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute top-6 w-4 h-4 rounded-full bg-cyan shadow-[0_0_10px_#00ffff]",
                                    index % 2 === 0
                                        ? "right-[-12.5%] md:right-[-13.5%]" // Adjust dot position for left cards
                                        : "left-[-12.5%] md:left-[-13.5%]" // Adjust dot position for right cards
                                )}
                            />
                            <span className="text-cyan font-mono text-sm">{exp.year}</span>
                            <h3 className="text-2xl font-bold text-white mt-2">{exp.title}</h3>
                            <h4 className="text-orchid text-lg mb-4">{exp.company}</h4>
                            <p className="text-gray-400">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
