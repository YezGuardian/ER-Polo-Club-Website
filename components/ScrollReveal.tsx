import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    delay = 0
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{ once: true, margin: "0px", amount: 0.2 }}
            transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
