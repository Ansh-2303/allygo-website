import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  PlusCircle,
  Search,
  Lock,
  FileCheck,
  QrCode,
  Star,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const seekerSteps = [
  {
    number: '01',
    icon: PlusCircle,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Post your task',
    desc: 'Write what you need, set a budget, and pick a deadline. Digital or physical — any task under ₹5,000.',
    tag: 'Takes 60 seconds',
    tagColor: 'bg-[#FFE7DC] text-[#C5401D]',
  },
  {
    number: '02',
    icon: Search,
    iconBg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    title: 'Pick your helper',
    desc: 'Verified students apply with a short pitch. Browse their ratings, portfolio, and completed task count before choosing.',
    tag: 'You always choose',
    tagColor: 'bg-[#FBE9C8] text-[#B87514]',
  },
  {
    number: '03',
    icon: Lock,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Lock payment safely',
    desc: "Pay via UPI. Your money is held by AllyGo — not sent to the helper yet. You're in full control until you approve.",
    tag: 'Held · not sent',
    tagColor: 'bg-[#DFF0ED] text-[#0A5349]',
  },
  {
    number: '04',
    icon: FileCheck,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Review the work',
    desc: 'The helper submits proof. You see a watermarked preview first — check quality before releasing a single rupee.',
    tag: 'Preview before paying',
    tagColor: 'bg-[#FFE7DC] text-[#C5401D]',
  },
  {
    number: '05',
    icon: QrCode,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Scan · done.',
    desc: "Happy with the work? Scan the helper's QR code to release payment. ₹ reaches their UPI in seconds.",
    tag: '2-second approval',
    tagColor: 'bg-[#DFF0ED] text-[#0A5349]',
  },
];

