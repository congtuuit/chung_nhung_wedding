'use client';

import { motion } from 'framer-motion';

export default function HeroSection({ data }) {
  const date = new Date(data.weddingDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return (
    <section className="md-px-6 relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center font-[Playfair_Display]">
      {/* Nội dung text phía trên */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
        style={{ width: '85%' }}
      >
        {/* SAVE THE DATE */}
        <p className="mb-8 mt-10 font-['SVN-Desire'] text-3xl">Save The Date</p>

        {/* Tên cô dâu & chú rể */}
        <h1 className="text-left font-['SVN-VeryBerry'] text-5xl leading-tight">{data.groom}</h1>
        <p className="mb-1 mt-1 font-['SVN-VeryBerry'] text-4xl">&</p>
        <h1 className="text-right font-['SVN-VeryBerry'] text-5xl leading-tight">{data.bride}</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10 max-w-3xl">
        {/* Ngày giờ */}
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

      <div className="relative mt-5 flex w-full justify-center">
        <div
          style={{
            width: '80%',
          }}
          className="relative max-w-md overflow-hidden rounded-[44px] border-2 border-[#c9a96e] shadow-md md:max-w-lg lg:max-w-xl"
        >
          <img
            style={{
              height: 500,
            }}
            src={data.heroImage}
            alt="Ảnh cưới"
            className="h-auto w-full rounded-[40px] object-cover"
          />
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#fdfaf5] to-transparent"></div> */}
    </section>
  );
}
