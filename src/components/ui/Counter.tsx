"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

/**
 * Componente de Contador animado que inicia quando entra no viewport.
 * 
 * @param value O valor final do contador
 * @param duration Duração da animação em segundos
 * @param suffix Sufixo opcional (ex: "+", "k")
 * @param className Estilização adicional
 */
export default function Counter({ value, duration = 2, suffix = "", className = "" }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.floor(value).toLocaleString("pt-BR");
                },
            });

            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return (
        <span className={`${className} tabular-nums`}>
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
}
