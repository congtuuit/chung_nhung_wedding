'use client';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import FamilyInfo from '../components/FamilyInfo';
import CalendarSection from '../components/CalendarSection';
import AlbumSection from '../components/AlbumSection';
import MapSection from '../components/MapSection';
import GiftSection from '../components/GiftSection';
import MusicPlayer from '../components/MusicPlayer';
import WeddingLoader from '../components/WeddingLoader';
import content from '../content.json';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);
  const [autoPlayMp3, setAutoPlayMp3] = useState(false);

  useEffect(() => {
    // preload ảnh album
    const preloadImages = async () => {
      const promises = content.album.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );
      await Promise.all(promises);
      setTimeout(() => {
        setLoaderDone(true);
        setAutoPlayMp3(true);
      }, 100);
    };
    preloadImages();
  }, []);

  return (
    <main className="relative min-h-screen bg-cover font-serif">
      <div className="mx-auto" style={{ maxWidth: '500px' }}>
        <HeroSection data={content} startAnimation={loaderDone}/>
        <FamilyInfo data={content.family} content={content} />
        <CalendarSection weddingDate={content.weddingDate} date={content.weddingDateTime} timeText={content.timeText} venue={content.venue} />
        <MapSection content={content} url={content.venue.mapUrl} />
        <AlbumSection images={content.album} />
        <GiftSection content={content} />
        <MusicPlayer url={content.mp3Url} autoPlay={autoPlayMp3}/>
      </div>

      {/* Overlay loader */}
      {isLoading && (
        <WeddingLoader
          startProcessHide={loaderDone}
          onFinish={() => {
            setIsLoading(false);
          }}
        />
      )}
    </main>
  );
}
