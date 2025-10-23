import ThumbsGallery from './ThumbsGallery';
import FadeAnimation from './FadeAnimation';

export default function AlbumSection({ images }) {
  return (
    <section className="mt-8">
      <div className="m-auto w-[80%] pl-2 pr-5">
        <img src="/assets/line_div3.png" />
      </div>
      <FadeAnimation>
        <h5 className="text-center font-['SVN-Unthrift']" style={{ fontSize: '40px' }}>
          Album hình cưới
        </h5>
      </FadeAnimation>
      
      <div className="w-[100%] pl-5 pr-5">
        <FadeAnimation>
          <ThumbsGallery images={images} />
        </FadeAnimation>
      </div>
    </section>
  );
}
