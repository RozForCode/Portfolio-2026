"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiBox, FiX } from "react-icons/fi";
import { useEffect } from "react";

export interface ProjectData {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    tags: string[];
    links?: {
        demo?: string;
        github?: string;
        docker?: string;
    };
}

interface ProjectModalProps {
    project: ProjectData;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    {/* Centering spacer */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                    <motion.div
                        layoutId={`project-${project.title}`}
                        className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10 transition-colors"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Hero Image */}
                        <div className="relative h-64 md:h-96 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-sm bg-orchid/20 text-orchid border border-orchid/50 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 space-y-8">
                            {/* Links */}
                            {project.links && (
                                <div className="flex flex-wrap gap-4">
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors">
                                            <FiGithub /> Source Code
                                        </a>
                                    )}
                                    {project.links.docker && (
                                        <a href={project.links.docker} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-900/50 text-blue-200 border border-blue-500/30 font-semibold rounded-full hover:bg-blue-900/70 transition-colors">
                                            <FiBox /> Docker Hub
                                        </a>
                                    )}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                <div className="md:col-span-2 space-y-6">
                                    <h3 className="text-2xl font-semibold text-white">About the Project</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {project.longDescription}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-white">Technologies</h3>
                                    <ul className="space-y-2 text-gray-400">
                                        {project.tags.map(tag => (
                                            <li key={tag} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-orchid rounded-full" />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
