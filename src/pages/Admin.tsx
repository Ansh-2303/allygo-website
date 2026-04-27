import { useState, useRef, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { QRCodeCanvas } from 'qrcode.react';
import {
  Lock,
  ShieldCheck,
  User,
  Briefcase,
  Calendar,
  Building2,
  Award,
  Sparkles,
  Loader2,
  CheckCircle2,
  Download,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
  Hash,
  ExternalLink,
  LogOut,
  Eye,
  EyeOff,
} from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [department, setDepartment] = useState('');
  const [performance, setPerformance] = useState('Excellent');
  const [loading, setLoading] = useState(false);
  const [createdId, setCreatedId] = useState('');
  const [createdData, setCreatedData] = useState<any>(null);
  const [isExisting, setIsExisting] = useState(false);
  const [customId, setCustomId] = useState('');
  const [useCustomId, setUseCustomId] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedField, setCopiedField] = useState('');

  const qrRef = useRef<HTMLCanvasElement | null>(null);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = () => {
    setLoginError('');
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    resetForm();
  };

  const generateId = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `AG-INT-${year}-${random}`;
  };

  // ───── Auto-calculate duration ─────
  const durationText = useMemo(() => {
    if (!startDate || !endDate) return '';
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end < start) return 'Invalid range';

    const ms = end.getTime() - start.getTime();
    const totalDays = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
    if (days > 0 && years === 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);

    if (parts.length === 0) return `${totalDays} day${totalDays > 1 ? 's' : ''}`;
    return parts.join(' · ');
  }, [startDate, endDate]);

  const formatDate = (d: string) => {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const downloadQR = () => {
    if (!qrRef.current) return;
    const url = qrRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `${createdId}-qr.png`;
    link.click();
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const resetForm = () => {
    setName('');
    setRole('');
    setStartDate('');
    setEndDate('');
    setDepartment('');
    setPerformance('Excellent');
    setCustomId('');
    setUseCustomId(false);
    setCreatedId('');
    setCreatedData(null);
    setIsExisting(false);
    setErrorMsg('');
  };

  const handleSubmit = async () => {
    setErrorMsg('');

    if (useCustomId && !customId.trim()) {
      setErrorMsg('Please enter an existing Certificate ID to look up.');
      return;
    }

    // ───── If using existing ID: just look it up & show its QR ─────
    if (useCustomId) {
      setLoading(true);
      const id = customId.trim();
      const { data: existing } = await supabase
        .from('certificates')
        .select('*')
        .eq('id', id)
        .single();

      if (existing) {
        setCreatedId(id);
        setCreatedData(existing);
        setIsExisting(true);
      } else {
        setErrorMsg(`Certificate "${id}" not found in database.`);
      }
      setLoading(false);
      return;
    }

    // ───── Creating new certificate ─────
    if (!name || !role || !startDate || !endDate) {
      setErrorMsg('Please fill in all required fields (Name, Role, Start, End).');
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setErrorMsg('End date cannot be before start date.');
      return;
    }

    setLoading(true);

    const id = generateId();

    // Check duplicate
    const { data: existing } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', id)
      .single();

    if (existing) {
      setCreatedId(id);
      setCreatedData(existing);
      setIsExisting(true);
      setLoading(false);
      return;
    }

    // Insert — keep `duration` for back-compat + add new columns
    const newCert = {
      id,
      name: name.trim(),
      role: role.trim(),
      duration: durationText,
      start_date: startDate,
      end_date: endDate,
      department: department.trim() || null,
      performance: performance.trim() || null,
    };

    const { error } = await supabase.from('certificates').insert([newCert]);

    if (error) {
      setErrorMsg(`Error creating certificate: ${error.message}`);
    } else {
      setCreatedId(id);
      setCreatedData(newCert);
      setIsExisting(false);
    }

    setLoading(false);
  };

  const qrUrl = createdId ? `https://allygo.in/verify?id=${createdId}` : '';

  // ═══════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ═══════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-[#FBF5E9] flex items-center justify-center px-4">
        {/* BG */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.06] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#E8552E] flex items-center justify-center shadow-lg shadow-[#E8552E]/25">
                <span className="text-white font-black text-xl leading-none">A</span>
              </div>
              <div className="leading-tight">
                <div className="font-black text-[20px] tracking-tight text-[#1E1812]">
                  Ally<span className="text-[#E8552E]">Go</span>
                  <sup className="text-[10px] text-[#857A6C] ml-0.5">™</sup>
                </div>
                <div className="text-[10px] text-[#857A6C] font-semibold tracking-wider uppercase -mt-0.5">
                  Admin Console
                </div>
              </div>
            </div>
          </div>

          {/* login card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E8552E]/20 via-[#F2874C]/20 to-[#0E6B5E]/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(30,24,18,0.15)] border border-[#EADFC8] overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#E8552E] via-[#F2874C] to-[#0E6B5E]" />

              <div className="p-8">
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFE7DC] flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#E8552E]" />
                  </div>
                </div>

                <h2 className="text-[26px] font-black text-[#1E1812] text-center mb-1 tracking-tight">
                  Admin Access
                </h2>
                <p className="text-[13px] text-[#857A6C] text-center mb-7">
                  Enter the admin password to manage certificates
                </p>

                <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                  Password
                </label>
                <div className="relative mb-5">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full px-4 pr-12 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#B3A895] hover:text-[#4A4038]"
                  >
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {loginError && (
                  <div className="mb-5 px-4 py-3 rounded-xl bg-[#FCE4E1] border border-[#B42318]/20 flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#B42318] flex-shrink-0" />
                    <p className="text-[13px] text-[#B42318] font-semibold">{loginError}</p>
                  </div>
                )}

                <button
                  onClick={handleLogin}
                  disabled={!password}
                  className="w-full px-6 py-3.5 rounded-xl bg-[#E8552E] hover:bg-[#C5401D] disabled:bg-[#E8552E]/40 disabled:cursor-not-allowed text-white font-bold text-[14px] shadow-lg shadow-[#E8552E]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Sign In to Admin Panel
                </button>

                <p className="text-[11px] text-[#B3A895] text-center mt-5 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  Authorised AllyGo personnel only
                </p>
              </div>
            </div>
          </div>

          <p className="text-[12px] text-[#857A6C] text-center mt-6">
            © {new Date().getFullYear()} AllyGo · Admin Console
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // ADMIN PANEL
  // ═══════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen relative bg-[#FBF5E9] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8552E] opacity-[0.06] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0E6B5E] opacity-[0.05] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,24,18,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* TOP NAV */}
      <header className="relative z-10 px-6 sm:px-10 py-5 border-b border-[#EADFC8]/60 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8552E] flex items-center justify-center shadow-md shadow-[#E8552E]/25">
              <span className="text-white font-black text-lg leading-none">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-black text-[17px] tracking-tight text-[#1E1812]">
                Ally<span className="text-[#E8552E]">Go</span>
                <sup className="text-[10px] text-[#857A6C] ml-0.5">™</sup>
              </div>
              <div className="text-[10px] text-[#857A6C] font-semibold tracking-wider uppercase -mt-0.5">
                Admin Console
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/verify"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold text-[#4A4038] hover:text-[#E8552E] hover:bg-white transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Verify Portal
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold text-[#4A4038] hover:text-[#B42318] hover:bg-white transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 px-6 sm:px-10 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto">

          {/* Page header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8552E]/10 border border-[#E8552E]/20 mb-4">
              <Sparkles className="w-3 h-3 text-[#E8552E]" />
              <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#C5401D]">
                Certificate Management
              </span>
            </div>
            <h1 className="font-black text-[40px] sm:text-[48px] leading-[1.05] tracking-tight text-[#1E1812] mb-2">
              Issue a <span className="text-[#E8552E]">certificate</span>
            </h1>
            <p className="text-[15px] text-[#4A4038] max-w-xl">
              Create a new internship certificate or look up an existing one. Each certificate gets a unique ID and a scannable QR code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* ═══════ LEFT — FORM ═══════ */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E8552E]/15 via-[#F2874C]/15 to-[#0E6B5E]/15 rounded-3xl blur-xl opacity-50" />
                <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(30,24,18,0.12)] border border-[#EADFC8] overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-[#E8552E] via-[#F2874C] to-[#0E6B5E]" />

                  <div className="p-7 sm:p-9">

                    {/* Mode toggle */}
                    <div className="mb-7 p-1 bg-[#FDF8EC] rounded-xl border border-[#EADFC8] flex gap-1">
                      <button
                        onClick={() => setUseCustomId(false)}
                        className={
                          'flex-1 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-all flex items-center justify-center gap-2 ' +
                          (!useCustomId
                            ? 'bg-white text-[#1E1812] shadow-sm'
                            : 'text-[#857A6C] hover:text-[#4A4038]')
                        }
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Create New
                      </button>
                      <button
                        onClick={() => {
                          setUseCustomId(true);
                          setCreatedId('');
                          setCreatedData(null);
                        }}
                        className={
                          'flex-1 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-all flex items-center justify-center gap-2 ' +
                          (useCustomId
                            ? 'bg-white text-[#1E1812] shadow-sm'
                            : 'text-[#857A6C] hover:text-[#4A4038]')
                        }
                      >
                        <Hash className="w-3.5 h-3.5" />
                        Look Up Existing
                      </button>
                    </div>

                    {/* ─── Look Up Existing ─── */}
                    {useCustomId && (
                      <div className="space-y-5">
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                            Certificate ID
                          </label>
                          <div className="relative">
                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895]" />
                            <input
                              type="text"
                              placeholder="AG-INT-2025-0042"
                              value={customId}
                              onChange={(e) => setCustomId(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] font-mono text-[14px] tracking-wider focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                            />
                          </div>
                          <p className="text-[12px] text-[#857A6C] mt-2 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#E8552E]" />
                            We'll fetch the existing certificate and show its QR — no duplicate is created.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* ─── Create New ─── */}
                    {!useCustomId && (
                      <div className="space-y-5">
                        {/* Name */}
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                            Intern Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895]" />
                            <input
                              type="text"
                              placeholder="Priya Sharma"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        {/* Role */}
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                            Role / Designation *
                          </label>
                          <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895]" />
                            <input
                              type="text"
                              placeholder="Product Design Intern"
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        {/* Date range */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                              Start Date *
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895] pointer-events-none" />
                              <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                max={endDate || undefined}
                                className="w-full pl-11 pr-3 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                              End Date *
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895] pointer-events-none" />
                              <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                min={startDate || undefined}
                                className="w-full pl-11 pr-3 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Auto duration display */}
                        {durationText && durationText !== 'Invalid range' && (
                          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#FFE7DC] to-[#EDF7F4] border border-[#E8552E]/15">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-[#E8552E]" />
                            </div>
                            <div>
                              <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C]">
                                Auto-calculated duration
                              </div>
                              <div className="text-[14px] font-black text-[#1E1812]">{durationText}</div>
                            </div>
                          </div>
                        )}
                        {durationText === 'Invalid range' && (
                          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FCE4E1] border border-[#B42318]/20">
                            <AlertCircle className="w-4 h-4 text-[#B42318]" />
                            <span className="text-[13px] text-[#B42318] font-semibold">
                              End date must be after start date
                            </span>
                          </div>
                        )}

                        {/* Department + Performance */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                              Department <span className="text-[#B3A895] normal-case tracking-normal font-medium">· optional</span>
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895]" />
                              <input
                                type="text"
                                placeholder="Design"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full pl-11 pr-3 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] placeholder-[#B3A895] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#857A6C] mb-2.5">
                              Performance <span className="text-[#B3A895] normal-case tracking-normal font-medium">· optional</span>
                            </label>
                            <div className="relative">
                              <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B3A895] pointer-events-none z-10" />
                              <select
                                value={performance}
                                onChange={(e) => setPerformance(e.target.value)}
                                className="w-full pl-11 pr-3 py-3.5 rounded-xl border-2 border-[#EADFC8] bg-[#FDF8EC]/50 text-[#1E1812] text-[14px] focus:outline-none focus:border-[#E8552E] focus:bg-white transition-all appearance-none cursor-pointer"
                              >
                                <option>Outstanding</option>
                                <option>Excellent</option>
                                <option>Very Good</option>
                                <option>Good</option>
                                <option>Satisfactory</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {errorMsg && (
                      <div className="mt-5 px-4 py-3 rounded-xl bg-[#FCE4E1] border border-[#B42318]/20 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-[#B42318] flex-shrink-0 mt-0.5" />
                        <p className="text-[13px] text-[#B42318] font-semibold">{errorMsg}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="mt-7 flex gap-3">
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-1 px-6 py-3.5 rounded-xl bg-[#E8552E] hover:bg-[#C5401D] disabled:bg-[#E8552E]/40 disabled:cursor-not-allowed text-white font-bold text-[14px] shadow-lg shadow-[#E8552E]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {useCustomId ? 'Looking up…' : 'Creating…'}
                          </>
                        ) : (
                          <>
                            {useCustomId ? <Hash className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                            {useCustomId ? 'Fetch Certificate' : 'Create Certificate'}
                          </>
                        )}
                      </button>
                      {(createdId || name || customId) && (
                        <button
                          onClick={resetForm}
                          className="px-4 py-3.5 rounded-xl bg-[#FDF8EC] hover:bg-[#F5ECD9] border-2 border-[#EADFC8] text-[#4A4038] font-bold text-[14px] transition-all flex items-center justify-center gap-1.5"
                          title="Reset form"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════ RIGHT — RESULT / QR ═══════ */}
            <div className="lg:col-span-2">
              {createdId && createdData ? (
                <div className="lg:sticky lg:top-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#0E6B5E]/20 to-[#E8552E]/20 rounded-3xl blur-xl opacity-50" />
                    <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(30,24,18,0.12)] border border-[#EADFC8] overflow-hidden">

                      {/* Status header */}
                      <div className={'px-6 py-4 ' + (isExisting ? 'bg-[#B87514]' : 'bg-[#0E6B5E]')}>
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                            <CheckCircle2 className="relative w-6 h-6 text-white" fill="white" stroke={isExisting ? '#B87514' : '#0E6B5E'} strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-black text-[15px] leading-tight">
                              {isExisting ? 'Certificate Already Exists' : 'Certificate Created'}
                            </div>
                            <div className="text-white/75 text-[11px] font-medium">
                              {isExisting ? 'Showing existing record · No duplicate created' : 'Successfully saved to AllyGo'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Certificate ID */}
                        <div className="mb-5">
                          <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-1.5">
                            Certificate ID
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-[#FDF8EC] rounded-xl border border-[#EADFC8]">
                            <Hash className="w-4 h-4 text-[#E8552E] flex-shrink-0" />
                            <span className="font-mono text-[13px] text-[#1E1812] font-bold tracking-wider flex-1">
                              {createdId}
                            </span>
                            <button
                              onClick={() => copyToClipboard(createdId, 'id')}
                              className="p-1.5 rounded-lg hover:bg-white text-[#857A6C] hover:text-[#E8552E] transition-all"
                              title="Copy ID"
                            >
                              {copiedField === 'id' ? <Check className="w-4 h-4 text-[#0E6B5E]" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* QR */}
                        <div className="mb-5">
                          <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-2">
                            Verification QR Code
                          </div>
                          <div className="bg-gradient-to-br from-[#FFE7DC]/50 to-[#EDF7F4]/50 rounded-xl p-5 border border-[#EADFC8] flex flex-col items-center">
                            <div className="bg-white p-3 rounded-xl shadow-inner border border-[#EADFC8]">
                              <QRCodeCanvas
                                value={qrUrl}
                                size={180}
                                ref={qrRef}
                                level="H"
                                fgColor="#1E1812"
                                bgColor="#ffffff"
                              />
                            </div>
                            <div className="mt-3 px-3 py-1.5 bg-white rounded-full border border-[#EADFC8] flex items-center gap-1.5">
                              <ShieldCheck className="w-3 h-3 text-[#0E6B5E]" />
                              <span className="text-[10px] font-bold tracking-wider uppercase text-[#0A5349]">
                                Scan to Verify
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* QR URL */}
                        <div className="mb-5">
                          <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-1.5">
                            Verification URL
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-[#FDF8EC] rounded-xl border border-[#EADFC8]">
                            <span className="font-mono text-[11px] text-[#4A4038] flex-1 break-all">
                              {qrUrl}
                            </span>
                            <button
                              onClick={() => copyToClipboard(qrUrl, 'url')}
                              className="p-1.5 rounded-lg hover:bg-white text-[#857A6C] hover:text-[#E8552E] transition-all flex-shrink-0"
                              title="Copy URL"
                            >
                              {copiedField === 'url' ? <Check className="w-4 h-4 text-[#0E6B5E]" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Cert details preview */}
                        {createdData && (
                          <div className="mb-5 p-4 rounded-xl bg-[#FDF8EC]/50 border border-[#EADFC8] space-y-2">
                            <div className="text-[10px] font-bold tracking-wider uppercase text-[#857A6C] mb-1">
                              Certificate Details
                            </div>
                            {createdData.name && (
                              <div className="flex items-start gap-2 text-[12.5px]">
                                <User className="w-3.5 h-3.5 text-[#857A6C] mt-0.5" />
                                <div>
                                  <span className="text-[#857A6C]">Name:</span>{' '}
                                  <span className="font-bold text-[#1E1812]">{createdData.name}</span>
                                </div>
                              </div>
                            )}
                            {createdData.role && (
                              <div className="flex items-start gap-2 text-[12.5px]">
                                <Briefcase className="w-3.5 h-3.5 text-[#857A6C] mt-0.5" />
                                <div>
                                  <span className="text-[#857A6C]">Role:</span>{' '}
                                  <span className="font-bold text-[#1E1812]">{createdData.role}</span>
                                </div>
                              </div>
                            )}
                            {(createdData.start_date || createdData.duration) && (
                              <div className="flex items-start gap-2 text-[12.5px]">
                                <Calendar className="w-3.5 h-3.5 text-[#857A6C] mt-0.5" />
                                <div>
                                  <span className="text-[#857A6C]">Duration:</span>{' '}
                                  <span className="font-bold text-[#1E1812]">
                                    {createdData.start_date && createdData.end_date
                                      ? `${formatDate(createdData.start_date)} → ${formatDate(createdData.end_date)}`
                                      : createdData.duration}
                                  </span>
                                  {createdData.duration && createdData.start_date && (
                                    <span className="text-[#857A6C] block text-[11px] mt-0.5">
                                      ({createdData.duration})
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={downloadQR}
                            className="flex-1 px-4 py-3 rounded-xl bg-[#0E6B5E] hover:bg-[#0A5349] text-white font-bold text-[13px] shadow-lg shadow-[#0E6B5E]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Download QR
                          </button>
                          <a
                            href={qrUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-3 rounded-xl bg-[#FDF8EC] hover:bg-[#F5ECD9] border-2 border-[#EADFC8] text-[#4A4038] hover:text-[#E8552E] font-bold text-[13px] transition-all flex items-center justify-center gap-1.5"
                            title="Test verification page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // EMPTY STATE
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-[#EADFC8] p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFE7DC] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-[#E8552E]" />
                  </div>
                  <div className="text-[16px] font-black text-[#1E1812] mb-1.5">
                    Ready to Issue
                  </div>
                  <p className="text-[13px] text-[#857A6C] max-w-[260px] leading-relaxed">
                    Fill in the form to create a new certificate. The unique ID and QR code will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#EADFC8]/60 bg-white/40 backdrop-blur-sm mt-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-[#857A6C]">
            © {new Date().getFullYear()} AllyGo · Admin Console · Internal use only
          </p>
          <p className="text-[11.5px] text-[#857A6C] flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            Authenticated session
          </p>
        </div>
      </footer>
    </div>
  );
}
