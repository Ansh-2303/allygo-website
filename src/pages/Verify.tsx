import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useSearchParams } from 'react-router-dom';
import {
  ShieldCheck,
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  User,
  Briefcase,
  Calendar,
  Award,
  Building2,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [inputId, setInputId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const verifyCertificate = async (id: string) => {
    if (!id) return;

    setLoading(true);

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', id.trim())
      .single();

    if (error || !data) {
      setResult(null);
    } else {
      setResult(data);
    }

    // small artificial delay so the loading state actually registers visually
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 600);
  };

  // 🔥 AUTO VERIFY FROM URL
  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    if (idFromUrl) {
      setInputId(idFromUrl);
      verifyCertificate(idFromUrl);
    }
  }, []);

  const handleVerify = () => {
    verifyCertificate(inputId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleVerify();
  };

  const handleCopy = () => {
    if (result?.id) {
      navigator.clipboard.writeText(result.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FBF5E9]">
      {/* ═══════════════════════════════════════════════════════════
          BACKGROUND — warm cream with subtle orange/teal glows
          ═══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* soft orange glow top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.08] blur-3xl" />
        {/* soft teal glow bottom-right */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.06] blur-3xl" />
        {/* warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6C9]/30 via-transparent to-[#F8DED0]/30" />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TOP NAV — minimal, brand-anchored
          ═══════════════════════════════════════════════════════════ */}
      <header className="relative z-10 px-6 sm:px-10 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#E8552E] flex items-center justify-center shadow-lg shadow-[#E8552E]/25 group-hover:shadow-[#E8552E]/40 transition-shadow">
            <span className="text-white font-black text-lg leading-none">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-black text-[18px] tracking-tight text-[#1E1812]">
              Ally<span className="text-[#E8552E]">Go</span>
              <sup className="text-[10px] text-[#857A6C] ml-0.5">™</sup>
            </div>
            <div className="text-[10px] text-[#857A6C] font-semibold tracking-wider uppercase -mt-0.5">
              Verify Portal
            </div>
          </div>
        </a>

        <a
          href="https://allygo.in"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#4A4038] hover:text-[#E8552E] transition-colors"
        >
          allygo.in
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════════════════════ */}
      <main className="relative z-10 px-6 sm:px-10 pb-24">
        <div className="max-w-2xl mx-auto pt-8 sm:pt-16">

          {/* Trust badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E6B5E]/10 border border-[#0E6B5E]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B5E]" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0A5349]">
                Official Verification Portal
              </span>
            </div>
          </div>

          {/* Hero heading */}
          <div className="text-center mb-12">
            <h1 className="font-black text-[44px] sm:text-[56px] leading-[1.05] tracking-tight text-[#1E1812] mb-4">
              Verify a{' '}
              <span className="relative inline-block">
                <span className="text-[#E8552E]">certificate</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
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
            <p className="text-[15px] sm:text-[17px] text-[#4A4038] leading-relaxed max-w-md mx-auto">
              Confirm the authenticity of any AllyGo-issued certificate.
              Enter the certificate ID below — it's the code printed on the document.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════
              VERIFY CARD
              ═══════════════════════════════════════════════════════ */}
          <div className="relative">
            {/* card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E8552E]/20 via-[#F2874C]/20 to-[#0E6B5E]/20 rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(30,24,18,0.15)] border border-[#EADFC8] overflow-hidden">

              {/* top accent strip */}
              <div className="h-1 bg-gradient-to-r from-[#E8552E] via-[#F2874C] to-[#0E6B5E]" />

              <div className="p-7 sm:p-10">
                {/* input label */}
                <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-3">
                  Certificate ID
                </label>

                {/* input + button row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895]" />
                    <input
                      type="text"
                      placeholder="AG-INT-2025-0001"
                      value={inputId}
                      onChange={(e) => setInputId(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] font-mono text-[14px] tracking-wider focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    onClick={handleVerify}
                    disabled={loading || !inputId.trim()}
                    className="px-6 py-3.5 rounded-xl bg-[#E8552E] hover:bg-[#C5401D] disabled:bg-[#E8552E]/40 disabled:cursor-not-allowed text-white font-bold text-[14px] tracking-wide shadow-lg shadow-[#E8552E]/25 hover:shadow-xl hover:shadow-[#E8552E]/30 transition-all flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        Verify
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[12px] text-[#857A6C] mt-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#E8552E]" />
                  Find this ID at the top-right of any AllyGo certificate
                </p>

                {/* ═══════════════════════════════════════════════
                    RESULT SECTION
                    ═══════════════════════════════════════════════ */}
                {searched && (
                  <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {result ? (
                      // ─── VALID CERTIFICATE ───
                      <div className="rounded-2xl border-2 border-[#0E6B5E]/20 bg-gradient-to-br from-[#EDF7F4] to-[#DFF0ED]/50 overflow-hidden">
                        {/* status header */}
                        <div className="bg-[#0E6B5E] px-6 py-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                              <CheckCircle2 className="relative w-6 h-6 text-white" fill="white" stroke="#0E6B5E" strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="text-white font-black text-[15px] leading-tight">
                                Certificate Verified
                              </div>
                              <div className="text-white/70 text-[11px] font-medium">
                                Authentic · Issued by AllyGo
                              </div>
                            </div>
                          </div>
                          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-white/15 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7DE5C9] animate-pulse" />
                            <span className="text-[10px] font-bold tracking-wider uppercase text-white">Valid</span>
                          </div>
                        </div>

                        {/* details */}
                        <div className="p-6 space-y-1">
                          <DetailRow
                            icon={<User className="w-4 h-4" />}
                            label="Recipient"
                            value={result.name}
                            highlight
                          />
                          <DetailRow
                            icon={<Briefcase className="w-4 h-4" />}
                            label="Role"
                            value={result.role}
                          />
                          <DetailRow
                            icon={<Calendar className="w-4 h-4" />}
                            label="Duration"
                            value={result.duration}
                          />
                          {result.department && (
                            <DetailRow
                              icon={<Building2 className="w-4 h-4" />}
                              label="Department"
                              value={result.department}
                            />
                          )}
                          {result.performance && (
                            <DetailRow
                              icon={<Award className="w-4 h-4" />}
                              label="Performance"
                              value={result.performance}
                            />
                          )}

                          {/* certificate ID with copy */}
                          <div className="mt-5 pt-5 border-t border-[#0E6B5E]/15 flex items-center justify-between gap-3">
                            <div>
                              <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C]">
                                Certificate ID
                              </div>
                              <div className="font-mono text-[13px] text-[#1E1812] font-semibold mt-0.5">
                                {result.id || inputId}
                              </div>
                            </div>
                            <button
                              onClick={handleCopy}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#0E6B5E]/20 hover:border-[#0E6B5E]/40 text-[#0A5349] text-[11px] font-bold transition-all"
                            >
                              {copied ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  Copy ID
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* footer note */}
                        <div className="bg-white/40 px-6 py-3 border-t border-[#0E6B5E]/10">
                          <p className="text-[11px] text-[#0A5349] flex items-center gap-1.5">
                            <ShieldCheck className="w-3 h-3" />
                            This certificate has been verified against AllyGo's official records.
                          </p>
                        </div>
                      </div>
                    ) : (
                      // ─── INVALID CERTIFICATE ───
                      <div className="rounded-2xl border-2 border-[#B42318]/20 bg-gradient-to-br from-[#FCE4E1] to-[#FCE4E1]/40 overflow-hidden">
                        <div className="bg-[#B42318] px-6 py-4 flex items-center gap-3">
                          <XCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                          <div>
                            <div className="text-white font-black text-[15px] leading-tight">
                              Certificate Not Found
                            </div>
                            <div className="text-white/70 text-[11px] font-medium">
                              This ID does not match any record
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-[14px] text-[#1E1812] leading-relaxed mb-4">
                            We couldn't verify a certificate with the ID{' '}
                            <span className="font-mono font-bold bg-white px-1.5 py-0.5 rounded">
                              {inputId}
                            </span>
                            . This usually means one of the following:
                          </p>
                          <ul className="space-y-2 text-[13px] text-[#4A4038]">
                            <li className="flex gap-2">
                              <span className="text-[#B42318] font-bold">·</span>
                              The ID was entered incorrectly — please check for typos
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#B42318] font-bold">·</span>
                              The certificate is not genuine
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#B42318] font-bold">·</span>
                              The certificate hasn't been registered yet
                            </li>
                          </ul>
                          <a
                            href="mailto:verify@allygo.in"
                            className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-bold text-[#B42318] hover:text-[#921A11] transition-colors"
                          >
                            Report this to AllyGo
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              TRUST FOOTER — three pillars
              ═══════════════════════════════════════════════════════ */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TrustPill
              icon={<ShieldCheck className="w-4 h-4 text-[#E8552E]" />}
              title="Tamper-proof"
              desc="Records secured in our database"
            />
            <TrustPill
              icon={<CheckCircle2 className="w-4 h-4 text-[#0E6B5E]" />}
              title="Real-time"
              desc="Verified instantly, every time"
            />
            <TrustPill
              icon={<Sparkles className="w-4 h-4 text-[#B87514]" />}
              title="Free forever"
              desc="No login, no signup needed"
            />
          </div>

        </div>
      </main>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-[#EADFC8]/60 bg-[#FBF5E9]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#857A6C]">
            © {new Date().getFullYear()} AllyGo · Where Student Talent Becomes Capital
          </p>
          <div className="flex items-center gap-5 text-[12px] text-[#857A6C]">
            <a href="https://allygo.in/privacy" className="hover:text-[#E8552E] transition-colors">Privacy</a>
            <a href="https://allygo.in/terms" className="hover:text-[#E8552E] transition-colors">Terms</a>
            <a href="mailto:hello@allygo.in" className="hover:text-[#E8552E] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

function DetailRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0E6B5E] flex-shrink-0 border border-[#0E6B5E]/15">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-0.5">
          {label}
        </div>
        <div
          className={
            highlight
              ? 'text-[18px] font-black text-[#1E1812] leading-tight'
              : 'text-[14px] font-semibold text-[#1E1812] leading-tight'
          }
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function TrustPill({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#EADFC8]">
      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-[#EADFC8]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[12px] font-bold text-[#1E1812] leading-tight">
          {title}
        </div>
        <div className="text-[11px] text-[#857A6C] leading-tight mt-0.5">
          {desc}
        </div>
      </div>
    </div>
  );
}
