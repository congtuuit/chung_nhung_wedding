'use client';
import { motion } from 'framer-motion';

export default function FamilySection({ data, content }) {
  return (
    <section>
      <div className="text-[#2f3a21 my-10 mt-20 grid grid-cols-2 text-center">
        {/* Nhà trai */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-['SVN-NeusaBold'] text-2xl uppercase"
        >
          <h3>NHÀ TRAI</h3>
          <p className="mt-1">{data.groom.father}</p>
          <p>{data.groom.mother}</p>
        </motion.div>

        {/* Nhà gái */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['SVN-NeusaBold'] text-2xl uppercase"
        >
          <h3>NHÀ GÁI</h3>
          <p className="mt-1">{data.bride.mother}</p>
        </motion.div>

        {/* Địa chỉ */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <p className="font-['SVN-Times'] text-lg">{data.groom.address1}</p>
          <p className="font-['SVN-Times'] text-lg">{data.groom.address2}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-['SVN-Times'] text-lg">{data.bride.address1}</p>
          <p className="font-['SVN-Times'] text-lg">{data.bride.address2}</p>
        </motion.div>
      </div>

      <p className="text-center">Trân Trọng Kính Mời Tham Dự Lễ Thành Hôn Của</p>
      <div className='mt-10 text-center font-["SVN-VeryBerry"] text-5xl'>
        <h3>{content.groomFullName}</h3>
        <p className="mb-1 mt-1">&</p>
        <h3>{content.brideFullName}</h3>
      </div>
      <div className="mt-10 flex justify-center">
        <img src="./assets/line_div.png" width={'65%'} />
      </div>

      <div className="my-10 grid grid-cols-2 items-start justify-items-center gap-8 pl-2 pr-2">
        {/* Cột trái - Chú Rể */}
        <div className="flex flex-col items-center">
          <div
            className="overflow-hidden rounded-[15px] border-2 border-[#c9a96e] shadow-md"
            style={{
              width: '75%',
            }}
          >
            <img src={content.groomPicture} alt="Chú Rể" className="h-auto w-[100%] max-w-[400px] object-contain" />
          </div>
          <div className="mt-2 w-[85%]">
            <img src="/assets/line-x.png" />
          </div>
          <h3 className="mt-2 font-['SVN-Amperzand'] text-3xl">Chú Rể</h3>
        </div>

        {/* Cột phải - Cô Dâu */}
        <div className="flex flex-col items-center">
          <div
            className="overflow-hidden rounded-[15px] border-2 border-[#c9a96e] shadow-md"
            style={{
              width: '75%',
            }}
          >
            <img src={content.bridePicture} alt="Cô Dâu" className="h-auto w-[100%] max-w-[400px] object-contain" />
          </div>
          <div className="mt-2 w-[85%]">
            <img src="/assets/line-x.png" />
          </div>
          <h3 className="mt-2 font-['SVN-Amperzand'] text-3xl">Cô Dâu</h3>
        </div>
      </div>
    </section>
  );
}
