"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function Reveal({ children, width = "fit-content", height = "fit-content", delay = 0.2, direction = "up", className = "" }: RevealProps) {
    const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    };

    return (
        <div className={className} style={{ position: "relative", width, height }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...directions[direction] },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.17, 0.55, 0.55, 1] }}
                className={height === "100%" ? "h-full" : ""}
            >
                {children}
            </motion.div>
        </div>
    );
}
