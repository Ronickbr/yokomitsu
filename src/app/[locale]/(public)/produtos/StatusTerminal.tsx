"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "ESCANEANDO 22 PAÍSES...",
    "LÓGICA DE ALTA PERFORMANCE: ATIVA",
    "VERIFICAÇÃO DE HARDWARE: OK"
];

export default function StatusTerminal() {
    return (
        <div className="relative flex flex-col gap-2 p-6 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl font-mono text-[10px] tracking-widest leading-relaxed shadow-2xl overflow-hidden min-w-[280px]">
            {/* Target Marker - Top Left */}
            <div className="absolute top-3 left-3 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse shadow-[0_0_8px_#e3000f]" />
                <div className="absolute w-6 h-6 border border-brand-accent/30 rounded-full animate-[ping_3s_linear_infinite]" />
                <div className="absolute w-10 h-10 border border-brand-accent/10 rounded-full" />
            </div>

            <div className="mt-4 space-y-1">
                {lines.map((line, lineIdx) => (
                    <div key={lineIdx} className="flex">
                        <motion.p className="text-brand-accent uppercase">
                            {line.split("").map((char, charIdx) => (
                                <motion.span
                                    key={charIdx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: (lineIdx * 1.5) + (charIdx * 0.03),
                                        duration: 0.01,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {lineIdx === lines.length - 1 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.8,
                                    }}
                                    className="inline-block w-1.5 h-3 bg-brand-accent ml-1 align-middle"
                                />
                            )}
                        </motion.p>
                    </div>
                ))}
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

            {/* Inner Glow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(227,0,15,0.05)] rounded-2xl" />
        </div>
    );
}
