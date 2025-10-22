export default function HeroSection({ data }) {
  const date = new Date(data.weddingDate);
  const formatted = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);

  return (
    <section className="section first py-8 text-center">
      <h2 className="text-3xl md:text-4xl">Save The Date</h2>
      <h1 className="mt-4 text-4xl md:text-6xl title">
        <span>{data.groom}</span> <span>&</span> <span>{data.bride}</span>
      </h1>
      <p className="mt-2 text-lg">
        {formatted} — {data.timeText}
      </p>
      <div className="frame image mt-6 overflow-hidden rounded-xl">
        <img
          src={data.heroImage}
          alt="Couple"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
}
