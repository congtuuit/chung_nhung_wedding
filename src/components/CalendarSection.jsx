export default function CalendarSection({ date, timeText, venue }) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return (
    <section className="my-8 text-center">
      <h4 className="text-xl">Tiệc mừng lễ thành hôn</h4>
      <div className="mt-4 inline-block rounded-lg border p-4">
        <div className="text-2xl font-bold">
          {day} / {month} / {year}
        </div>
        <div className="mt-2">{timeText}</div>
        <div className="mt-2">{venue.name}</div>
        <div className="mt-1 text-sm">{venue.address}</div>
      </div>
    </section>
  );
}
