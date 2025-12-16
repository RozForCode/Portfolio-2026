"use client";

import { motion } from "framer-motion";
import CustomCursor from "../CustomCursor";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
    return (
        <>
        <CustomCursor/>
        
        <motion.div
            className="group relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
                {/* Placeholder for image if not provided or while loading */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {title}
                </h3>
                <p className="text-gray-300 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {description}
                </p>
                <div className="flex gap-2 flex-wrap translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-orchid/20 text-orchid border border-orchid/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Initial Title (Visible when not hovered) */}
            <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
        </motion.div>
        </>
    );
}
