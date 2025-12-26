"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function MagneticFramer({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calculate relative position
    const middleX = (clientX - (left + width / 2)) * strength; // Reduce movement
    const middleY = (clientY - (top + height / 2)) * strength; // Reduce movement

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative", display: "inline-block" }} // Ensure inline-block for proper effect
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
