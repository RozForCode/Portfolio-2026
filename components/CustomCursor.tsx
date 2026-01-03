"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const amount = 20;
  const width = 26;
  const idleTimeout = 150;

  // Use refs for mutable state to avoid re-renders
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<any[]>([]);
  const idleTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const idle = useRef(false);

  useEffect(() => {
    // Clear previous dots if any
    if (cursorRef.current) {
      cursorRef.current.innerHTML = '';
      dotsRef.current = [];
    }

    class Dot {
      index: number;
      anglespeed: number;
      x: number;
      y: number;
      scale: number;
      range: number;
      element: HTMLSpanElement;
      lockX: number = 0;
      lockY: number = 0;
      angleX: number = 0;
      angleY: number = 0;

      constructor(index: number = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - (width / 2) * this.scale + 2;
        this.element = document.createElement("span");

        // Add styles directly to span or via class
        this.element.style.position = 'absolute';
        this.element.style.display = 'block';
        this.element.style.width = '26px';
        this.element.style.height = '26px';
        this.element.style.borderRadius = '50%';


        this.element.style.mixBlendMode = 'multiply';
        // this.element.style.backgroundColor = '#55f9ffff'; 
        this.element.style.backgroundColor = 'var(--orchid)'; // Or your theme color
        this.element.style.transformOrigin = 'center center';
        this.element.style.transform = 'translate(-50%, -50%)';
        // Optional: mix-blend-mode: difference; if you want that effect
        // this.element.style.mixBlendMode = 'difference';

        gsap.set(this.element, { scale: this.scale });
        cursorRef.current?.appendChild(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }

      draw() {
        if (!idle.current || this.index <= 6) {
          gsap.set(this.element, { x: this.x, y: this.y });
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.y = this.lockY + Math.sin(this.angleY) * this.range;
          this.x = this.lockX + Math.sin(this.angleX) * this.range;
          gsap.set(this.element, { x: this.x, y: this.y });
        }
      }
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
      idle.current = false;

      if (idleTimeoutId.current) {
        clearTimeout(idleTimeoutId.current);
      }

      idleTimeoutId.current = setTimeout(() => {
        idle.current = true;
        dotsRef.current.forEach((d) => d.lock());
      }, idleTimeout);
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    // Initialize dots
    for (let i = 0; i < amount; i++) {
      dotsRef.current.push(new Dot(i));
    }

    // Render loop
    const render = () => {
      let x = mousePosition.current.x;
      let y = mousePosition.current.y;

      dotsRef.current.forEach((dot, index) => {
        dot.x = x;
        dot.y = y;
        dot.draw();

        if (!idle.current || index <= 6) {
          const nextDot = dotsRef.current[index + 1] || dotsRef.current[0];
          x += (nextDot.x - dot.x) * 0.35;
          y += (nextDot.y - dot.y) * 0.35;
        }
      });
    };

    // Add GSAP ticker for performance instead of requestAnimationFrame loop manually
    gsap.ticker.add(render);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      if (idleTimeoutId.current) clearTimeout(idleTimeoutId.current);
      gsap.ticker.remove(render);
      if (cursorRef.current) cursorRef.current.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* SVG Filters */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main Cursor Container */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ filter: 'url("#goo")' }}
      />
    </>
  );
}

