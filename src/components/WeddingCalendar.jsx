import React from 'react';
import dayjs from 'dayjs';

export default function WeddingCalendar({ date }) {
  const selectedDate = dayjs(date);
  const year = selectedDate.year();
  const month = selectedDate.month(); // 0-based
  const selectedDay = selectedDate.date();

  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = startOfMonth.endOf('month');
  const totalDays = endOfMonth.date();

  // dayjs().day() => 0 = CN, 1 = T2, ... => cần dịch sang lưới bắt đầu từ T2
  const startDay0Based = startOfMonth.day(); // 0..6 (CN..T7)
  const startDay = (startDay0Based + 6) % 7; // đổi sang 0..6 với 0 = T2

  // tạo danh sách ngày (null = ô trống đầu tháng)
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(d);

  const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  return (
    <div className="inline-block rounded-md border border-[#e5bc6f] bg-white p-4 font-['SVN-Neusa']">
      {/* tiêu đề thứ */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-black">
        {weekdays.map((w, i) => (
          <div key={i}>{w}</div>
        ))}
      </div>

      {/* ngày trong tháng */}
      <div className="mt-2 grid grid-cols-7 gap-2 text-center text-lg font-medium">
        {days.map((d, i) => {
          const isSelected = d === selectedDay;
          return (
            <div key={i} className="relative flex h-6 w-11 items-center justify-center">
              {d ? (
                isSelected ? (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      className="animate-zoomInOut zoom-big absolute h-10 w-10 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 21s-6.5-4.35-9.33-8.16C.84 9.8 2.26 5 6.12 5a4.5 4.5 0 0 1 3.88 2.13A4.5 4.5 0 0 1 13.88 5c3.86 0 5.28 4.8 3.45 7.84C18.5 16.65 12 21 12 21z" />
                    </svg>
                    <span className="relative z-10 font-bold text-red-600">{d}</span>
                  </>
                ) : (
                  <span className="text-black">{d}</span>
                )
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
