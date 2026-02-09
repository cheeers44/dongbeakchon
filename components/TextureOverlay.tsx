import React from 'react';

const TextureOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.12] mix-blend-overlay">
      <svg className="h-full w-full">
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)" />
      </svg>
    </div>
  );
};

export default TextureOverlay;