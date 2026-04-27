import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useSearchParams } from 'react-router-dom';

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [inputId, setInputId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(false);
    setSearched(true);
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Verify Certificate</h1>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>

        {searched && (
          <div className="mt-6">
            {result ? (
              <div className="text-green-600">
                <p className="font-semibold text-lg">✅ Certificate Verified</p>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Role:</strong> {result.role}</p>
                <p><strong>Duration:</strong> {result.duration}</p>
              </div>
            ) : (
              <p className="text-red-600 font-semibold text-lg">
                ❌ Invalid Certificate ID
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}