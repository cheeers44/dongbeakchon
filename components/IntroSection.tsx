import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-stone-950 text-stone-200">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/6QZvvXpG/ma-eul.jpg')] opacity-25 bg-cover bg-center filter grayscale brightness-75" />
      
      {/* Horizontal Layout */}
      <div className="z-10 flex flex-col items-center justify-center gap-8 md:gap-12 relative p-8 text-center border-y-2 border-stone-800/50 py-20 bg-stone-900/20 backdrop-blur-sm">
        
        {/* Main Title - Horizontal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-widest text-stone-200 font-gungsuh leading-tight drop-shadow-2xl">
            동백촌
          </h1>
          <div className="w-24 h-1 bg-red-900/50 my-6" />
        </motion.div>

        {/* Subtitle / Metadata */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="flex flex-col items-center gap-6"
        >
          <p className="text-xl md:text-3xl text-stone-400 tracking-[0.5em] font-serif uppercase">
            역귀가 창궐한 조선
          </p>
          
          {/* Divider line instead of Seal */}
          <div className="w-16 h-[1px] bg-stone-700 mt-4 opacity-50" />
        </motion.div>
        
        {/* Author/Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-stone-500 text-sm md:text-base tracking-widest font-serif mt-4"
        >
          생존자들의 마을
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 z-10 flex flex-col items-center"
      >
        <span className="text-xs tracking-widest text-stone-600 mb-2 font-serif">아래로</span>
        <div className="h-12 w-[1px] bg-stone-600" />
      </motion.div>
    </section>
  );
};

export default IntroSection;