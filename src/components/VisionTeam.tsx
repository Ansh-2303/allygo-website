import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Linkedin,
  Mail,
  Sparkles,
  Target,
  Eye,
  Compass,
  ArrowRight,
  Quote,
  Heart,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// EDIT THESE TWO OBJECTS WITH YOUR REAL DETAILS
// ═══════════════════════════════════════════════════════════
const founders = [
  {
    name: 'Ansh Patel',         // ← edit
    role: 'Co-founder & COO',     // ← edit
    initial: 'A',                 // ← first letter of name
    avatarBg: 'from-[#E8552E] to-[#F2874C]',
    bio: 'Building AllyGo because I watched students at my own campus get burned trying to help each other. The trust gap between two people and one transaction is what we exist to close.',
    focus: ['Product', 'Vision', 'Growth'],
    quote: 'A platform is only as strong as the trust it earns. Every screen we ship is auditioned by that one rule.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ansh-patel-48274024b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      email: 'mailto:anshpatel184@gmail.com',
    },
  },
  {
    name: 'Dhruv Katkar',                // ← edit (full name)
    role: 'Co-founder & CEO',     // ← edit
    initial: 'D',
    avatarBg: 'from-[#0E6B5E] to-[#2A9D8F]',
    bio: 'Engineering the rails that make peer-to-peer payments actually safe. Background in full-stack, obsessed with clean systems and the kind of code that quietly handles a million edge cases.',
    focus: ['Engineering', 'Infra', 'Security'],
    quote: 'The best systems are invisible. Students should never see escrow logic — they should just feel safe.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/dhruv-katkar-24875223b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      email: 'mailto:dhruvkatkar7@gmail.com',
    },
  },
];

const pillars = [
  {
    icon: Eye,
    iconBg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    label: 'Vision',
    title: 'Where student talent becomes capital.',
    desc: 'A future where every Indian college runs on a healthy, transparent peer economy. Where a 19-year-old can earn from their skills between lectures, and a senior can hire a junior with the same trust they\'d hire a professional.',
  },
  {
    icon: Target,
    iconBg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    label: 'Mission',
    title: 'Build the trust layer for student transactions.',
    desc: 'Most peer marketplaces failed because they tried to be social networks first. We start with the hardest problem — making one stranger feel safe paying another — and build outward from there.',
  },
  {
    icon: Compass,
    iconBg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    label: 'Principles',
    title: 'Peer, not platform. Warm, not corporate.',
    desc: 'We will never feel like a faceless app. Every interaction should feel like the smartest senior on your campus built it for their friends. That\'s the vibe. That\'s the bar.',
  },
];

const milestones = [
  { quarter: 'Q4 2025', title: 'Concept + research', desc: 'Guerrilla interviews at Parul · 5/5 students validated the idea', status: 'done' },
  { quarter: 'Q1 2026', title: 'MVP design + build', desc: 'Full app design + escrow flow + admin panel + verification system', status: 'done' },
  { quarter: 'Q2 2026', title: 'Soft launch · Parul', desc: 'First 50–100 users · iterate fast · prove the unit economics', status: 'active' },
  { quarter: 'Q3 2026', title: 'Multi-campus rollout', desc: 'Expand to 5–10 colleges in Gujarat · build Campus Ambassador network', status: 'next' },
  { quarter: 'Q4 2026', title: 'Pan-India scale', desc: 'Open marketplace across India · in-app chat · advanced filters', status: 'future' },
];

const VisionTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vision-team" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#E8552E] opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.07] blur-3xl" />
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
          className="text-center mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF0ED] border border-[#0E6B5E]/15 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#0E6B5E]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0A5349]">
              Vision · Mission · Team
            </span>
          </div>

          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-[#1E1812] mb-5">
            Two students. One mission.{' '}
            <span
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#E8552E',
              }}
            >
              No middlemen.
            </span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#4A4038] max-w-2xl mx-auto leading-relaxed">
            We're not a 100-person company. We're two people who saw a problem on our own campus and
            decided to fix it before anyone else got around to it. Here's what we believe and where we're going.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            VISION / MISSION / PRINCIPLES
            ═══════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-3 gap-4 mb-16 sm:mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-white rounded-2xl border border-[#EADFC8] hover:border-[#1E1812]/15 p-7 hover:shadow-[0_20px_40px_-15px_rgba(30,24,18,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} strokeWidth={2.2} />
                </div>
                <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#857A6C] mb-2">
                  {pillar.label}
                </div>
                <h3 className="font-black text-[19px] text-[#1E1812] leading-tight tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[13.5px] text-[#4A4038] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            MEET THE FOUNDERS
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EADFC8] mb-3">
              <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#857A6C]">
                Meet the founders
              </span>
            </div>
            <h3 className="font-black text-[28px] sm:text-[36px] text-[#1E1812] leading-tight tracking-tight max-w-2xl mx-auto">
              The two people behind AllyGo.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative bg-white rounded-3xl border border-[#EADFC8] hover:border-[#1E1812]/15 p-7 sm:p-8 hover:shadow-[0_30px_60px_-20px_rgba(30,24,18,0.18)] transition-all duration-300 overflow-hidden group"
              >
                {/* Corner accent */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#FFE7DC] to-[#FBE9C8] opacity-30 rounded-full pointer-events-none" />

                <div className="relative">
                  {/* Avatar + name */}
                  <div className="flex items-start gap-5 mb-5">
                    {/* Monogram avatar */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${founder.avatarBg} shadow-xl flex items-center justify-center`}>
                        <span className="font-black text-[40px] text-white leading-none tracking-tight">
                          {founder.initial}
                        </span>
                      </div>
                      {/* dot accent */}
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#FBF5E9] flex items-center justify-center">
                        <Heart className="w-3 h-3 text-[#E8552E]" fill="#E8552E" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-1">
                      <h4 className="font-black text-[22px] text-[#1E1812] leading-tight tracking-tight mb-1">
                        {founder.name}
                      </h4>
                      <div className="text-[13px] font-bold text-[#E8552E] mb-3">
                        {founder.role}
                      </div>

                      {/* Focus tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {founder.focus.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold tracking-wider uppercase bg-[#FDF8EC] text-[#857A6C] px-2 py-0.5 rounded-md border border-[#EADFC8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[13.5px] text-[#4A4038] leading-relaxed mb-5">
                    {founder.bio}
                  </p>

                  {/* Quote */}
                  <div className="relative pl-4 border-l-2 border-[#E8552E] mb-6">
                    <Quote className="absolute -top-1 -left-2.5 w-4 h-4 text-[#E8552E] bg-white" />
                    <p
                      className="text-[14px] text-[#1E1812] leading-snug"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}
                    >
                      "{founder.quote}"
                    </p>
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-2 pt-5 border-t border-[#FDF8EC]">
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#FDF8EC] hover:bg-[#1E1812] text-[#857A6C] hover:text-white flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" strokeWidth={2} />
                    </a>
            
                    <a
                      href={founder.socials.email}
                      className="w-9 h-9 rounded-lg bg-[#FDF8EC] hover:bg-[#E8552E] text-[#857A6C] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" strokeWidth={2} />
                    </a>
                    <div className="flex-1" />
                    <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#B3A895]">
                      Co-founder
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            ROADMAP
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1E1812] to-[#2A2118] rounded-3xl p-7 sm:p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#E8552E] opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0E6B5E] opacity-20 blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/08 border border-white/15 mb-3">
                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F]">
                  The roadmap
                </span>
              </div>
              <h3 className="font-black text-[26px] sm:text-[34px] text-white leading-tight tracking-tight max-w-xl mx-auto">
                Where we are. <span className="text-[#FFA37F]">Where we're going.</span>
              </h3>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              {milestones.map((m, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                  className={
                    'flex items-start gap-4 p-4 rounded-2xl border transition-all ' +
                    (m.status === 'active'
                      ? 'bg-[#E8552E]/15 border-[#E8552E]/30'
                      : m.status === 'done'
                      ? 'bg-white/05 border-white/10'
                      : 'bg-white/03 border-white/08')
                  }
                >
                  {/* Status dot */}
                  <div className="flex-shrink-0 mt-1">
                    {m.status === 'done' && (
                      <div className="w-3 h-3 rounded-full bg-[#7DE5C9]" />
                    )}
                    {m.status === 'active' && (
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFA37F] opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFA37F]" />
                      </span>
                    )}
                    {m.status === 'next' && (
                      <div className="w-3 h-3 rounded-full bg-white/30 border border-white/50" />
                    )}
                    {m.status === 'future' && (
                      <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-5 items-start">
                    <div className="text-[11px] font-black tracking-wider uppercase text-white/45 sm:pt-0.5">
                      {m.quarter}
                    </div>
                    <div>
                      <div className={
                        'font-bold text-[14.5px] leading-tight mb-0.5 ' +
                        (m.status === 'future' ? 'text-white/60' : 'text-white')
                      }>
                        {m.title}
                      </div>
                      <div className={
                        'text-[12px] leading-snug ' +
                        (m.status === 'future' ? 'text-white/30' : 'text-white/55')
                      }>
                        {m.desc}
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="flex-shrink-0">
                    {m.status === 'done' && (
                      <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#7DE5C9] bg-[#7DE5C9]/10 px-2 py-0.5 rounded-md">
                        Done
                      </span>
                    )}
                    {m.status === 'active' && (
                      <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#FFA37F] bg-[#FFA37F]/10 px-2 py-0.5 rounded-md">
                        Now
                      </span>
                    )}
                    {m.status === 'next' && (
                      <span className="text-[9.5px] font-bold tracking-wider uppercase text-white/60 bg-white/10 px-2 py-0.5 rounded-md">
                        Next
                      </span>
                    )}
                    {m.status === 'future' && (
                      <span className="text-[9.5px] font-bold tracking-wider uppercase text-white/30 bg-white/05 px-2 py-0.5 rounded-md">
                        Soon
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-[14px] text-[#4A4038] font-semibold mb-4">
            Want to be part of the next milestone?
          </p>
          <a
            href="#waitlist"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 bg-[#E8552E] hover:bg-[#C5401D] text-white px-8 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-[#E8552E]/25 hover:shadow-2xl hover:shadow-[#E8552E]/35 transition-all"
          >
            Join the journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionTeam;
