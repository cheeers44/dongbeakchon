import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const YeokgwiSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const traits = [
    {
      title: "기이한 신체 (奇)",
      desc: "관절이 뒤틀리고 뼈가 튀어나온다. 인간의 한계를 넘은 속도로 질주하며, 고통을 느끼지 못한다.",
      delay: 0.1
    },
    {
      title: "피의 갈증 (渴)",
      desc: "산 자의 숨소리와 피 냄새를 십 리 밖에서도 맡는다. 한 번 포착된 먹잇감은 끝까지 쫓는다.",
      delay: 0.2
    },
    {
      title: "불사의 저주 (呪)",
      desc: "심장이 멈춰도 움직인다. 오직 머리를 부수거나 불에 태워야만 그 끔찍한 숨을 끊을 수 있다.",
      delay: 0.3
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-stone-950 overflow-hidden flex flex-col justify-center py-24">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/v84tQpWY/jemog-eul-iblyeoghaejuseyo-001-(2).png')] bg-cover bg-center opacity-20 mix-blend-luminosity scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-red-950/20 to-stone-950" />
        {/* Random Red Flashes/Noise could go here, but keeping it subtle for performance */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header: Aggressive Entrance */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <h2 className="text-8xl md:text-9xl font-black text-stone-200 font-gungsuh tracking-widest z-10 relative text-center">
              疫鬼
            </h2>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-red-700 blur-sm font-gungsuh mix-blend-screen select-none w-full text-center"
            >
              역귀
            </motion.span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-red-500 font-serif text-lg md:text-xl tracking-[0.5em] font-bold"
          >
            살아있는 재앙
          </motion.p>
        </div>

        {/* Dynamic Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 100, 
                rotate: index % 2 === 0 ? -5 : 5 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: 0 
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: trait.delay, 
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(69, 10, 10, 0.3)" }}
              className="group relative border border-stone-800 bg-stone-900/60 backdrop-blur-sm p-8 flex flex-col justify-between overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300" />
              
              {/* Decorative Line */}
              <div className="w-12 h-1 bg-red-800 mb-6 group-hover:w-full transition-all duration-500 ease-out" />

              <div>
                <h3 className="text-3xl font-bold text-stone-200 mb-4 font-gungsuh">
                  {trait.title}
                </h3>
                <p className="text-stone-400 font-serif leading-relaxed text-lg">
                  {trait.desc}
                </p>
              </div>

              {/* Watermark Character */}
              <div className="absolute -bottom-4 -right-4 text-8xl text-stone-800/30 font-gungsuh select-none pointer-events-none group-hover:text-red-900/20 transition-colors">
                {trait.title.slice(-2, -1)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 text-center border-t border-stone-800 pt-12"
        >
          <p className="text-stone-500 font-serif text-sm md:text-base leading-loose">
            "해가 지면 문을 걸어 잠그고 숨을 죽여라.<br/>
            놈들은 <span className="text-red-500 font-bold">소리</span>를 듣고 온다."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default YeokgwiSection;