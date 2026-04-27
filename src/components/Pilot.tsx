import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Star } from 'lucide-react';

const Pilot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pilot" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-[#48B2B7]/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#48B2B7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Star className="w-4 h-4 text-[#FF6B00]" fill="#FF6B00" />
            <span className="text-sm font-semibold text-white">Limited Spots Available</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            We're launching in select colleges.
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            AllyGo is currently in early-stage development. Join our exclusive pilot program to get
            early access, shape the platform, and become a founding member of your campus ecosystem.
          </p>

          {/* UPDATED BUTTON: Now an anchor link to your form */}
          <a 
            href="https://forms.gle/X334gcNumnrbJ3MT8"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#FF6B00] text-white px-10 py-5 rounded-xl hover:bg-[#FF6B00]/90 transition-all font-bold text-lg shadow-2xl shadow-[#FF6B00]/50 hover:shadow-[#FF6B00]/60 hover:scale-105 inline-flex items-center space-x-3"
          >
            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <span>Secure My Spot</span>
          </a>

          <p className="mt-6 text-sm text-gray-400">
            Be among the first to experience the future of campus collaboration
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pilot;