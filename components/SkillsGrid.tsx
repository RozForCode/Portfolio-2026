"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDocker,
    FaUnity,
    FaLinux,
    FaCloud,
    FaNetworkWired,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiAngular,
    SiTypescript,
    SiJavascript,
    SiMongodb,
    SiExpress,
    SiSharp,
    SiUnrealengine,
    SiKubernetes,
} from "react-icons/si";

import { AppServicePlansWeb } from "@threeveloper/azure-react-icons";


// --- Types ---
type SkillCategory = "Frontend" | "Backend" | "Game / Graphics" | "DevOps / Systems" | "Other";

interface Skill {
    name: string;
    icon: React.ElementType;
    category: SkillCategory;
}

// --- Data ---
const skills: Skill[] = [
    // Frontend
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "Angular", icon: SiAngular, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
    { name: "HTML", icon: FaHtml5, category: "Frontend" },
    { name: "CSS / Tailwind", icon: FaCss3Alt, category: "Frontend" },
    // Backend
    { name: "Node.js", icon: FaNodeJs, category: "Backend" },
    { name: "Express", icon: SiExpress, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, category: "Backend" },
    { name: "REST APIs", icon: FaNetworkWired, category: "Backend" },
    // Game / Graphics
    { name: "Unity", icon: FaUnity, category: "Game / Graphics" },
    { name: "C#", icon: SiSharp, category: "Game / Graphics" },
    { name: "Unreal Engine", icon: SiUnrealengine, category: "Game / Graphics" },
    // DevOps / Systems
    { name: "Linux", icon: FaLinux, category: "DevOps / Systems" },
    { name: "Docker", icon: FaDocker, category: "DevOps / Systems" },
    { name: "Kubernetes", icon: SiKubernetes, category: "DevOps / Systems" },
    { name: "Azure", icon: AppServicePlansWeb, category: "DevOps / Systems" },
    { name: "Cloud Systems", icon: FaCloud, category: "DevOps / Systems" },
    // Other
    { name: "Git & GitHub", icon: FaGitAlt, category: "Other" },
    { name: "Python", icon: FaPython, category: "Other" },
];

// --- Animation Variants ---
import { Variants, MotionProps } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const floatAnimation: MotionProps["animate"] = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

// --- Component ---

const SkillsGrid = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-transparent min-h-[50vh] flex flex-col items-center justify-center">
            <div className="max-w-7xl w-full">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    SKILLS ARSENAL
                </h3>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skills.map((skill, index) => {
                        // Alternate colors: Even = Cyan, Odd = Purple
                        const isEven = index % 2 === 0;
                        const accentColorClass = isEven ? "text-cyan-400" : "text-purple-500";
                        const borderColorClass = isEven
                            ? "group-hover:border-cyan-400"
                            : "group-hover:border-purple-500";
                        const shadowClass = isEven
                            ? "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                            : "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]";

                        return (
                            <motion.div
                                key={skill.name}
                                variants={cardVariants}
                                className="relative group perspective-1000"
                            >
                                {/* Floating Wrapper */}
                                <motion.div
                                    animate={floatAnimation}
                                    className={`
                    h-full p-6 rounded-xl
                    bg-gray-950/40 backdrop-blur-md
                    border border-white/10
                    flex flex-col items-center justify-center gap-4
                    transition-all duration-300
                    cursor-pointer
                    ${borderColorClass}
                    ${shadowClass}
                  `}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Icon */}
                                    <div className={`text-5xl ${accentColorClass} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                                        <skill.icon />
                                    </div>

                                    {/* Skill Name */}
                                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsGrid;
