// "use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function CustomCursor() {
//     const [isVisible, setIsVisible] = useState(false);

//     // Mouse position values
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     // Smooth spring animation for the cursor
//     const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
//     const cursorX = useSpring(mouseX, springConfig);
//     const cursorY = useSpring(mouseY, springConfig);

//     useEffect(() => {
//         const moveCursor = (e: MouseEvent) => {
//             mouseX.set(e.clientX);
//             mouseY.set(e.clientY);
//             if (!isVisible) setIsVisible(true);
//         };

//         const handleMouseEnter = () => setIsVisible(true);
//         const handleMouseLeave = () => setIsVisible(false);

//         window.addEventListener("mousemove", moveCursor);
//         document.body.addEventListener("mouseenter", handleMouseEnter);
//         document.body.addEventListener("mouseleave", handleMouseLeave);

//         return () => {
//             window.removeEventListener("mousemove", moveCursor);
//             document.body.removeEventListener("mouseenter", handleMouseEnter);
//             document.body.removeEventListener("mouseleave", handleMouseLeave);
//         };
//     }, [mouseX, mouseY, isVisible]);

//     if (!isVisible) return null;

//     return (
//         <motion.img
//             src="/cursors/purpleCursorPointer2.png"
//             alt="Custom Cursor"
//             animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 3, -3, 0], }}
//             transition={{ duration: 1.3, repeat: Infinity }}
//             className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8"
//             style={{
//                 x: cursorX,
//                 y: cursorY,
//                 translateX: "-50%",
//                 translateY: "-50%",
//                 filter: "drop-shadow(0px 0px 6px #d400ff) saturate(140%)",
//             }}

//         />

//     );
// }
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Raw mouse positions
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Main cursor spring (snappy)
    const mainSpring = { damping: 20, stiffness: 700, mass: 0.5 };
    const cursorX = useSpring(mouseX, mainSpring);
    const cursorY = useSpring(mouseY, mainSpring);

    // Trail cursor spring (looser -> lags behind)
    const trailSpring = { damping: 30, stiffness: 220, mass: 0.9 };
    const cursorXTrail = useSpring(mouseX, trailSpring);
    const cursorYTrail = useSpring(mouseY, trailSpring);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* TRAIL (lagging) */}
            <motion.img
                src="/cursors/purpleCursorPointer2.png"
                className="fixed top-0 left-0 pointer-events-none z-[9998] w-8 h-8 blur-sm"
                style={{
                    x: cursorXTrail,
                    y: cursorYTrail,
                    translateX: "-50%",
                    translateY: "-50%",
                    // make trail slightly bigger and dimmer
                    scale: 1.15,
                    opacity: 0.45,
                }}
                animate={{
                    // gentle pulse on the trail so it feels alive but subtle
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />

            {/* MAIN CURSOR (snappy) */}
            <motion.img
                src="/cursors/purpleCursorPointer2.png"
                alt="Custom Cursor"
                animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 1.3, repeat: Infinity }}
                className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    filter: "drop-shadow(0px 0px 6px #d400ff) saturate(140%)",
                }}
            />
        </>
    );
}