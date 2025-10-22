'use client';
import { motion } from 'framer-motion';

export default function FamilySection({ data }) {
  return (
    <section>
      <div className="my-16 grid grid-cols-2 gap-6 text-center font-['SVN-TimesNewRoman'] text-[#2f3a21] md:gap-10 mb-7">
        {/* Nhà trai */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-['SVN-AbrilFatface'] uppercase"
        >
          <h3 className="">NHÀ TRAI</h3>
          <p className="mt-2">{data.groom.father}</p>
          <p className="">{data.groom.mother}</p>
        </motion.div>

        {/* Nhà gái */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['SVN-AbrilFatface'] uppercase"
        >
          <h3 className="mt-2">NHÀ GÁI</h3>
          <p className="">{data.bride.mother}</p>
        </motion.div>

        {/* Địa chỉ */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg">{data.groom.address}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm leading-relaxed sm:text-base md:text-lg">{data.bride.address}</p>
        </motion.div>
      </div>

      <p className="text-center">Trân Trọng Kính Mời Tham Dự Lễ Thành Hôn Của</p>
    </section>
  );
}
