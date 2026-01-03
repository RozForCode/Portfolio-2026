"use client";

import { motion } from "framer-motion";
import type { ProjectData } from "./ProjectModal";

interface ProjectCardProps {
    project: ProjectData;
    onClick: (project: ProjectData) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`project-${project.title}`}
            className="group relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-white/5 hover:border-orchid/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(218,112,214,0.4)]"
            onClick={() => onClick(project)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* Placeholder for image if not provided or while loading */}
                <div className="absolute inset-0 w-full h-full bg-gray-800" />
                {/* Actual Image if mapped */}
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110 transform"
                    />
                )}
            </div>

            {/* Gradient Overlay - lighter at top to show image */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80" />

            {/* Content Content - Always visible for quick scanning as requested */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="
                        text-2xl font-bold mb-3
                        bg-gradient-to-r from-timelineHeader via-cyan to-timelineHeader
                        bg-clip-text text-transparent
                        gradient-animate
                    ">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                    </p>

                    <div className="flex gap-2 flex-wrap mt-2">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="
                                    px-3 py-1.5 
                                    text-sm font-medium 
                                    rounded-lg 
                                    bg-orchid/10 
                                    text-orchid-300 
                                    border border-orchid/20 
                                    backdrop-blur-md 
                                    shadow-[0_0_10px_rgba(218,112,214,0.1)]
                                    transition-all duration-300
                                    group-hover:border-orchid/40
                                    group-hover:shadow-[0_0_15px_rgba(218,112,214,0.2)]
                                    group-hover:bg-orchid/20
                                "
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 4 && (
                            <span className="px-2 py-1.5 text-sm text-gray-400 font-medium self-center">+{project.tags.length - 4}</span>
                        )}
                    </div>
                </div>

                {/* "View Details" hint that appears on hover */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-orchid font-semibold text-sm flex items-center gap-1">
                        View Details &rarr;
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
