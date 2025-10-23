'use client';
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ url, autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // ✅ đánh dấu đã click lần đầu
  const audioRef = useRef(null);

  // Auto play nếu được cho phép
  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true); // ✅ xem như đã play rồi
          })
          .catch(() => {
            console.log('Autoplay bị chặn — chờ người dùng tương tác');
          });
      }
    }
  }, [autoPlay]);

  // Bắt gesture lần đầu nếu chưa play
  useEffect(() => {
    if (hasInteracted) return; // ✅ đã phát rồi thì không cần nữa

    const handleFirstGesture = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true); // ✅ sau lần này sẽ ngừng lắng nghe
            window.removeEventListener('click', handleFirstGesture);
            window.removeEventListener('touchstart', handleFirstGesture);
          })
          .catch((err) => console.log('Play error:', err));
      }
    };

    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('touchstart', handleFirstGesture);

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, [isPlaying, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={url} type="audio/mpeg" />
      </audio>

      <div
        onClick={togglePlay}
        className={`fixed bottom-4 left-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          isPlaying ? 'animate-spin-slow' : ''
        }`}
      >
        <div className="relative flex items-center justify-center">
          <img width={55} height={'auto'} src="./assets/music.png" alt="Music icon" className="pointer-events-none select-none object-contain" />
          {!isPlaying && <div className="absolute h-[2px] rotate-45 rounded" style={{ background: '#6b6b6b', width: 48 }}></div>}
        </div>
      </div>
    </>
  );
}
