import {
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  ShieldCheck,
  Heart,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'For seekers', href: '#how-it-works' },
    { label: 'For helpers', href: '#how-it-works' },
    { label: 'Verify a certificate', href: '/verify' },
  ];

  const companyLinks = [
    { label: 'Why AllyGo', href: '#problem' },
    { label: 'Pilot · Parul', href: '#pilot' },
    { label: 'Vision & Team', href: '#vision-team' },
    { label: 'Careers', href: '#internships' },
  ];

  const resourceLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Trust & Safety', href: '#solution' },
    { label: 'Press kit', href: 'mailto:admin@allygo.in?subject=Press%20Kit%20Request' },
    { label: 'Contact', href: 'mailto:admin@allygo.in' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Code of Conduct', href: '/conduct' },
  ];

  return (
    <footer className="relative bg-[#1E1812] text-white overflow-hidden">
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.10] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0E6B5E] opacity-[0.08] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(251,245,233,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative">

        {/* ═══════════════════════════════════════════════════════
            FINAL CTA BAND
            ═══════════════════════════════════════════════════════ */}
        <div className="border-b border-white/08">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/08 border border-white/15 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFA37F] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFA37F]" />
                  </span>
                  <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F]">
                    Pre-launch · Limited spots
                  </span>
                </div>
                <h3 className="font-black text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-white mb-4">
                  Ready to be first
                  <br />
                  on your campus?
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/60 max-w-xl leading-relaxed">
                  Join the AllyGo waitlist. We'll notify you the moment the app goes live at your college —
                  and give early-access founding members exclusive perks.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href="#waitlist"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center justify-center gap-2 bg-[#E8552E] hover:bg-[#C5401D] text-white px-7 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-[#E8552E]/30 hover:shadow-2xl hover:shadow-[#E8552E]/40 transition-all"
                >
                  Join the AllyGo Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#internships"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center justify-center gap-2 bg-white/06 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-7 py-4 rounded-xl font-bold text-[15px] transition-all"
                >
                  Or apply to join our team
                </a>
                <p className="text-[11px] text-white/40 text-center mt-1">
                  Free · No spam · You can leave anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            MAIN FOOTER
            ═══════════════════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">

            {/* BRAND COLUMN */}
            <div className="col-span-2 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden p-1">
                  <img src="/logo.png" alt="AllyGo" className="w-full h-full object-contain" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-[20px] tracking-tight text-white">
                    Ally<span className="text-[#FFA37F]">Go</span>
                    <sup className="text-[10px] text-white/50 ml-0.5 font-bold">™</sup>
                  </div>
                  <div className="text-[10px] text-white/40 font-semibold tracking-[0.1em] uppercase -mt-0.5">
                    Trust Layer for Students
                  </div>
                </div>
              </div>

              <p className="text-[13px] text-white/55 leading-relaxed mb-5 max-w-[280px]">
                The student-to-student task marketplace that keeps every transaction safe — from a ₹50 errand to a ₹5,000 project.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/05 border border-white/10">
                  <ShieldCheck className="w-3 h-3 text-[#7DE5C9]" />
                  <span className="text-[10px] font-bold text-white/70">Razorpay Secured</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/05 border border-white/10">
                  <span className="text-[10px] font-bold text-white/70">UPI Native</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-[12px] text-white/45">
                <MapPin className="w-3.5 h-3.5 text-[#FFA37F]" />
                <span>Vadodara, Gujarat · India</span>
              </div>
            </div>

            {/* PRODUCT */}
            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F] mb-4">
                Product
              </div>
              <ul className="space-y-2.5">
                {productLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[13px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.href.startsWith('/') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F] mb-4">
                Company
              </div>
              <ul className="space-y-2.5">
                {companyLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F] mb-4">
                Resources
              </div>
              <ul className="space-y-2.5">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#FFA37F] mb-4">
                Legal
              </div>
              <ul className="space-y-2.5">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              CONTACT + SOCIALS BAND
              ═══════════════════════════════════════════════════ */}
          <div className="border-t border-white/08 pt-8 grid sm:grid-cols-2 gap-6 items-center">

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:admin@allygo.in"
                className="group inline-flex items-center gap-2 bg-white/05 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl px-4 py-2.5 transition-all"
              >
                <Mail className="w-4 h-4 text-[#FFA37F]" />
                <span className="text-[13px] font-semibold text-white">admin@allygo.in</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </a>
              <p className="text-[11.5px] text-white/40">
                Reply within 24 hours · We read every message
              </p>
            </div>

            {/* Socials */}
            <div className="flex sm:justify-end items-center gap-3">
              <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-white/40">
                Follow us
              </span>
              <a
                href="https://www.linkedin.com/company/allygo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/05 hover:bg-[#0A66C2] border border-white/10 hover:border-[#0A66C2] flex items-center justify-center transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4 text-white" strokeWidth={2} />
              </a>
              <a
                href="https://www.instagram.com/allygolimited?igsh=MTh2dDFqY3FjbWN5eQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/05 hover:bg-gradient-to-br hover:from-[#FFA37F] hover:via-[#E8552E] hover:to-[#C5401D] border border-white/10 hover:border-transparent flex items-center justify-center transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-white" strokeWidth={2} />
              </a>
              <a
                href="mailto:admin@allygo.in"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white/05 hover:bg-[#E8552E] border border-white/10 hover:border-[#E8552E] flex items-center justify-center transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4 text-white" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            COPYRIGHT BAR
            ═══════════════════════════════════════════════════════ */}
        <div className="border-t border-white/08">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-white/40">

            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} AllyGo™ · All rights reserved</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-[#E8552E]" fill="#E8552E" />
              <span>in India · For Indian students</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFA37F]" />
              <span className="text-white/55 font-semibold">v1.0 · Pre-launch</span>
            </div>
          </div>
        </div>

        {/* Big watermark wordmark */}
        <div className="overflow-hidden border-t border-white/05 select-none">
          <div className="font-black text-center leading-none tracking-[-0.04em] py-4 sm:py-6"
               style={{
                 fontSize: 'clamp(48px, 14vw, 180px)',
                 background: 'linear-gradient(180deg, rgba(232,85,46,0.12) 0%, rgba(232,85,46,0) 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text',
               }}>
            AllyGo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
