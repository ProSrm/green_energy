import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <motion.div
                className={`hollow-circle ${hovering ? 'scale-150' : ''}`}
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                    transition: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300,
                        mass: 0.5,
                        restDelta: 0.001
                    }
                }}
            />

            <motion.div
                className={`solid-circle ${hovering ? 'scale-155' : ''}`}
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                    transition: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300,
                        mass: 0.5,
                        restDelta: 0.001,
                        delay: 0.009
                    }
                }}
            />
        </>
    );
};

export default CustomCursor;