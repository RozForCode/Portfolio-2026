"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal, type ProjectData } from "@/components/projects/ProjectModal";
import { staggerContainer, fadeIn } from "@/lib/animations";

const projects: ProjectData[] = [
    {
        title: "Lythos.space",
        shortDescription:
            "Hackathon-built geospatial analytics platform using Canadian government emissions data.",
        longDescription:
            "Built at Bramhacks 2025. Aggregated and preprocessed large-scale Canadian corporate emissions datasets using Python. Exposed cleaned data via Flask APIs and visualized it using GeoJSON and 3GL-based mapping.",
        image: "/projects/lythos.jpg",
        tags: ["Python", "Flask", "Data Mining", "GeoJSON", "APIs"],
        links: {
            demo: "https://lythos.space",
            // github: "https://github.com/...", // Add real link if available
        },
    },
    {
        title: "LearnStream",
        shortDescription:
            "AI-powered skill progression tracker and learning roadmap generator.",
        longDescription:
            "Built with Ionic Angular. Generates personalized learning paths based on user skill level and experience, with AI-assisted guidance and adaptive recommendations.",
        image: "/projects/learnstream.png",
        tags: ["Ionic", "Angular", "AI", "UX Design"],
    },
    {
        title: "TakeOver (Unity WebGL)",
        shortDescription:
            "Browser-playable Unity game embedded via WebGL.",
        longDescription:
            "Developed multiple games in Unity using C#. Exported WebGL builds and embedded them into a custom website to demonstrate gameplay and performance on the web.",
        image: "/projects/Unity-Logo.jpeg",
        tags: ["Unity", "C#", "WebGL", "Game Design"],
    },
    {
        title: ".NET MAUI & Windows Apps",
        shortDescription:
            "Collection of native Windows and cross-platform apps built with .NET.",
        longDescription:
            "Developed multiple desktop and mobile applications using .NET and MAUI, focusing on native APIs, performance, and clean architecture. Source code available on GitHub.",
        image: "/projects/maui.png",
        tags: [".NET", "MAUI", "C#", "Windows"],
        links: {
            // github: "https://github.com/...", // Add real link if available
        },
    },
    {
        title: "Canada CO₂ Emissions Docker Pipeline",
        shortDescription:
            "Containerized data mining pipeline for Canadian emissions analytics.",
        longDescription:
            "Created a Dockerized Ionic Angular application that collects native device data (e.g., geolocation) and feeds it into an API for emissions-based insights. Tracks corporate net emissions across Canada.",
        image: "/projects/docker.webp",
        tags: ["Docker", "Data Mining", "Ionic", "APIs"],
        links: {
            // docker: "https://hub.docker.com/...", // Add real link if available
        },
    },
    {
        title: "Manufacturing Sales Analytics Pipeline",
        shortDescription:
            "End-to-end analytics pipeline using AI-generated enterprise data.",
        longDescription:
            "Simulated a real manufacturing company using AI-generated data covering inventory, quality metrics, and dynamic pricing. Built analytics workflows to extract insights and trends.",
        image: "/projects/data.jpg",
        tags: ["Data Analytics", "Pipelines", "AI Data", "Business Intelligence"],
    },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-4 md:px-8">
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
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={fadeIn}>
                        <ProjectCard
                            project={project}
                            onClick={setSelectedProject}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

