import FadeAnimation from './FadeAnimation';

export default function MapSection({ url, content }) {
  return (
    <section className="relative py-8 pt-0 text-center">
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: 0,
          zIndex: -1,
          width: '60%',
          transform: 'rotate(30deg)',
        }}
      >
        <img src="/assets/Asset 4.png" />
      </div>

      <div className="m-auto mt-2 mt-8 w-[80%] pl-2 pr-5">
        <img src="/assets/line_div2.png" />
      </div>

      <FadeAnimation>
        <div className="text-center font-['SVN-TimesBold']">
          <p className="mb-4 mt-5 text-3xl uppercase">Địa điểm tổ chức</p>
          <div className="m-auto mt-2 w-[70%] text-2xl">{content.venue.name}</div>
          <div className="m-auto mt-2 w-[35%] font-['SVN-Neusa'] text-lg">{content.venue.address}</div>
        </div>
      </FadeAnimation>

      <FadeAnimation>
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
        <div className="mt-4 overflow-hidden rounded-lg pl-2 pr-2">
          <iframe className='m-auto' height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src={url} width={"90%"} />
        </div>
      </FadeAnimation>
    </section>
  );
}
