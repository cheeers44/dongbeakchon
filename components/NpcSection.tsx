import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NPC_LIST } from '../constants';
import { NpcProfile } from '../types';
import BookFrame from './BookFrame';

const HopaeTag: React.FC<{ npc: NpcProfile; isSelected: boolean; onClick: () => void }> = ({ npc, isSelected, onClick }) => {
  return (
    <motion.button 
      layout
      onClick={onClick}
      className={`w-full text-left py-4 px-6 border-b border-stone-800 transition-all duration-300 group
        ${isSelected ? 'bg-stone-800/50 text-stone-100' : 'hover:bg-stone-900 text-stone-500'}
      `}
    >
      <div className="flex items-center justify-between">
        <span className={`font-gungsuh text-lg ${isSelected ? 'font-bold' : 'font-normal'}`}>
          {npc.name}
        </span>
        <span className="text-xs font-serif opacity-50 tracking-widest group-hover:opacity-100 transition-opacity">
          {npc.role}
        </span>
      </div>
    </motion.button>
  );
};

const NpcSection: React.FC = () => {
  const [selectedNpc, setSelectedNpc] = useState<NpcProfile>(NPC_LIST[0]);

  return (
    <section className="relative w-full bg-stone-950 py-24 px-6 border-t border-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-gungsuh text-stone-200 mb-2">생존자 명부</h2>
          <div className="h-[1px] w-24 bg-stone-700 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-stone-800 bg-stone-950 shadow-2xl">
          
          {/* List Column (Left) */}
          <div className="col-span-1 md:col-span-4 border-r border-stone-800 h-[400px] md:h-[600px] overflow-y-auto custom-scrollbar bg-stone-950">
            {NPC_LIST.map((npc) => (
              <HopaeTag 
                key={npc.name} 
                npc={npc} 
                isSelected={selectedNpc.name === npc.name} 
                onClick={() => setSelectedNpc(npc)} 
              />
            ))}
          </div>

          {/* Detail Column (Right) */}
          <div className="col-span-1 md:col-span-8 relative min-h-[400px] md:h-[600px] bg-[#d6d3ce]">
             <BookFrame className="h-full p-8 md:p-12 flex flex-col justify-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={selectedNpc.name}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.4 }}
                   className="space-y-6 h-full flex flex-col"
                 >
                   {/* Header & Image Area */}
                   <div className="flex justify-between items-start border-b border-stone-800/20 pb-6 gap-4">
                      <div className="flex flex-col justify-end shrink min-w-0">
                        <span className="text-stone-500 font-serif text-sm mb-1">{selectedNpc.role}</span>
                        <h3 className="text-4xl md:text-5xl font-bold text-stone-900 font-gungsuh mb-2 break-keep">{selectedNpc.name}</h3>
                        <span className="text-stone-600 font-serif">{selectedNpc.age}세, {selectedNpc.gender}</span>
                      </div>
                      
                      {/* Image Frame (conditionally rendered) - Increased size & Removed filters */}
                      {selectedNpc.image && (
                        <div className="relative w-32 h-44 md:w-52 md:h-72 shrink-0 rotate-2 shadow-xl border-4 border-white bg-stone-100 transform transition-transform duration-500 hover:scale-105 hover:rotate-0 hover:z-10">
                          {/* Inner border for photo feel */}
                          <div className="absolute inset-0 border border-stone-200 pointer-events-none z-10" />
                          <img 
                            src={selectedNpc.image} 
                            alt={selectedNpc.name} 
                            className="w-full h-full object-cover" 
                          />
                          {/* Tape effect */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-5 bg-stone-300/60 rotate-[-3deg] backdrop-blur-[1px] shadow-sm z-20" />
                        </div>
                      )}
                   </div>

                   {/* Content */}
                   <div className="flex-1 flex flex-col justify-center gap-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-800">
                       <div>
                         <span className="block text-xs text-stone-500 font-bold mb-2">관계</span>
                         <p className="text-stone-900 font-serif text-lg font-bold border-l-2 border-stone-400 pl-3 break-keep">
                           {selectedNpc.relation}
                         </p>
                       </div>
                       
                       <div>
                         <span className="block text-xs text-stone-500 font-bold mb-2">성격</span>
                         <div className="flex flex-wrap gap-2">
                           {selectedNpc.personality.map((p,i) => (
                             <span key={i} className="px-2 py-1 bg-stone-800/5 border border-stone-800/10 text-xs text-stone-700">
                               {p}
                             </span>
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Dialogue Box */}
                   <div className="relative bg-stone-800/5 p-6 rounded-sm mt-auto">
                     <span className="absolute top-4 left-4 text-4xl text-stone-400 opacity-50 font-serif">“</span>
                     <p className="text-xl md:text-2xl text-stone-800 font-serif italic text-center px-4 leading-relaxed break-keep">
                       {selectedNpc.dialogue}
                     </p>
                     <span className="absolute bottom-4 right-4 text-4xl text-stone-400 opacity-50 font-serif">”</span>
                   </div>

                 </motion.div>
               </AnimatePresence>
             </BookFrame>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NpcSection;