import React from 'react';
import { motion } from 'framer-motion';
import { MAIN_CHARACTER, WORLD_DATA } from '../constants';
import BookFrame from './BookFrame';

const CharacterSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-stone-950 py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Ink Wash Effect */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-900/20 mix-blend-multiply transform skew-x-12" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Image Area */}
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-stone-800 p-2 bg-stone-900/50">
               <img 
                src="https://i.postimg.cc/gJWK0zgg/seohwi.jpg" 
                alt="Seo Hwi" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                style={{ filter: 'sepia(20%) contrast(110%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Name Overlay */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 flex items-end">
              <h1 className="text-8xl lg:text-9xl font-black text-stone-200 font-gungsuh tracking-tighter mix-blend-difference drop-shadow-2xl">
                {MAIN_CHARACTER.name.split(' ')[0]}
              </h1>
            </div>
          </motion.div>

          {/* Right: Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 pt-8 lg:pt-0"
          >
            <BookFrame className="p-8 md:p-12 bg-stone-950/80 border-l-0 border-r-0 md:border-l md:border-r border-stone-800">
              
              {/* Profile Header */}
              <div className="flex justify-between items-start border-b border-stone-800 pb-6 mb-8">
                <div className="space-y-2">
                  <span className="inline-block px-2 py-1 bg-stone-800 text-stone-400 text-xs font-serif">신분</span>
                  <p className="text-2xl text-stone-200 font-bold font-gungsuh">{MAIN_CHARACTER.role.split(' / ')[0]}</p>
                  <p className="text-sm text-stone-500 font-serif">前 {MAIN_CHARACTER.role.split(' / ')[1]}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-400 font-serif text-lg">{MAIN_CHARACTER.age}세, {MAIN_CHARACTER.gender}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-stone-400 italic leading-relaxed">
                  "지킬 것이 없다면 검도 무거울 뿐이다."
                </p>
              </div>

              {/* Attributes Layout - Distributed in 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                 {/* Column 1: Appearance */}
                 <div>
                     <h3 className="text-stone-500 font-bold mb-3 font-gungsuh border-b border-stone-800 pb-2 w-full">외형</h3>
                     <p className="text-stone-400 text-base leading-7 font-serif">
                       {MAIN_CHARACTER.appearance.height}.<br/>
                       {MAIN_CHARACTER.appearance.features[1]}.<br/>
                       {MAIN_CHARACTER.appearance.features[2]}.<br/>
                       {MAIN_CHARACTER.appearance.attire}.
                     </p>
                 </div>

                 {/* Column 2: Personality */}
                 <div>
                     <h3 className="text-stone-500 font-bold mb-3 font-gungsuh border-b border-stone-800 pb-2 w-full">성격</h3>
                     <div className="flex flex-wrap gap-2">
                       {MAIN_CHARACTER.personality.outer.map((p,i) => (
                         <span key={i} className="text-stone-300 text-base">· {p}</span>
                         // Re-adding inner thoughts subtly if needed, but keeping removed as per previous instruction.
                       ))}
                     </div>
                 </div>
              </div>

              {/* Likes/Dislikes */}
              <div className="bg-stone-900/50 p-6 border border-stone-800">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-red-900/80 font-bold mb-2 font-gungsuh">호 (好)</h4>
                        <ul className="text-stone-400 text-sm space-y-1 font-serif">
                            {MAIN_CHARACTER.likes.map((l, i) => <li key={i}>- {l}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-stone-600 font-bold mb-2 font-gungsuh">불호 (不)</h4>
                        <ul className="text-stone-500 text-sm space-y-1 font-serif">
                            {MAIN_CHARACTER.dislikes.map((l, i) => <li key={i}>- {l}</li>)}
                        </ul>
                    </div>
                 </div>
              </div>

            </BookFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;