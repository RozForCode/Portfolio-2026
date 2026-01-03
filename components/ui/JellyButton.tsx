"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface JellyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function JellyButton({ children, className, ...props }: JellyButtonProps) {
    return (
        <motion.button
            className={cn(
                "relative px-8 py-4 rounded-full bg-cyan text-black font-bold text-lg overflow-hidden shadow-lg",
                "hover:bg-orchid-dark transition-colors duration-300",
                className
            )}
            whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{
                scale: 0.95,
            }}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
