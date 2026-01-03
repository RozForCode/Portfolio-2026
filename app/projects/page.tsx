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

            {/* GitHub CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-28 text-center flex flex-col items-center"
            >
                <p className="
                    text-gray-400 
                    text-lg 
                    mb-8 
                    max-w-2xl 
                    mx-auto 
                    text-center
                    leading-snug
                    pb-8
                ">
                    There are {" "}
                    <span className="text-orchid font-semibold">
                        50+ cool software projects
                    </span>{" "}
                    using various technologies on my GitHub.
                </p>
                <a
                    href="https://github.com/RozForCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-6"
                >
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orchid to-cyan rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <button className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                            <span className="flex items-center space-x-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orchid -rotate-6 group-hover:rotate-0 transition-transform duration-300" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                <span className="pr-6 text-gray-100 group-hover:text-cyan transition-colors duration-300">Check out my GitHub</span>
                            </span>
                            <span className="pl-6 text-indigo-400 group-hover:text-white transition duration-200">See more &rarr;</span>
                        </button>
                    </div>
                </a>
            </motion.div>
        </main>
    );
}

