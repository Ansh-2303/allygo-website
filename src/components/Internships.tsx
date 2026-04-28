import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2,
  Palette,
  Megaphone,
  Users,
  Search,
  ArrowRight,
  Briefcase,
  Award,
  FileCheck,
  Wallet,
  Zap,
  Heart,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react';

const roles = [
  {
    icon: Code2,
    color: '#E8552E',
    bg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Frontend Engineering Intern',
    department: 'Engineering',
    type: 'Full-time · 3 months',
    location: 'Remote · India',
    skills: ['React Native', 'TypeScript', 'Tailwind'],
    desc: 'Build the screens 50,000+ students will use. From the task feed to the QR payment screen — you ship features that real users tap on day one.',
    whatYoullDo: [
      'Build production-grade React Native screens',
      'Work on payment flows + escrow logic',
      'Ship features used by Parul students immediately',
    ],
    isHot: true,
    openings: 2,
  },
  {
    icon: Palette,
    color: '#0E6B5E',
    bg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Product Design Intern',
    department: 'Design',
    type: 'Full-time · 3 months',
    location: 'Remote · India',
    skills: ['Figma', 'UX Research', 'Mobile-first'],
    desc: 'Design the trust moments — the verification badge, the payment-lock screen, the rating UI. Every pixel either earns trust or loses it.',
    whatYoullDo: [
      'Design end-to-end mobile flows in Figma',
      'Run guerrilla user interviews on campus',
      'Own a flow → hand off to engineering',
    ],
    isHot: true,
    openings: 1,
  },
  {
    icon: Megaphone,
    color: '#B87514',
    bg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    title: 'Growth & Marketing Intern',
    department: 'Growth',
    type: 'Part-time · 3 months',
    location: 'Vadodara preferred',
    skills: ['Content', 'Social Media', 'Analytics'],
    desc: 'Build the AllyGo brand on Instagram, LinkedIn, and on-campus. Run our launch campaign at Parul. Own one channel end-to-end.',
    whatYoullDo: [
      'Run our Instagram + LinkedIn pre-launch',
      'Lead campus poster + WhatsApp campaigns',
      'Track signups, conversion, retention',
    ],
    openings: 2,
  },
  {
    icon: Users,
    color: '#E8552E',
    bg: 'bg-[#FFE7DC]',
    iconColor: 'text-[#C5401D]',
    title: 'Campus Ambassador',
    department: 'Community',
    type: 'Part-time · Per campus',
    location: 'Your college',
    skills: ['Networking', 'Communication', 'Hustle'],
    desc: 'Be the face of AllyGo on your campus. Build the first 100 users. Run referral drives, host meet-ups, become the go-to person for student earnings.',
    whatYoullDo: [
      'Onboard the first 100 students on your campus',
      'Host launch events + WhatsApp groups',
      'Earn per signup + monthly retainer',
    ],
    openings: 8,
  },
  {
    icon: Search,
    color: '#0E6B5E',
    bg: 'bg-[#DFF0ED]',
    iconColor: 'text-[#0A5349]',
    title: 'Product Research Intern',
    department: 'Product',
    type: 'Part-time · 3 months',
    location: 'Vadodara · Remote',
    skills: ['User Interviews', 'Synthesis', 'Writing'],
    desc: 'Talk to 5 students every week. Find the truth — what works, what breaks trust, what makes them tell their friends. Your reports shape the roadmap.',
    whatYoullDo: [
      'Conduct 5 student interviews per week',
      'Synthesise insights into shareable docs',
      'Sit in on every product decision',
    ],
    openings: 1,
  },
  {
    icon: FileCheck,
    color: '#B87514',
    bg: 'bg-[#FBE9C8]',
    iconColor: 'text-[#B87514]',
    title: 'Operations & Trust Intern',
    department: 'Operations',
    type: 'Part-time · 3 months',
    location: 'Remote · India',
    skills: ['Customer Ops', 'Documentation', 'Empathy'],
    desc: 'Be the human behind the platform. Resolve disputes within 24 hours. Build SOPs for every edge case. Make every student feel heard.',
    whatYoullDo: [
      'Handle dispute resolution end-to-end',
      'Build internal SOPs and FAQs',
      'Be the voice of users to the team',
    ],
    openings: 1,
  },
];

