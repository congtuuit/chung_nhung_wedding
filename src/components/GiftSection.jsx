'use client';
import { useState } from 'react';

export default function GiftSection({ content }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="my-8 text-center">
      {/* decorative line */}
      <div className="m-auto mb-10 w-[80%] pl-2 pr-5">
        <img src="/assets/line_div4.png" alt="decor line" />
      </div>

      {/* button */}
      <div className="mt-3">
        <button
          onClick={() => setShowQR(true)}
          style={{
            backgroundColor: '#384b2d',
            color: 'white',
            width: '60%',
          }}
          className="mb-10 inline-block rounded-full border border-transparent px-4 py-3 uppercase transition hover:scale-105 hover:bg-[#4a6439]"
        >
          <b>Gửi mừng cưới</b>
        </button>
      </div>

      {/* text */}
      <p className="mt-4 pb-10 font-['SVN-Agency'] text-4xl">Rất hân hạnh được đón tiếp</p>
      <p className="pb-20 font-['SVN-Helga'] text-5xl">Thank you</p>

      {/* popup QR */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowQR(false)}>
          <div
            className="animate-fadeIn relative w-[90%] max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()} // chặn click tắt khi click vào nội dung
          >
            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" onClick={() => setShowQR(false)}>
              ✕
            </button>
            <h2 className="mb-2 pb-3 text-lg font-semibold">Quét mã để gửi mừng cưới</h2>
            <img
              style={{
                minHeight: '200px',
                minWidth: '200px',
              }}
              src={content.bankInfo.image}
              alt="QR Code"
              className="mx-auto"
            />
            <p className="mt-3 text-sm text-gray-500">{content.bankInfo.holderName}</p>
            <p className="text-sm text-gray-500">
              <b>{content.bankInfo.number}</b>
            </p>
          </div>
        </div>
      )}

      {/* animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}
