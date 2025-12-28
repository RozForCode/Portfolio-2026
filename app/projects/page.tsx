"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { staggerContainer, fadeIn } from "@/lib/animations";

const projects = [
    {
        title: "Neon City",
        description: "A cyberpunk-inspired 3D city explorer built with Three.js.",
        image: "/projects/neon-city.jpg",
        tags: ["Three.js", "React", "WebGL"],
    },
    {
        title: "AI Chatbot",
        description: "Intelligent conversational agent powered by LLMs.",
        image: "/projects/ai-chat.jpg",
        tags: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
        title: "Crypto Dashboard",
        description: "Real-time cryptocurrency tracking and analytics platform.",
        image: "/projects/crypto.jpg",
        tags: ["React", "D3.js", "WebSockets"],
    },
    {
        title: "Art Gallery",
        description: "Virtual reality art gallery experience.",
        image: "/projects/gallery.jpg",
        tags: ["WebXR", "A-Frame", "Vue"],
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-30 pb-70 px-4">
            <div className="
                text-4xl md:text-6xl
                font-semibold
                text-center
                mb-24
                bg-gradient-to-r from-timelineHeader via-cyan to-timelineHeader
                bg-clip-text text-transparent
                tracking-tight
                pb-2
                
                gradient-animate
            ">
                Selected Projects
            </div>

            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={fadeIn}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