const helperSteps = [
  {
    number: '01',
    icon: Search,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Browse tasks on your feed',
    desc: 'See tasks posted by students on your campus — sorted by budget, deadline, and category.',
  },
  {
    number: '02',
    icon: PlusCircle,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Apply with a pitch',
    desc: "Write a short note on why you're the right person. No long proposals — just enough to build trust.",
  },
  {
    number: '03',
    icon: FileCheck,
    iconBg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    title: 'Deliver the work',
    desc: 'Once chosen and payment is locked — do the task. Upload proof when done. No payment risk on your side.',
  },
  {
    number: '04',
    icon: QrCode,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Show QR · get paid',
    desc: "The requester scans your QR. Payment releases to your UPI instantly. Then you both rate each other.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState<'seeker' | 'helper'>('seeker');

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0E6B5E] opacity-[0.06] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10" ref={ref}>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE7DC] border border-[#E8552E]/15 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E8552E]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C5401D]">
              How It Works
            </span>
          </div>
          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-[#1E1812] mb-5">
            Casual enough for a ₹50 errand.
            <br className="hidden sm:block" />{' '}
            <span style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#E8552E' }}>
              Secure enough for a ₹5,000 project.
            </span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#4A4038] max-w-xl mx-auto leading-relaxed">
            One flow for both sides of every transaction. Simple for the seeker. Safe for the helper. Protected by AllyGo throughout.
          </p>
        </motion.div>

        {/* TAB SWITCHER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-white rounded-xl border border-[#EADFC8] shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('seeker')}
              className={
                'px-6 py-2.5 rounded-lg text-[13.5px] font-bold transition-all ' +
                (activeTab === 'seeker'
                  ? 'bg-[#E8552E] text-white shadow-md shadow-[#E8552E]/25'
                  : 'text-[#857A6C] hover:text-[#1E1812] hover:bg-[#FDF8EC]')
              }
            >
              I need help 👋
            </button>
            <button
              onClick={() => setActiveTab('helper')}
              className={
                'px-6 py-2.5 rounded-lg text-[13.5px] font-bold transition-all ' +
                (activeTab === 'helper'
                  ? 'bg-[#0E6B5E] text-white shadow-md shadow-[#0E6B5E]/25'
                  : 'text-[#857A6C] hover:text-[#1E1812] hover:bg-[#FDF8EC]')
              }
            >
              I want to earn 💼
            </button>
          </div>
        </motion.div>

        {/* SEEKER FLOW */}
        {activeTab === 'seeker' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {seekerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="relative bg-white rounded-2xl border border-[#EADFC8] p-5 hover:border-[#1E1812]/15 hover:shadow-[0_16px_40px_-12px_rgba(30,24,18,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    {index < seekerSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-2 z-10">
                        <ArrowRight className="w-4 h-4 text-[#B3A895]" />
                      </div>
                    )}
                    <div className="absolute -top-3 left-5">
                      <span className="text-[10px] font-black tracking-[0.1em] uppercase bg-[#1E1812] text-[#FBF5E9] px-2 py-0.5 rounded-md">
                        {step.number}
                      </span>
                    </div>
                    <div className={`w-10 h-10 ${step.iconBg} rounded-xl flex items-center justify-center mb-3 mt-2 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-[14.5px] font-black text-[#1E1812] mb-1.5 leading-tight">{step.title}</h3>
                    <p className="text-[12.5px] text-[#4A4038] leading-relaxed mb-3">{step.desc}</p>
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide ${step.tagColor}`}>
                      {step.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Safety banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#1E1812] to-[#2A2118] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#FFA37F]" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#FFA37F] mb-1">AllyGo Safety Promise</div>
                <div className="text-white font-black text-[16px] sm:text-[18px] leading-tight mb-1">
                  Your ₹ is held safely. Released only when <span className="text-[#FFA37F]">you</span> approve.
                </div>
                <div className="text-white/60 text-[13px]">
                  If anything goes wrong, raise a dispute — our team resolves it within 24 hours. No questions asked.
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-white/10 rounded-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#7DE5C9] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7DE5C9]" />
                  </span>
                  <span className="text-[11px] font-bold text-white/90">Live Protection</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* HELPER FLOW */}
        {activeTab === 'helper' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {helperSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white rounded-2xl border border-[#EADFC8] p-6 hover:border-[#1E1812]/15 hover:shadow-[0_16px_40px_-12px_rgba(30,24,18,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    {index < helperSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-2 z-10">
                        <ArrowRight className="w-4 h-4 text-[#B3A895]" />
                      </div>
                    )}
                    <div className="absolute -top-3 left-5">
                      <span className="text-[10px] font-black tracking-[0.1em] uppercase bg-[#0E6B5E] text-white px-2 py-0.5 rounded-md">
                        {step.number}
                      </span>
                    </div>
                    <div className={`w-10 h-10 ${step.iconBg} rounded-xl flex items-center justify-center mb-3 mt-2 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-[15px] font-black text-[#1E1812] mb-1.5 leading-tight">{step.title}</h3>
                    <p className="text-[13px] text-[#4A4038] leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Earning stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { amount: '₹50–₹5,000', label: 'per task range', sub: 'Based on skills & complexity', color: 'bg-[#FFE7DC] text-[#E8552E]', sub2: 'text-[#857A6C]' },
                { amount: '95%', label: 'helper payout', sub: 'Platform takes only 5%', color: 'bg-[#DFF0ED] text-[#0E6B5E]', sub2: 'text-[#857A6C]' },
                { amount: 'Instant', label: 'UPI release', sub: 'Scan QR → money in seconds', color: 'bg-[#1E1812] text-white', sub2: 'text-white/50' },
              ].map((card, i) => (
                <div key={i} className={`rounded-2xl p-5 sm:p-6 ${card.color.split(' ')[0]}`}>
                  <div className={`font-black text-[28px] sm:text-[32px] tracking-tight leading-none mb-1 ${card.color.split(' ')[1]}`}>
                    {card.amount}
                  </div>
                  <div className={`font-bold text-[13px] mb-0.5 ${i === 2 ? 'text-white' : 'text-[#1E1812]'}`}>{card.label}</div>
                  <div className={`text-[11.5px] ${card.sub2}`}>{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Helper protection banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#0E6B5E] to-[#0A5349] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="w-7 h-7 text-white" fill="white" strokeWidth={1} />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#7DE5C9] mb-1">Helper Protection</div>
                <div className="text-white font-black text-[16px] sm:text-[18px] leading-tight mb-1">
                  Your work is watermarked until payment is locked.
                </div>
                <div className="text-white/60 text-[13px]">
                  The requester sees a preview — not the final file — until they scan your QR and release the payment.
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                {['Watermark protection', 'Payment guaranteed', '5-star reputation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11.5px] text-white/80 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7DE5C9]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <p className="text-[14px] text-[#857A6C] font-semibold mb-4 uppercase tracking-wider">Ready to join?</p>
          <a
            href="#waitlist"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 bg-[#E8552E] hover:bg-[#C5401D] text-white px-8 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-[#E8552E]/25 hover:shadow-2xl hover:shadow-[#E8552E]/35 transition-all"
          >
            Join the AllyGo Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[12px] text-[#B3A895] mt-3">Free to join · Launching at Parul University first</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
