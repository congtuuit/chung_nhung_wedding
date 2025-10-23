'use client';
import { useState, useEffect } from 'react';

export default function WeddingLoader({ startProcessHide, onFinish }) {
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(true); // quản lý hiển thị loader

  useEffect(() => {
    if (startProcessHide) {
      setClosing(true);
    }
  }, [startProcessHide]);

  // Khi animation kết thúc, ẩn loader hoàn toàn
  const handleAnimationEnd = (e) => {
    if (e.target.classList.contains('right-half') && closing) {
      setVisible(false); // ẩn loader background
      if (onFinish) onFinish(); // thông báo Home hiển thị nội dung
    }
  };

  if (!visible) return null; // loader đã ẩn → render nội dung phía sau

  return (
    <div className="loader-background">
      <div
        style={{
          zIndex: 110,
        }}
        className="fixed inset-0 flex h-screen w-full items-center justify-center"
      >
        <div className="relative flex flex-col items-center">
          {!closing && (
            <div>
              <div className="heart-loader m-auto"></div>
              <p className="mt-4 text-3xl text-pink-600" style={{ fontFamily: "'SVN-Helga', serif" }}>
                Hân hạnh chào đón...
              </p>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          zIndex: 100,
        }}
        className={`screen-half left-half relative ${closing ? 'animate-left-close' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <img
          style={{
            width: '80px',
            top: '42%',
            height: 'auto',
            right: '-35px',
            opacity: closing ? 1 : 0, // <-- chỉ hiện khi closing = true
            transition: 'opacity 0.5s ease', // <-- thêm hiệu ứng mượt
          }}
          className="absolute"
          src="./assets/mark.png"
          alt=""
        />
      </div>
      <div className={`screen-half right-half ${closing ? 'animate-right-close' : ''}`} onAnimationEnd={handleAnimationEnd}></div>
    </div>
  );
}
