import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Petals: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    const count = 15;
    const newPetals = Array.from({ length: count }, (_, i) => i);
    setPetals(newPetals);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 bg-red-900/40 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth + (Math.random() - 0.5) * 200,
            opacity: [0, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", // Irregular petal shape
          }}
        />
      ))}
    </div>
  );
};

export default Petals;