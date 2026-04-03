"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            if (cursorRef.current) {
                // Manipulação direta do DOM para latência zero
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isSelectable = target.closest("a, button, [role='button'], [data-cursor-hover]");
            setIsHovering(!!isSelectable);
        };

        window.addEventListener("mousemove", moveMouse, { passive: true });
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* GPS Arrow Container - Using ref for ultra-fast positioning */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block will-change-transform"
                style={{
                    left: 0,
                    top: 0,
                    // Offset para alinhar a ponta da seta (12, 2) exatamente no mouse
                    marginLeft: "-16px",
                    marginTop: "-2px",
                }}
            >
                {/* Metallic GPS Arrow SVG */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.2 : 1,
                        rotate: -25, // Inclinado para a esquerda por padrão
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#e2e8f0", stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: "#94a3b8", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#475569", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>

                        {/* GPS Arrow Path (Navigation Style) - Simplified for performance */}
                        <path
                            d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"
                            fill="url(#metallic-gradient)"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="0.5"
                        />
                    </svg>
                </motion.div>

                {/* Trail/Feedback Particle when hovering - Subtle and optimized */}
                <motion.div
                    className="absolute top-4 left-4 w-4 h-4 rounded-full bg-brand-accent/20 border border-brand-accent/30 -z-10"
                    style={{ transform: "translate(-50%, -50%)" }}
                    animate={{
                        scale: isHovering ? [1, 2, 1] : 0,
                        opacity: isHovering ? [0.4, 0, 0.4] : 0,
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Global Style to hide real cursor */}
            <style jsx global>{`
                @media (min-width: 1024px) {
                    html, body, * {
                        cursor: none !important;
                    }
                    a, button, [role="button"], [data-cursor-hover] {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
}

