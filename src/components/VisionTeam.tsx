import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart } from 'lucide-react';

const VisionTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-black text-black mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a trusted ecosystem where every student has an ally to go to.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-black text-black mb-6">Our Team</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built by students, for students. We are a passionate, student-led startup dedicated to
              improving campus life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionTeam;
