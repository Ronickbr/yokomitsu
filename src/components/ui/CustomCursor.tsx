"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const dotX = useSpring(mouseX, { damping: 30, stiffness: 400 });
    const dotY = useSpring(mouseY, { damping: 30, stiffness: 400 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isPickable = target.closest("a, button, [data-cursor-hover]");
            setIsHovering(!!isPickable);
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [isVisible]);

    return (
        <>
            {/* Primary smooth circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-brand-accent/50 rounded-full pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(227, 30, 36, 0.15)" : "transparent",
                    borderColor: isHovering ? "rgba(227, 30, 36, 0.4)" : "rgba(227, 30, 36, 0.5)",
                }}
            />

            {/* Precision Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
            />

            {/* Global Style to hide real cursor only when custom is ready */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
          a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
