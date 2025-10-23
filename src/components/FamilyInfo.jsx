'use client';
import { motion } from 'framer-motion';
import FadeAnimation from './FadeAnimation';

export default function FamilySection({ data, content }) {
  return (
    <section className="position-relative" style={{}}>
      <div
        style={{
          position: 'absolute',
          width: '95%',
          left: -42,
          zIndex: -1,
        }}
      >
        <img src="./assets/Asset 9.png" />
      </div>
      <div
        className="family-line"
        style={{
          position: 'absolute',
          width: '4px',
          top: 15,
          left: 20,
          zIndex: -1,
        }}
      >
        <img src="./assets/golden-line/Asset 8.png" />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '50%',
          top: 30,
          left: 5,
          zIndex: -1,
        }}
      >
        <img src="./assets/golden-line/Asset 9.png" />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '20%',
          top: -40,
          right: 30,
          zIndex: -1,
          transform: 'rotate(-100deg) scaleX(-1)',
        }}
      >
        <img src="./assets/Asset 2.png" />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '50%',
          bottom: -10,
          right: 0,
          zIndex: -1,
          transform: 'scaleX(-1)',
        }}
      >
        <img src="./assets/Asset 7.png" />
      </div>
      <div
        className="brig-bg"
        style={{
          position: 'absolute',
          width: '50%',
          bottom: -240,
          right: 0,
          zIndex: -1,
          transform: 'scaleX(-1) scaleY(-1)',
        }}
      >
        <img src="./assets/Asset 7.png" />
      </div>
      <div className="grid grid-cols-2 pt-16 text-center">
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
      <FadeAnimation>
        <p className="pt-10 text-center">Trân Trọng Kính Mời Tham Dự Lễ Thành Hôn Của</p>
        <div className='mt-10 text-center font-["SVN-VeryBerry"] text-5xl'>
          <h3>{content.groomFullName}</h3>
          <p className="mb-1 mt-1">&</p>
          <h3>{content.brideFullName}</h3>
        </div>
        <div className="mt-10 flex justify-center">
          <img src="./assets/line_div.png" width={'65%'} />
        </div>
      </FadeAnimation>
      <div className="my-8 grid grid-cols-2 items-start justify-items-center pl-2 pr-2">
        {/* Cột trái - Chú Rể */}

        <FadeAnimation>
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-[15px] border-2 border-[#c9a96e] shadow-md"
              style={{
                width: '80%',
              }}
            >
              <img src={content.groomPicture} alt="Chú Rể" className="h-auto w-[100%] max-w-[400px] object-contain" />
            </div>
            <div className="mt-2 w-[85%]">
              <img src="./assets/line-x.png" />
            </div>
            <h3 className="mt-2 font-['SVN-Amperzand'] text-3xl">Chú Rể</h3>
          </div>
        </FadeAnimation>

        {/* Cột phải - Cô Dâu */}
        <FadeAnimation>
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-[15px] border-2 border-[#c9a96e] shadow-md"
              style={{
                width: '80%',
              }}
            >
              <img src={content.bridePicture} alt="Cô Dâu" className="h-auto w-[100%] max-w-[400px] object-contain" />
            </div>
            <div className="mt-2 w-[85%]">
              <img src="./assets/line-x.png" />
            </div>
            <h3 className="mt-2 font-['SVN-Amperzand'] text-3xl">Cô Dâu</h3>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
}
