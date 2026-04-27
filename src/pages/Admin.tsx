import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { QRCodeCanvas } from 'qrcode.react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const [createdId, setCreatedId] = useState('');
  const [customId, setCustomId] = useState('');
  const [useCustomId, setUseCustomId] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const qrRef = useRef<HTMLCanvasElement | null>(null);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('❌ Wrong password');
    }
  };

  const generateId = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(100 + Math.random() * 900);
    return `AG-INT-${year}-${random}`;
  };

  // ✅ DOWNLOAD QR
  const downloadQR = () => {
    if (!qrRef.current) return;

    const url = qrRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `${createdId}-qr.png`;
    link.click();
  };

  const handleSubmit = async () => {
    setErrorMsg('');

    if (!name || !role || !duration) {
      setErrorMsg('❌ Fill all fields');
      return;
    }

    if (useCustomId && !customId) {
      setErrorMsg('❌ Enter existing Certificate ID');
      return;
    }

    setLoading(true);

    const id = useCustomId ? customId.trim() : generateId();

    // 🔍 Check if exists
    const { data: existing } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', id)
      .single();

    if (existing) {
      setCreatedId(id);
      setLoading(false);
      return;
    }

    // ➕ Insert new
    const { error } = await supabase.from('certificates').insert([
      { id, name, role, duration },
    ]);

    if (error) {
      setErrorMsg('❌ Error creating certificate');
    } else {
      setCreatedId(id);
      setName('');
      setRole('');
      setDuration('');
      setCustomId('');
      setUseCustomId(false);
    }

    setLoading(false);
  };

  const qrUrl = createdId
    ? `https://allygo.in/verify?id=${createdId}`
    : '';

  // 🔐 LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // 🔓 ADMIN PANEL
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useCustomId}
              onChange={(e) => setUseCustomId(e.target.checked)}
            />
            Use existing Certificate ID
          </label>
        </div>

        {useCustomId && (
          <input
            type="text"
            placeholder="Enter existing ID"
            value={customId}
            onChange={(e) => setCustomId(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />
        )}

        <input
          type="text"
          placeholder="Intern Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? 'Creating...' : 'Create Certificate'}
        </button>

        {errorMsg && (
          <p className="text-red-600 mt-3 text-center">{errorMsg}</p>
        )}

        {/* ✅ RESULT + QR */}
        {createdId && (
          <div className="mt-6 text-center">
            <p className="text-green-600 font-semibold mb-2">
              ✅ {createdId}
            </p>

            <QRCodeCanvas value={qrUrl} size={200} ref={qrRef} />

            <p className="text-sm mt-2 break-all">{qrUrl}</p>

            {/* 🔥 DOWNLOAD BUTTON */}
            <button
              onClick={downloadQR}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Download QR
            </button>
          </div>
        )}
      </div>
    </div>
  );
}