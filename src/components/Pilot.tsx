import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Users,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  CheckCircle2,
  TrendingUp,
  Clock,
  Building2,
} from 'lucide-react';

const pilotStats = [
  { value: '50,000+', label: 'Students on campus', sub: 'Parul University, Vadodara', icon: Users },
  { value: '₹50–₹5K', label: 'Task range live', sub: 'Every budget, every skill', icon: TrendingUp },
  { value: '24 hrs', label: 'Dispute resolution', sub: 'AllyGo team response SLA', icon: Clock },
  { value: '100%', label: 'Payment protection', sub: 'Every single transaction', icon: ShieldCheck },
];

const pillars = [
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: 'Phone OTP login',
    desc: 'No passwords. Just your number and a 6-digit code.',
  },
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: 'UPI-first payments',
    desc: 'Pay and receive via any UPI app. Razorpay secured.',
  },
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: 'Watermarked preview',
    desc: 'Check work before releasing payment. Always.',
  },
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: 'QR-based approval',
    desc: 'Scan to release. Two seconds. Done.',
  },
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: '5-star rating system',
    desc: 'Every transaction builds reputation. Both sides rate.',
  },
  {
    icon: CheckCircle2,
    color: 'text-[#0E6B5E]',
    bg: 'bg-[#DFF0ED]',
    title: 'Dispute safety valve',
    desc: 'Something wrong? Flag it. We sort it in 24 hours.',
  },
];

const testimonials = [
  {
    quote: "I described exactly how AllyGo works before even hearing about it. Students need this — we just didn't know it could exist.",
    name: 'Riya M.',
    role: '3rd Year · BBA · Parul',
    avatar: 'R',
    avatarBg: 'from-[#E8552E] to-[#F2874C]',
    stars: 5,
  },
  {
    quote: "I'd trust a verified stranger with a portfolio more than a friend. Friends are awkward about money. AllyGo makes it professional.",
    name: 'Aarav S.',
    role: '2nd Year · CSE · Parul',
    avatar: 'A',
    avatarBg: 'from-[#0E6B5E] to-[#2A9D8F]',
    stars: 5,
  },
  {
    quote: "The escrow idea blew my mind. I've been burned before — paying someone who never delivered. This solves exactly that.",
    name: 'Sneha P.',
    role: '4th Year · Design · Parul',
    avatar: 'S',
    avatarBg: 'from-[#8A5A2B] to-[#C08456]',
    stars: 5,
  },
];

const Pilot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pilot" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#1E1812]" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#E8552E] opacity-[0.12] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.10] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8552E] opacity-[0.04] blur-3xl" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(251,245,233,0.4) 1px, transparent 1px)',
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8552E]/15 border border-[#E8552E]/25 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFA37F] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFA37F]" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#FFA37F]">
              Live Pilot · Parul University
            </span>
          </div>

          <h2 className="font-black text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight text-white mb-5">
            One campus first.
            <br className="hidden sm:block" />{' '}
            <span
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#FFA37F',
              }}
            >
              Then all of India.
            </span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-white/65 max-w-2xl mx-auto leading-relaxed">
            AllyGo is live at Parul University, Vadodara — home to 50,000+ students across
            engineering, design, commerce, law, and more. This is where we prove the model
            before expanding campus by campus across India.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CAMPUS CARD + STATS
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white/05 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-10 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Campus info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E8552E]/20 border border-[#E8552E]/25 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#FFA37F]" />
                </div>
                <div>
                  <div className="text-white font-black text-[18px] leading-tight">
                    Parul University
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-white/50 font-medium mt-0.5">
                    <MapPin className="w-3 h-3" />
                    Waghodia, Vadodara, Gujarat
                  </div>
                </div>
              </div>

              <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                One of India's largest private universities with 50,000+ students across
                engineering, law, medicine, design, management, and more — all on a single
                interconnected campus. The perfect testing ground for a peer marketplace.
              </p>

              {/* MVP features live */}
              <div className="grid grid-cols-2 gap-2">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="flex items-start gap-2 py-1">
                      <Icon className="w-3.5 h-3.5 text-[#7DE5C9] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[11.5px] text-white/70 font-semibold leading-tight">
                        {p.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {pilotStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}
                    className="bg-white/06 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 group transition-all hover:bg-white/08"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E8552E]/15 border border-[#E8552E]/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-[#FFA37F]" strokeWidth={2.2} />
                    </div>
                    <div className="font-black text-[24px] sm:text-[28px] text-white leading-none tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[12px] font-bold text-white/80 leading-tight mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10.5px] text-white/40 leading-tight">
                      {stat.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 sm:mb-14"
        >
          <div className="text-center mb-7">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/40 mb-1">
              From our guerrilla interviews
            </div>
            <div className="text-[16px] font-bold text-white/70">
              What students said before we even launched
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="bg-white/05 border border-white/10 hover:border-white/20 rounded-2xl p-5 sm:p-6 transition-all group hover:bg-white/07"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#E8A317]" fill="#E8A317" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed mb-4"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic' }}
                >
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-white/08">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-[12px] font-black text-white flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">{t.name}</div>
                    <div className="text-[10.5px] text-white/45 leading-tight">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            NEXT CAMPUS TEASER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/05 border border-white/10 rounded-2xl px-7 py-5 mb-7">
            <div className="text-[13px] text-white/60 font-semibold">
              Parul University is just the beginning.
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {['MS University', 'PDPU', 'LJ University', 'Your campus →'].map((campus, i) => (
                <span
                  key={i}
                  className={
                    'text-[11px] font-bold px-2.5 py-1 rounded-md ' +
                    (i === 3
                      ? 'bg-[#E8552E]/20 text-[#FFA37F] border border-[#E8552E]/25'
                      : 'bg-white/08 text-white/50')
                  }
                >
                  {campus}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#waitlist"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 bg-[#E8552E] hover:bg-[#C5401D] text-white px-8 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-[#E8552E]/30 hover:shadow-2xl hover:shadow-[#E8552E]/40 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Get Early Access for Your Campus
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[12px] text-white/35 mt-3">
            We'll notify your campus when AllyGo goes live there
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pilot;
