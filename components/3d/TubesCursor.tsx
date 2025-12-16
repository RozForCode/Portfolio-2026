"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import TubesCursor from "../cursors/tubes1.min.js";

export default function TubesCursorComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const app = TubesCursor(canvas, {
            tubes: {
                colors: ['#f967fb', '#53bc28', '#6958d5'], // initial tube colors
                lights: {
                    intensity: 200,
                    colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'], // initial light colors
                },
            },
        });

        function randomColors(count: number) {
            return new Array(count).fill(0).map(
                () =>
                    '#' +
                    Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, '0')
            );
        }

        const handleClick = () => {
            const colors = randomColors(3);
            const lightsColors = randomColors(4);
            app.tubes.setColors(colors);
            app.tubes.setLightsColors(lightsColors);
        };

        document.body.addEventListener('click', handleClick);

        return () => {
            document.body.removeEventListener('click', handleClick);
            // Attempt cleanup if available, though not specified in snippet
        };
    }, []);

    return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
