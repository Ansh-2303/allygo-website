import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Wallet,
  Users,
  Star,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Lock,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Money held safely',
    desc: 'Every payment is locked the moment a task starts — released only when YOU approve the work.',
  },
  {
    icon: Users,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Verified students only',
    desc: 'Phone + college email verification. Real names, real campuses, real accountability.',
  },
  {
    icon: Star,
    iconBg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    title: 'Reputation that compounds',
    desc: '5-star ratings, completed task counts, and portfolios — every transaction builds your campus credibility.',
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: '24-hour dispute window',
    desc: 'If something goes wrong, raise a dispute and our team resolves it within a day. No more "your word vs theirs."',
  },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="solution"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          BACKGROUND
          ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#0E6B5E] opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.07] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10" ref={ref}>

        {/* ═══════════════════════════════════════════
            HEADING
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF0ED] border border-[#0E6B5E]/15 mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B5E]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0A5349]">
              The Solution
            </span>
          </div>

          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-[#1E1812] mb-6 max-w-4xl mx-auto">
            One trust layer.
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#E8552E',
                }}
              >
                Every transaction
              </span>{' '}
              protected.
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
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#4A4038] max-w-2xl mx-auto leading-relaxed">
            AllyGo isn't another social network or freelance platform. We're the trust layer
            that sits between two students and one transaction — the thing that makes peer-to-peer
            payments actually safe.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            HERO VISUAL — Trust flow diagram
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mb-16 sm:mb-20"
        >
          <div className="relative bg-white rounded-3xl border border-[#EADFC8] shadow-[0_30px_60px_-20px_rgba(30,24,18,0.15)] p-6 sm:p-10 lg:p-14 overflow-hidden">

            {/* corner glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FFE7DC] opacity-50 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#DFF0ED] opacity-50 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 items-center">

              {/* SEEKER */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8552E] to-[#F2874C] rounded-3xl shadow-xl shadow-[#E8552E]/25 rotate-3" />
                    <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center -rotate-3 border border-[#EADFC8]">
                      <span className="text-[40px] sm:text-[48px] font-black text-[#E8552E]">A</span>
                    </div>
                  </div>
                  <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-1">
                    Seeker
                  </div>
                  <div className="text-[15px] sm:text-[17px] font-black text-[#1E1812]">
                    Aarav posts a task
                  </div>
                  <div className="text-[12.5px] text-[#857A6C] mt-1 font-medium">
                    "Need a poster designed for ₹800"
                  </div>
                </div>
              </motion.div>

              {/* MIDDLE — TRUST LAYER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative flex flex-col items-center"
              >
                {/* Connecting lines */}
                <svg
                  className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full h-12 -z-10"
                  viewBox="0 0 400 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 10 20 Q 100 -10 200 20 Q 300 50 390 20"
                    stroke="#E8552E"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>

                <div className="relative bg-gradient-to-br from-[#0E6B5E] to-[#0A5349] rounded-3xl px-6 py-5 sm:px-8 sm:py-6 shadow-xl shadow-[#0E6B5E]/30 text-white">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-white/15 rounded-xl mb-3 backdrop-blur-sm">
                    <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.4} />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/70 mb-1.5">
                      AllyGo holds
                    </div>
                    <div className="font-black text-[24px] sm:text-[28px] tracking-tight leading-none mb-1">
                      ₹880
                    </div>
                    <div className="text-[10px] text-white/60 font-medium">
                      Locked safely · Released on approval
                    </div>
                  </div>

                  {/* pulse */}
                  <div className="absolute -inset-1 rounded-3xl border border-white/20 animate-pulse pointer-events-none" />
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#0E6B5E]/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#0E6B5E] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0E6B5E]" />
                  </span>
                  <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#0A5349]">
                    Trust Layer Active
                  </span>
                </div>
              </motion.div>

              {/* HELPER */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E6B5E] to-[#2A9D8F] rounded-3xl shadow-xl shadow-[#0E6B5E]/25 -rotate-3" />
                    <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center rotate-3 border border-[#EADFC8]">
                      <span className="text-[40px] sm:text-[48px] font-black text-[#0E6B5E]">P</span>
                    </div>
                  </div>
                  <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-1">
                    Helper
                  </div>
                  <div className="text-[15px] sm:text-[17px] font-black text-[#1E1812]">
                    Priya delivers it
                  </div>
                  <div className="text-[12.5px] text-[#857A6C] mt-1 font-medium">
                    Verified · 4.9★ · 47 tasks done
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom flow indicators */}
            <div className="relative mt-10 pt-6 border-t border-[#EADFC8] grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-0.5">
                  Step 1
                </div>
                <div className="text-[12.5px] font-bold text-[#1E1812]">
                  Pay → AllyGo holds
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-wider uppercase text-[#E8552E] mb-0.5">
                  Step 2
                </div>
                <div className="text-[12.5px] font-bold text-[#1E1812]">
                  Helper delivers
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-wider uppercase text-[#0A5349] mb-0.5">
                  Step 3
                </div>
                <div className="text-[12.5px] font-bold text-[#1E1812]">
                  You approve → Released
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            FEATURE GRID
            ═══════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="group bg-white rounded-2xl border border-[#EADFC8] hover:border-[#1E1812]/15 p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,24,18,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2.2} />
                </div>
                <h3 className="text-[15.5px] font-black text-[#1E1812] mb-2 leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#4A4038] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            CONTRAST CALLOUT — old vs new
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {/* OLD WAY */}
          <div className="relative bg-white border-2 border-[#FCE4E1] rounded-2xl p-6 overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-black tracking-[0.12em] uppercase text-[#B42318] bg-[#FCE4E1] px-2.5 py-1 rounded-md">
                Old way
              </span>
            </div>
            <div className="text-[13px] font-bold tracking-wider uppercase text-[#857A6C] mb-3">
              Without AllyGo
            </div>
            <ul className="space-y-2.5">
              {[
                'Direct UPI to a stranger',
                'No proof, no protection',
                'No way to dispute',
                'Trust based on luck',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[14px] text-[#857A6C]">
                  <div className="w-4 h-4 rounded-full bg-[#FCE4E1] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#B42318]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="line-through decoration-[#B42318]/40 decoration-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NEW WAY */}
          <div className="relative bg-gradient-to-br from-[#1E1812] to-[#2A2118] text-white rounded-2xl p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8552E] opacity-20 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[10px] font-black tracking-[0.12em] uppercase text-[#FFA37F] bg-[#FFA37F]/15 px-2.5 py-1 rounded-md backdrop-blur-sm">
                AllyGo way
              </span>
            </div>
            <div className="relative">
              <div className="text-[13px] font-bold tracking-wider uppercase text-[#FFA37F] mb-3">
                With AllyGo
              </div>
              <ul className="space-y-2.5">
                {[
                  'Money locked safely until done',
                  'Verified students with portfolios',
                  '24-hour dispute resolution',
                  'Trust built into every transaction',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[14px] text-white">
                    <div className="w-4 h-4 rounded-full bg-[#0E6B5E] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-[15px] text-[#4A4038] font-semibold">
            Curious how it actually works in the app?
          </p>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-[#E8552E] hover:text-[#C5401D] transition-colors"
          >
            Walk through the flow
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
