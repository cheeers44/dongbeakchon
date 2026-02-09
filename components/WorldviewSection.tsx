import React from 'react';
import { motion } from 'framer-motion';
import { WORLD_DATA } from '../constants';
import BookFrame from './BookFrame';

const WorldviewSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-stone-950 px-6 py-24 md:px-20">
      <div className="mx-auto max-w-5xl">
        <BookFrame className="py-12 md:py-20 px-4 md:px-12 bg-stone-900/30 backdrop-blur-sm">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-stone-800 pb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-200 font-gungsuh mb-2">
                시대 배경
              </h2>
            </motion.div>
            
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-stone-400 font-serif">{WORLD_DATA.era}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column: Text Description */}
            <div className="space-y-12">
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="relative pl-6 border-l-2 border-red-900/30"
               >
                 <h3 className="text-xl font-bold text-stone-300 mb-4 font-gungsuh">역귀(疫鬼)의 출현</h3>
                 <p className="text-stone-400 leading-8 text-justify font-serif text-base">
                   {WORLD_DATA.threat.origin}에서 시작된 재앙은 순식간에 내륙을 집어삼켰다. 
                   산 자가 죽어 다시 일어나고, 그들을 불태우지 않으면 끝나지 않는 지옥이 도래했다.
                   <br/><br/>
                   <span className="text-stone-200 font-bold bg-red-900/20 px-2 py-1">"물리면 끝이다. 머리를 부수거나 태워라."</span>
                 </p>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="relative pl-6 border-l-2 border-stone-800"
               >
                 <h3 className="text-xl font-bold text-stone-300 mb-4 font-gungsuh">붕괴된 질서</h3>
                 <ul className="space-y-3 text-stone-500 font-serif text-base">
                   {WORLD_DATA.society.map((item, i) => (
                     <li key={i} className="flex items-start">
                       <span className="mr-2 text-stone-700">◆</span> {item}
                     </li>
                   ))}
                 </ul>
               </motion.div>
            </div>

            {/* Right Column: Visual Element / The Village */}
            <div className="relative flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-stone-950 p-8 border border-stone-800 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-stone-800/50" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-800/50" />
                
                <div className="text-center mb-6">
                  <span className="inline-block py-1 px-3 border border-stone-700 text-stone-500 text-xs mb-4">마지막 성역</span>
                  <h3 className="text-3xl font-bold text-stone-200 mb-1 font-gungsuh">{WORLD_DATA.village.name}</h3>
                </div>
                
                <div className="w-full h-[1px] bg-stone-800 mb-6" />
                
                <p className="text-stone-400 font-serif leading-loose text-center px-4">
                  {WORLD_DATA.village.atmosphere}
                  <br/>
                  오직 이곳만이 아직 사람의 온기가 남아있는 곳.
                  <br/>
                  하지만 밤이면 목책 너머로 긁는 소리가 들려온다.
                </p>
              </motion.div>
            </div>

          </div>
        </BookFrame>
      </div>
    </section>
  );
};

export default WorldviewSection;