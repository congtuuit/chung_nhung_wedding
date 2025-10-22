import HeroSection from '../components/HeroSection';
import FamilyInfo from '../components/FamilyInfo';
import CalendarSection from '../components/CalendarSection';
import AlbumSection from '../components/AlbumSection';
import MapSection from '../components/MapSection';
import GiftSection from '../components/GiftSection';
import content from '../content.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/images/bg-pattern.png')] bg-cover font-serif">
      <div className="mx-auto max-w-3xl">
        <HeroSection data={content} />
        <FamilyInfo data={content.family} />
        <CalendarSection date={content.weddingDate} timeText={content.timeText} venue={content.venue} />
        <MapSection url={content.venue.mapUrl} />
        <AlbumSection images={content.album} />
        <GiftSection />
      </div>
    </main>
  );
}
