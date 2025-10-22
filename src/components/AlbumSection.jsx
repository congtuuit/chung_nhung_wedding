export default function AlbumSection({ images }) {
  return (
    <section className="my-8">
      <h5 className="text-center text-lg">Album hình cưới</h5>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`album-${i}`} className="h-40 w-full rounded object-cover" />
        ))}
      </div>
    </section>
  );
}
