import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: TEXT & BUTTONS (with updated links) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6B00]/10 to-[#48B2B7]/10 px-4 py-2 rounded-full mb-6 border border-[#FF6B00]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span className="text-sm font-semibold text-gray-700">Early Stage Startup</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight">
              Learn. Earn.{' '}
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#48B2B7] bg-clip-text text-transparent">
                Live Better.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-semibold">
              Where Student Talent Becomes Capital.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The student-first ecosystem where your peers are your biggest allies. Combine learning,
              earning, and campus services into one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/X334gcNumnrbJ3MT8"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FF6B00] text-white px-8 py-4 rounded-xl hover:bg-[#FF6B00]/90 transition-all font-bold text-lg shadow-2xl shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/40 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Join Pilot Program</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://forms.gle/n2hEUBK3oVXgNjn18"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-black px-8 py-4 rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all font-bold text-lg flex items-center justify-center space-x-2"
              >
                <span>Apply as Intern</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 2D IMAGE (Perfectly positioned) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* The 2D image - adjust filename in src if needed */}
            <motion.img 
              src="/hero-2d-image.png" 
              alt="Students collaborating and smiling" 
              className="max-w-[90%] lg:max-w-full h-auto object-contain rounded-3xl shadow-2xl border border-gray-100"
              animate={{
                y: [0, -10, 0], // Subtle floating animation
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Floating stat box - simplified with just a count */}
            <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:left-0 bg-white p-4 lg:p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-3 z-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold">+50</div>
              </div>
              <p className="text-sm lg:text-base font-bold text-gray-800">Students joined<br/><span className="text-[#48B2B7] font-normal">this week</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;