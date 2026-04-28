import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
  Star,
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pt-20">
      {/* ═══════════════════════════════════════════════
          BACKGROUND
          ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* warm cream gradients */}
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#E8552E] opacity-[0.10] blur-3xl" />
        <div className="absolute -top-60 right-0 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6C9]/30 via-transparent to-[#F8DED0]/30" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ═══════════════════════════════════════════
              LEFT — TEXT
              ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Trust pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#EADFC8] shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0E6B5E] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E6B5E]" />
              </span>
              <span className="text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#0A5349]">
                Live · Parul University Pilot
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-black text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-tight text-[#1E1812] mb-6">
              Where student talent
              <br />
              becomes{' '}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#E8552E',
                  }}
                >
                  capital.
                </span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,5 Q50,0 100,4 T200,3"
                    stroke="#E8552E"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[16.5px] sm:text-[18px] text-[#4A4038] leading-relaxed mb-3 max-w-[580px]">
              AllyGo is the trust layer for student transactions.
              Post a task, get help from a verified peer, and pay
              only when the work is done — every rupee held safely until you approve.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#857A6C] mb-8 max-w-[560px]">
              From a ₹50 errand to a ₹5,000 project — built for Indian colleges,
              made for the way students actually help each other.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 bg-[#E8552E] hover:bg-[#C5401D] text-white px-7 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-[#E8552E]/25 hover:shadow-2xl hover:shadow-[#E8552E]/35 transition-all"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FDF8EC] text-[#1E1812] px-7 py-4 rounded-xl font-bold text-[15px] border-2 border-[#EADFC8] hover:border-[#1E1812] transition-all"
              >
                See how it works
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#857A6C] font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B5E]" />
                Money held safely
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#B3A895]" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B5E]" />
                Verified students only
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#B3A895]" />
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#0E6B5E]" />
                UPI-first payments
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════
              RIGHT — APP MOCKUP (custom-built, no image)
              ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] mx-auto">

              {/* Decorative glow behind phone */}
              <div className="absolute -inset-12 bg-gradient-to-br from-[#E8552E]/20 via-[#F2874C]/15 to-[#0E6B5E]/15 rounded-full blur-3xl" />

              {/* Floating stat card — top */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 sm:-left-10 z-20 bg-white rounded-2xl shadow-xl border border-[#EADFC8] p-3.5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0E6B5E] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-[#0A5349]">
                    Locked Safely
                  </div>
                  <div className="text-[15px] font-black text-[#1E1812] leading-none mt-0.5">
                    ₹880
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card — bottom */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -right-3 sm:-right-8 z-20 bg-white rounded-2xl shadow-xl border border-[#EADFC8] p-3.5"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-[#E8552E] to-[#F2874C] flex items-center justify-center text-[9px] font-black text-white">P</div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-[#0E6B5E] to-[#2A9D8F] flex items-center justify-center text-[9px] font-black text-white">A</div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-[#8A5A2B] to-[#C08456] flex items-center justify-center text-[9px] font-black text-white">R</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#E8A317] text-[#E8A317]" />
                    ))}
                  </div>
                </div>
                <div className="text-[10.5px] font-bold text-[#1E1812] leading-tight">
                  47 students
                </div>
                <div className="text-[10px] text-[#857A6C] leading-tight">
                  earned this week
                </div>
              </motion.div>

              {/* PHONE MOCKUP */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-[#1E1812] rounded-[42px] p-2 shadow-[0_30px_80px_-15px_rgba(30,24,18,0.4)]"
                style={{ aspectRatio: '9/19' }}
              >
                <div className="bg-[#FBF5E9] rounded-[34px] h-full overflow-hidden relative">

                  {/* status bar */}
                  <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[9px] font-bold text-[#1E1812]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5 items-end">
                        <div className="w-0.5 h-1 bg-[#1E1812] rounded-full" />
                        <div className="w-0.5 h-1.5 bg-[#1E1812] rounded-full" />
                        <div className="w-0.5 h-2 bg-[#1E1812] rounded-full" />
                        <div className="w-0.5 h-2.5 bg-[#1E1812] rounded-full" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* nav */}
                  <div className="flex justify-between items-center px-5 py-3">
                    <div>
                      <div className="text-[9px] text-[#857A6C] font-medium">Hi Aarav 👋</div>
                      <div className="text-[15px] font-black text-[#1E1812] leading-tight">Find help</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E8552E] to-[#F2874C] flex items-center justify-center text-[10px] font-black text-white">A</div>
                  </div>

                  {/* live activity */}
                  <div className="mx-4 mb-3 px-3 py-2 rounded-xl bg-gradient-to-r from-[#EDF7F4] to-[#DFF0ED]/60 border border-[#0E6B5E]/15 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#0E6B5E] opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0E6B5E]" />
                    </span>
                    <div className="text-[8.5px] text-[#0A5349]">
                      <b>3 students</b> nearby just got help
                    </div>
                  </div>

                  {/* TASK CARD 1 — featured */}
                  <div className="mx-4 mb-2.5 bg-white rounded-2xl p-3 border border-[#EADFC8] shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1">
                        <span className="px-1.5 py-0.5 bg-[#FFE7DC] text-[#C5401D] text-[8px] font-bold rounded-md">
                          Design
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#FDF8EC] text-[#857A6C] text-[8px] font-bold rounded-md">
                          1 day
                        </span>
                      </div>
                      <Sparkles className="w-3 h-3 text-[#E8A317]" />
                    </div>
                    <div className="text-[10px] font-bold text-[#1E1812] leading-tight mb-1">
                      Diwali poster — Canva designer
                    </div>
                    <div className="text-[8.5px] text-[#857A6C] leading-snug mb-2">
                      A3 size, festive vibe, English + Hindi text…
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#FDF8EC]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#0E6B5E] to-[#2A9D8F] flex items-center justify-center text-[7px] font-black text-white">R</div>
                        <span className="text-[8.5px] text-[#857A6C] font-semibold">Riya · 4.9★</span>
                      </div>
                      <div className="text-[14px] font-black text-[#1E1812]">
                        ₹800
                      </div>
                    </div>
                  </div>

                  {/* TASK CARD 2 */}
                  <div className="mx-4 mb-2.5 bg-white rounded-2xl p-3 border border-[#EADFC8]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-1.5 py-0.5 bg-[#DFF0ED] text-[#0A5349] text-[8px] font-bold rounded-md">
                        Errand
                      </span>
                      <span className="text-[8px] text-[#B87514] font-bold">⏱ Today 6pm</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#1E1812] leading-tight mb-1.5">
                      Pick up lab report from xerox
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8.5px] text-[#857A6C] font-semibold">Parth · 3 posts</span>
                      <div className="text-[12px] font-black text-[#1E1812]">
                        ₹150
                      </div>
                    </div>
                  </div>

                  {/* TASK CARD 3 */}
                  <div className="mx-4 mb-3 bg-white rounded-2xl p-3 border border-[#EADFC8]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-1.5 py-0.5 bg-[#FFE7DC] text-[#C5401D] text-[8px] font-bold rounded-md">
                        Code
                      </span>
                      <span className="text-[8px] text-[#857A6C] font-semibold">4 days</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#1E1812] leading-tight mb-1.5">
                      Debug React Native build error
                    </div>
                    <div className="text-[12px] font-black text-[#1E1812] text-right">
                      ₹500
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-[#EADFC8] py-2 px-5 flex justify-around">
                    <div className="w-1 h-1 rounded-full bg-[#E8552E]" />
                    <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
                    <div className="w-7 h-7 -mt-3 rounded-full bg-[#E8552E] flex items-center justify-center shadow-md shadow-[#E8552E]/30">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
                    <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Logo strip / "as featured at" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 sm:mt-24 pt-8 border-t border-[#EADFC8]/60"
        >
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#857A6C] text-center mb-5">
            Built for India's student economy
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-[#B3A895]">
            <div className="text-[15px] font-bold">Parul University</div>
            <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
            <div className="text-[15px] font-bold">UPI Native</div>
            <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
            <div className="text-[15px] font-bold">Razorpay Secured</div>
            <div className="w-1 h-1 rounded-full bg-[#B3A895]" />
            <div className="text-[15px] font-bold">Made in India</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
