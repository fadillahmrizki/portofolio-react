import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
    // Menentukan arah posisi awal animasi
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: '-40px' }} // Animasi hanya berjalan 1x saat di-scroll
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Kurva transisi murni yang sangat halus
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}