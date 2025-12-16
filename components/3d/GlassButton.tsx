"use client";

import { useRef } from "react";
import styles from "@/app/home.module.css";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function GlassButton({ children, className, ...props }: GlassButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        button.style.setProperty('--x', `${x}%`);
        button.style.setProperty('--y', `${y}%`);
    };

    return (
        <button
            ref={buttonRef}
            className={`${styles.glassButton} ${className || ''}`}
            onMouseMove={handleMouseMove}
            {...props}
        >
            <span className={styles.shimmer}></span>
            <span>{children}</span>
        </button>
    );
}
