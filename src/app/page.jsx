import HeroSection from '../components/HeroSection';
import FamilyInfo from '../components/FamilyInfo';
import CalendarSection from '../components/CalendarSection';
import AlbumSection from '../components/AlbumSection';
import MapSection from '../components/MapSection';
import GiftSection from '../components/GiftSection';
import content from '../content.json';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/images/bg-pattern.png')] bg-cover font-serif">
      <div
        className="mx-auto max-w-3xl"
        style={{
          maxWidth: '500px',
        }}
      >
        <HeroSection data={content} />
        <FamilyInfo data={content.family} content={content} />
        <CalendarSection weddingDate={content.weddingDate} date={content.weddingDateTime} timeText={content.timeText} venue={content.venue} />
        <MapSection content={content} url={content.venue.mapUrl} />
        <AlbumSection images={content.album} />
        <GiftSection content={content}/>
        <MusicPlayer url={content.mp3Url}/>
      </div>
    </main>
  );
}