const perks = [
  { icon: Award, title: 'Stipend + equity', desc: 'Real compensation, not "exposure"' },
  { icon: FileCheck, title: 'Verified certificate', desc: 'QR-verified, blockchain-backed' },
  { icon: Heart, title: 'LOR from founder', desc: 'Personal recommendation letter' },
  { icon: Zap, title: 'Zero bureaucracy', desc: 'Direct access. Decisions in hours.' },
  { icon: Briefcase, title: 'Real ownership', desc: 'You own a feature end-to-end' },
  { icon: Sparkles, title: 'Founding team perks', desc: 'PPOs for top performers' },
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState<string>('all');

  const departments = ['all', 'Engineering', 'Design', 'Growth', 'Product', 'Community', 'Operations'];
  const filteredRoles = filter === 'all' ? roles : roles.filter((r) => r.department === filter);

  return (
    <section id="internships" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FBF5E9]" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#E8552E] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0E6B5E] opacity-[0.05] blur-3xl" />
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

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE7DC] border border-[#E8552E]/15 mb-5">
            <Briefcase className="w-3.5 h-3.5 text-[#E8552E]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C5401D]">
              We're Hiring · Founding Team
            </span>
          </div>

          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-[#1E1812] mb-5">
            Build the trust layer for{' '}
            <span
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#E8552E',
              }}
            >
              India's student economy.
            </span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#4A4038] max-w-2xl mx-auto leading-relaxed">
            We're a small team building something India hasn't seen before. If you want to ship code
            real students will use this semester — not next year — we want to talk.
          </p>

          {/* Live signal */}
          <div className="mt-6 inline-flex items-center gap-2 text-[12.5px] text-[#857A6C] font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#0E6B5E] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E6B5E]" />
            </span>
            <b className="text-[#1E1812]">15 openings</b> across 6 roles · Applications open
          </div>
        </motion.div>

        {/* FILTER PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={
                'px-4 py-2 rounded-full text-[12.5px] font-bold transition-all border ' +
                (filter === dept
                  ? 'bg-[#1E1812] text-white border-[#1E1812]'
                  : 'bg-white text-[#857A6C] border-[#EADFC8] hover:border-[#1E1812]/30 hover:text-[#1E1812]')
              }
            >
              {dept === 'all' ? 'All Roles' : dept}
              {dept !== 'all' && (
                <span className="ml-1.5 opacity-60">
                  ({roles.filter((r) => r.department === dept).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* ROLES GRID */}
        <div className="grid lg:grid-cols-2 gap-4 mb-16 sm:mb-20">
          {filteredRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group relative bg-white rounded-2xl border border-[#EADFC8] hover:border-[#1E1812]/15 p-6 sm:p-7 hover:shadow-[0_20px_40px_-15px_rgba(30,24,18,0.15)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Hot badge */}
                {role.isHot && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-black tracking-[0.1em] uppercase bg-[#E8552E] text-white px-2 py-0.5 rounded-md">
                      🔥 Hot
                    </span>
                  </div>
                )}

                {/* Header row */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className={`w-12 h-12 ${role.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${role.iconColor}`} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-0.5">
                      {role.department}
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-black text-[#1E1812] leading-tight tracking-tight">
                      {role.title}
                    </h3>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-[11.5px] text-[#857A6C] font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {role.type}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#B3A895]" />
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {role.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#B3A895]" />
                  <span className="flex items-center gap-1 text-[#0A5349]">
                    <Users className="w-3 h-3" />
                    {role.openings} {role.openings === 1 ? 'opening' : 'openings'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13.5px] text-[#4A4038] leading-relaxed mb-4">
                  {role.desc}
                </p>

                {/* What you'll do */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-2">
                    What you'll do
                  </div>
                  <ul className="space-y-1.5">
                    {role.whatYoullDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12.5px] text-[#4A4038]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B5E] flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pb-5 border-b border-[#FDF8EC]">
                  {role.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10.5px] font-bold tracking-wide bg-[#FDF8EC] text-[#4A4038] px-2 py-0.5 rounded-md border border-[#EADFC8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Apply CTA */}
                <a
                  href="https://forms.gle/n2hEUBK3oVXgNjn18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E8552E] hover:text-[#C5401D] transition-colors"
                >
                  Apply for this role
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* PERKS BAND */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1E1812] to-[#2A2118] rounded-3xl p-7 sm:p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#E8552E] opacity-25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#0E6B5E] opacity-25 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                <Sparkles className="w-3 h-3 text-[#FFA37F]" />
                <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#FFA37F]">
                  What you get
                </span>
              </div>
              <h3 className="font-black text-[26px] sm:text-[34px] text-white leading-tight tracking-tight max-w-xl mx-auto">
                Real responsibility. Real growth. Real <span className="text-[#FFA37F]">paychecks.</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/05 border border-white/10 hover:border-white/20 rounded-xl p-4 flex items-center gap-3 hover:bg-white/08 transition-all"
                  >
                    <div className="w-10 h-10 bg-[#E8552E]/15 border border-[#E8552E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-[#FFA37F]" strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-bold text-white leading-tight">{perk.title}</div>
                      <div className="text-[11px] text-white/55 leading-tight mt-0.5">{perk.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* DON'T SEE A FIT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border border-[#EADFC8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FDF8EC] flex items-center justify-center flex-shrink-0">
              <Wallet className="w-6 h-6 text-[#857A6C]" strokeWidth={2} />
            </div>
            <div>
              <div className="font-black text-[17px] text-[#1E1812] mb-1 leading-tight">
                Don't see your dream role?
              </div>
              <div className="text-[13.5px] text-[#857A6C] leading-snug">
                If you're a builder, send us your story. We hire for ability over titles.
              </div>
            </div>
          </div>
          <a
            href="mailto:hello@allygo.in?subject=Open%20Application%20%E2%80%94%20AllyGo"
            className="inline-flex items-center gap-1.5 bg-[#1E1812] hover:bg-[#2A2118] text-white px-5 py-3 rounded-xl font-bold text-[13px] transition-all flex-shrink-0"
          >
            Pitch yourself
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
