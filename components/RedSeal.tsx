import React from 'react';

const RedSeal: React.FC<{ text: string, className?: string }> = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center w-16 h-16 border-2 border-red-900 rounded-md opacity-80 mix-blend-multiply ${className}`}>
      <div className="absolute inset-1 border border-red-900/50 rounded-sm" />
      <span className="font-serif-kr text-red-900 font-bold text-lg leading-none text-center whitespace-pre-wrap select-none transform rotate-[-2deg]">
        {text}
      </span>
    </div>
  );
};

export default RedSeal;