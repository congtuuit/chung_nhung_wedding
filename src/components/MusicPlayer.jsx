'use client';
import { useState, useRef } from 'react';

export default function MusicPlayer({ url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={url} type="audio/mpeg" />
      </audio>

      <div
        onClick={togglePlay}
        className={`fixed bottom-4 left-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          isPlaying ? 'animate-spin-slow' : ''
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Ảnh icon */}
          <img src="/assets/music.png" alt="Music icon" className="w-100 pointer-events-none h-auto select-none object-contain" />

          {/* Dấu gạch chéo khi tắt nhạc */}
          {!isPlaying && (
            <div
              className="absolute h-[2px] rotate-45 rounded"
              style={{
                background: '#6b6b6b',
                width: 48
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}
