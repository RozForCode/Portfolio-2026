"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Timeline", path: "/timeline" },
    { name: "Projects", path: "/projects" },
    { name: "Hobbies", path: "/hobbies" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
            <nav className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-6">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-gray-400"
                            )}
                        >
                            {item.name}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 -z-10 bg-white/10 rounded-full -m-2"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
