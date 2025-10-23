'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ThumbsGallery({ images = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Swiper
        loop
        spaceBetween={10}
        preloadImages={false}
        watchSlidesProgress
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="main-swiper overflow-hidden rounded-lg"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-80 w-full bg-gray-100">
              <Image
                src={src}
                alt={`Ảnh ${i + 1}`}
                fill
                className="object-contain"
                loading={i === 0 ? 'eager' : 'lazy'}
                placeholder="blur"
                blurDataURL="/assets/placeholder-blur.webp"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper mt-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-20 w-full cursor-pointer rounded-md overflow-hidden border border-gray-200 transition hover:border-gray-400">
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover opacity-80 transition hover:opacity-100"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
