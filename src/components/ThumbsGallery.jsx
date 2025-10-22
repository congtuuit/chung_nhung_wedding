'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ThumbsGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto w-full">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="main-swiper overflow-hidden"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Ảnh ${i + 1}`} className="h-80 w-full object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper mt-4 [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Thumbnail ${i + 1}`} className="h-20 w-full cursor-pointer object-cover opacity-80 transition hover:opacity-100" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
