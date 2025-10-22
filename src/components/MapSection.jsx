export default function MapSection({ url, content }) {
  return (
    <section className="my-8 text-center">
      <div className="m-auto mt-2 mt-8 w-[80%] pl-2 pr-5">
        <img src="/assets/line_div2.png" />
      </div>

      <div className="text-center font-['SVN-TimesBold']">
        <p className="mb-4 mt-4 text-3xl uppercase">Địa điểm tổ chức</p>
        <div className="m-auto mt-2 w-[70%] text-2xl">{content.venue.name}</div>
        <div className="m-auto mt-2 w-[35%] font-['SVN-Neusa'] text-lg">{content.venue.address}</div>
      </div>

      <div className="mt-3">
        <a
          style={{
            backgroundColor: '#384b2d',
            color: 'white',
            width: '60%',
          }}
          href={content.venue.openMapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border px-4 py-3 uppercase"
        >
          <b>Xem chỉ đường</b>
        </a>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border pl-2 pr-2">
        <iframe
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src={url}
          className="w-full"
        />
      </div>
    </section>
  );
}
