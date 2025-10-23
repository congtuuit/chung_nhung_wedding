'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroSection({ data, startAnimation }) {
  const fadeUp = useAnimation();
  const imageAnim = useAnimation();

  // Khi startAnimation từ cha bật lên → bắt đầu animation
  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => {
        fadeUp.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1.3, ease: 'easeOut' },
        });

        imageAnim.start({
          opacity: 1,
          transition: { duration: 1.5, ease: 'easeOut', delay: 0.4 },
        });
      }, 100);
    }
  }, [startAnimation, fadeUp, imageAnim]);

  const date = new Date(data.weddingDateTime);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: "1015px"
      }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-10 text-center font-[Playfair_Display]"
    >
      {/* Các hình nền trang trí */}
      <div style={{ position: 'absolute', opacity: 0.7, left: '-80px', width: '30%', top: 0 }}>
        <img src="/assets/Asset 10.png" />
      </div>
      <div style={{ position: 'absolute', opacity: 0.7, width: '30%', top: 0, left: '-50px' }}>
        <img src="/assets/Asset 11.png" />
      </div>
      <div style={{ position: 'absolute', top: '-25px', right: 0, opacity: 0.7 }}>
        <img src="/assets/Asset 6.png" />
      </div>
      <div style={{ position: 'absolute', opacity: 0.7, width: '30%', top: 0, right: '-35px' }}>
        <img src="/assets/golden-line/Asset 3.png" />
      </div>
      <div style={{ position: 'absolute', opacity: 0.7, width: '20%', top: 0, right: '-45px' }}>
        <img src="/assets/golden-line/Asset 2.png" />
      </div>
      <div style={{ position: 'absolute', top: '-25px', left: '-85px', width: '93%', opacity: 0.7 }}>
        <img src="/assets/Asset 3.png" />
      </div>
      <div
        style={{
          position: 'absolute',
          left: -54,
          bottom: -1,
          zIndex: -1,
          width: '100%',
          transform: 'scaleY(-1)',
        }}
      >
        <img src="/assets/Asset 9.png" />
      </div>

      <div
        style={{
          minHeight: '460px',
        }}
      >
        {/* Nội dung chữ chính */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={fadeUp} className="relative z-10" style={{ width: '85%' }}>
          <p className="mb-8 mt-16 font-['SVN-Desire'] text-4xl">Save The Date</p>

          <h1 className="text-left font-['SVN-VeryBerry'] text-5xl leading-tight">{data.groom}</h1>
          <p className="mb-1 mt-1 font-['SVN-VeryBerry'] text-4xl">&</p>
          <h1 className="text-right font-['SVN-VeryBerry'] text-5xl leading-tight">{data.bride}</h1>
        </motion.div>

        {/* Ngày giờ */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={fadeUp} className="relative z-10 max-w-3xl pb-5">
          <div className="mt-8 text-center font-['SVN-AbrilFatface']">
            <div className="flex items-start justify-center gap-6 md:gap-10">
              <div className="flex flex-col items-end">
                <p className="text-3xl font-bold leading-none">{data.timeText}</p>
                <p className="mt-2 text-3xl font-bold leading-none">THỨ 7</p>
              </div>
              <div className="w-[3px] bg-[#2f3a21]" style={{ height: '70px' }}></div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-start">
                  <p className="text-6xl font-bold">
                    {day}.{month}
                  </p>
                  <div className="ml-2 flex flex-col text-4xl font-bold leading-tight" style={{ marginTop: '-15px' }}>
                    <span>{String(year).slice(0, 2)}</span>
                    <span>{String(year).slice(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-1 font-[SVN-Desire] text-3xl text-[#2f3a21]">(Tức Ngày 19 Tháng 9 Năm Ất Tỵ)</p>
          </div>
        </motion.div>
      </div>

      {/* Ảnh cưới */}
      <div className="relative flex w-full justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageAnim}
          style={{ width: '80%' }}
          className="relative max-w-md overflow-hidden rounded-[44px] border-2 border-[#c9a96e] shadow-md md:max-w-lg lg:max-w-xl"
        >
          <motion.img
            style={{ height: 500 }}
            src={data.heroImage}
            alt="Ảnh cưới"
            className="h-auto w-full rounded-[40px] object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </motion.div>

        <div style={{ position: 'absolute', bottom: -20, right: 0, width: '35%' }}>
          <img src="/assets/Asset 4.png" />
        </div>
      </div>
    </section>
  );
}
