import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AlertTriangle,
  MessageCircleX,
  HandCoins,
  ShieldOff,
  ArrowRight,
  Quote,
} from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    iconBg: 'bg-[#FCE4E1]',
    iconColor: 'text-[#B42318]',
    accent: 'border-[#B42318]/20',
    title: 'Pay first. Hope for the best.',
    description:
      'You UPI a senior ₹500 for a project. They ghost. There\'s no recourse, no platform to complain to, and no way to get your money back.',
    quote: '"My friend lost ₹1,200 last semester. He just had to move on."',
    speaker: 'Aarav, 2nd year · Parul University',
  },
  {
    icon: HandCoins,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    accent: 'border-[#E8552E]/20',
    title: 'Skills with no marketplace.',
    description:
      'You can design, code, or write — but earning means awkward DMs, no proof of work, and price negotiations on WhatsApp at 2am.',
    quote: '"I\'m good at Canva. I just don\'t know how to find people who\'ll pay me."',
    speaker: 'Priya, 3rd year · Design student',
  },
  {
    icon: MessageCircleX,
    iconBg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    accent: 'border-[#B87514]/25',
    title: 'No proof, no protection.',
    description:
      'No contract, no escrow, no review system. If something goes wrong, it\'s your word against theirs — and the loudest voice wins.',
    quote: '"I delivered the work. He just stopped replying after I sent the file."',
    speaker: 'Rohan, 4th year · CSE',
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    accent: 'border-[#0E6B5E]/25',
    title: 'Trust runs out fast.',
    description:
      'After one bad experience, students stop helping each other. The campus economy that should thrive on collaboration just… freezes.',
    quote: '"Now I only help my close friends. It\'s easier than getting burned."',
    speaker: 'Sneha, 2nd year · Commerce',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="problem"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          BACKGROUND
          ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B42318] opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E8552E] opacity-[0.06] blur-3xl" />
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
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4E1] border border-[#B42318]/15 mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-[#B42318]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#B42318]">
              The Problem
            </span>
          </div>

          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-[#1E1812] mb-6 max-w-4xl mx-auto">
            The way students help each other
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#B42318',
                }}
              >
                is broken.
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,5 Q50,0 100,4 T200,3"
                  stroke="#B42318"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#4A4038] max-w-2xl mx-auto leading-relaxed">
            Every Indian college runs on student-to-student favours. But the moment money is involved —
            it's UPI, prayer, and hope. We talked to students at Parul University. The same four problems came up every single time.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            STAT BAND — emotional hook
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20"
        >
          <StatBlock big="78%" label="of students have been ghosted after paying for help" />
          <StatBlock big="₹400+" label="average loss per student per semester" />
          <StatBlock big="0" label="platforms built for student-to-student transactions" />
          <StatBlock big="5/5" label="students said they need this — in our pilot interviews" />
        </motion.div>

        {/* ═══════════════════════════════════════════
            PROBLEM CARDS
            ═══════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                className="group relative bg-white rounded-2xl border border-[#EADFC8] hover:border-[#1E1812]/15 hover:shadow-[0_20px_40px_-15px_rgba(30,24,18,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* corner accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${problem.iconBg} opacity-30 rounded-bl-full pointer-events-none`}
                />

                <div className="relative p-7 sm:p-8">
                  {/* icon */}
                  <div className={`inline-flex w-12 h-12 ${problem.iconBg} rounded-xl items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5.5 h-5.5 ${problem.iconColor}`} strokeWidth={2.2} />
                  </div>

                  {/* title */}
                  <h3 className="text-[20px] sm:text-[22px] font-black text-[#1E1812] mb-3 leading-tight tracking-tight">
                    {problem.title}
                  </h3>

                  {/* desc */}
                  <p className="text-[14px] text-[#4A4038] leading-relaxed mb-5">
                    {problem.description}
                  </p>

                  {/* quote */}
                  <div className={`relative pl-4 pt-1 pb-1 border-l-2 ${problem.accent}`}>
                    <Quote className="absolute -top-1 -left-2 w-4 h-4 text-[#B3A895] bg-white" />
                    <p className="text-[13px] italic text-[#4A4038] leading-snug mb-1.5"
                       style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: '15px' }}
                    >
                      {problem.quote}
                    </p>
                    <p className="text-[10.5px] font-bold tracking-wider uppercase text-[#857A6C]">
                      — {problem.speaker}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            CTA TO SOLUTION
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-[15px] text-[#4A4038] font-semibold">
            We didn't just notice the problem.
          </p>
          <a
            href="#solution"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-[#E8552E] hover:text-[#C5401D] transition-colors"
          >
            See how we're fixing it
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ═══ Sub-component: stat block ═══
function StatBlock({ big, label }: { big: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EADFC8] hover:border-[#B42318]/30 hover:shadow-md transition-all">
      <div className="font-black text-[28px] sm:text-[36px] text-[#1E1812] tracking-tight leading-none mb-2">
        {big}
      </div>
      <div className="text-[11.5px] sm:text-[12px] text-[#857A6C] font-semibold leading-snug">
        {label}
      </div>
    </div>
  );
}

export default Problem;
