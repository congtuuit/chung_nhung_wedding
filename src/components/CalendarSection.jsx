import WeddingCalendar from './WeddingCalendar';

export default function CalendarSection({ weddingDate, date }) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return (
    <section className="">
      <div className="flex pl-5">
        <h4 className="font-['SVN-NeusaBold'] text-2xl uppercase">Tiệc mừng lễ thành hôn</h4>
        <div
          className="m-auto w-[52%] pl-2 pr-5"
          style={{
            marginTop: '16px',
          }}
        >
          <img src="/assets/line-x.png" />
        </div>
      </div>

      <div className="mt-4 inline-block w-[100%] p-4 text-center">
        <div className="text-2xl font-bold uppercase">{weddingDate}</div>
        <div className="calendar mt-5">
          <WeddingCalendar date={date} />
        </div>
      </div>
    </section>
  );
}
