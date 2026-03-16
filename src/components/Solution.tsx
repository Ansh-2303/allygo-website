import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-2xl mb-8">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
            Meet AllyGo: Your Campus Sidekick.
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are bridging the gap. AllyGo connects you with trusted peers to collaborate, support
            each other, and reduce academic stress.{' '}
            <span className="text-[#FF6B00] font-semibold">Students helping students.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
