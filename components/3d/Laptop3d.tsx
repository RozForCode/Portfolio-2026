"use client";

import React, { useEffect, useRef } from "react";

export default function Laptop3d() {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.17/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={splineRef} className="w-full h-[500px] md:h-[700px]">
      {React.createElement("spline-viewer", {
        url: "https://prod.spline.design/80r36M-mQaLG3IaT/scene.splinecode",
        className: "w-full h-full",
      })}
    </div>
  );
}
