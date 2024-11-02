"use client";

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Github } from 'lucide-react';

// Move the keyframe animations to a CSS module or add them to your global CSS
const animationStyles = {
  shake: {
    animation: 'shake 0.5s ease-in-out',
  },
  float: {
    animation: 'float 1s ease-out forwards',
  },
};

const InteractiveElement = ({ children }) => {
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [scale, setScale] = useState(1);
  const [isShaking, setIsShaking] = useState(false);

  const messages = [
    { text: "Awesome!", emoji: "🎉" },
    { text: "Cool!", emoji: "✨" },
    { text: "Amazing!", emoji: "🌟" },
    { text: "Wow!", emoji: "💫" }
  ];

  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage.text);
    setBackgroundColor(`hsl(${Math.random() * 360}, 70%, 95%)`);
    setScale(0.9);
    setTimeout(() => setScale(1), 100);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        <div
          onClick={handleClick}
          className={`inline-block cursor-pointer transition-all duration-200`}
          style={{
            transform: `scale(${scale})`,
            backgroundColor,
            padding: '8px',
            borderRadius: '8px',
            ...(isShaking ? animationStyles.shake : {})
          }}
        >
          {children}
        </div>
        {message && (
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-xl font-bold"
            style={animationStyles.float}
          >
            {message}
          </div>
        )}
      </div>

      <footer className="w-full max-w-md mx-auto text-center">
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px" />
        </div>
        
        <div className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Made with ❤️ by Lazarus
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://github.com/govindhansv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="text-sm">@govindhansv</span>
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/noobvp69" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">@noobvp69</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveElement;