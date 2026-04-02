"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltProps {
    children: ReactNode;
    className?: string;
}

export default function Tilt({ children, className = "" }: TiltProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className={`relative ${className}`}
        >
            <div
                className="h-full w-full"
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </motion.div>
    );
}
