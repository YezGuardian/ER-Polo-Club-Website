import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    blurStrength?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    delay = 0,
    blurStrength = 10
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
                filter: `blur(${blurStrength}px)`
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for "premium" feel
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
