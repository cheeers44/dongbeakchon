import React from 'react';

interface BookFrameProps {
  children: React.ReactNode;
  className?: string;
  withBinding?: boolean;
}

const BookFrame: React.FC<BookFrameProps> = ({ children, className = "", withBinding = false }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Traditional Double Line Border (Top/Bottom) */}
      <div className="absolute top-0 left-0 right-0 h-1 border-t border-b border-stone-800/60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 border-t border-b border-stone-800/60" />
      
      {/* Inner Content Area */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Binding Holes Visuals (Right side usually for traditional books read right-to-left, 
          but for scroll design we can place them decoratively) */}
      {withBinding && (
        <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-12 pointer-events-none opacity-40">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-3 h-3 rounded-full border border-stone-600 bg-stone-900" />
           ))}
           <div className="absolute top-12 bottom-12 right-[5px] w-[1px] bg-stone-700" />
        </div>
      )}
    </div>
  );
};

export default BookFrame;