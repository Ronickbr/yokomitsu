"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isSelectable = target.closest("a, button, [role='button'], [data-cursor-hover]");
            setIsHovering(!!isSelectable);
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* GPS Arrow Container */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-20%", // Offset to make tip the active point
                    translateY: "-20%",
                }}
            >
                {/* Metallic GPS Arrow SVG */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.2 : 1,
                        rotate: -25, // Mantém a inclinação padrão sem rotacionar no hover
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                    >
                        {/* Define metallic gradient */}
                        <defs>
                            <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#e2e8f0", stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: "#94a3b8", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#475569", stopOpacity: 1 }} />
                            </linearGradient>

                            {/* Inner glow for premium look */}
                            <filter id="inner-glow">
                                <feFlood floodColor="white" floodOpacity="0.5" />
                                <feComposite in2="SourceGraphic" operator="out" />
                                <feGaussianBlur stdDeviation="1" result="blur" />
                                <feComposite operator="atop" in2="SourceGraphic" />
                            </filter>
                        </defs>

                        {/* GPS Arrow Path (Navigation Style) */}
                        <path
                            d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"
                            fill="url(#metallic-gradient)"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="0.5"
                            filter="url(#inner-glow)"
                        />
                    </svg>
                </motion.div>

                {/* Trail/Feedback Particle when hovering */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-brand-accent/20 border border-brand-accent/30 -z-10"
                    style={{ translateX: "-50%", translateY: "-50%" }}
                    animate={{
                        scale: isHovering ? [1, 2.5, 1] : 0,
                        opacity: isHovering ? [0.5, 0, 0.5] : 0,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Global Style to hide real cursor */}
            <style jsx global>{`
                @media (min-width: 1024px) {
                    html, body, * {
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
