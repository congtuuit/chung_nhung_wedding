
import ThumbsGallery from "./ThumbsGallery"

export default function AlbumSection({ images }) {
  return (
    <section className="my-8">
      <div className="m-auto w-[80%] pl-2 pr-5">
        <img src="/assets/line_div3.png" />
      </div>
      <h5 className="mb-5 text-center font-['SVN-Unthrift']" style={{ fontSize: '40px' }}>
        Album hình cưới
      </h5>
      
      <div className="w-[100%] pl-5 pr-5">
        <ThumbsGallery images={images}/>
      </div>

    </section>
  );
}
