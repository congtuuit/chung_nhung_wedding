export default function MapSection({ url }) {
  return (
    <section className="my-8 text-center">
      <h5 className="text-lg">Địa điểm tổ chức</h5>
      <div className="mt-3">
        <a href={url} target="_blank" rel="noreferrer" className="inline-block rounded-full border px-4 py-2">
          Xem chỉ đường
        </a>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border">
        <iframe src={url} className="h-56 w-full" />
      </div>
    </section>
  );
}
