import React from 'react';
import IntroSection from './components/IntroSection';
import WorldviewSection from './components/WorldviewSection';
import YeokgwiSection from './components/YeokgwiSection';
import CharacterSection from './components/CharacterSection';
import NpcSection from './components/NpcSection';
import TextureOverlay from './components/TextureOverlay';
import Petals from './components/Petals';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-stone-950 text-stone-200 selection:bg-red-900 selection:text-white">
      {/* Global Visual Effects */}
      <TextureOverlay />
      <Petals />
      
      {/* Scrollable Content */}
      <div className="relative z-10">
        <IntroSection />
        <WorldviewSection />
        <YeokgwiSection />
        <CharacterSection />
        <NpcSection />
        
        {/* Footer */}
        <footer className="w-full py-12 text-center text-stone-600 text-xs border-t border-stone-900 bg-stone-950">
          <p className="mb-2 tracking-widest">DONGBAEK CHRONICLE</p>
          <p className="font-serif">Created for Crack</p>
        </footer>
      </div>
    </main>
  );
}

export default App;