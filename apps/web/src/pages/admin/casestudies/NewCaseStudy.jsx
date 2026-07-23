import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';

export default function NewCaseStudy() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', industry: '', resultLabel: '', result: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiServerClient.post('/casestudies', form);
      navigate('/admin/casestudies'); // back to list
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to create');
    } finally {
      setLoading(false);
    }
  };

  const inp = 'w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
        <span>dgstream / admin</span>
        <button onClick={() => navigate('/admin/casestudies')}>← Back to case studies</button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">New Case Study</h1>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border flex-col gap-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <input required className={inp} placeholder="Nova"
              value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium">Industry</label>
            <input className={inp} placeholder="Fashion & Retail"
              value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium">Result Label</label>
            <input className={inp} placeholder="LIFT IN ONLINE CONVERSION"
              value={form.resultLabel} onChange={e => setForm({...form, resultLabel: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium">Result *</label>
            <input required className={inp} placeholder="+38%"
              value={form.result} onChange={e => setForm({...form, result: e.target.value})} />
          </div>

          <button disabled={loading} className="bg-gray-900 text-white py-3 rounded-lg font-medium disabled:opacity-50">
            {loading ? 'Saving...' : 'Publish Case Study'}
          </button>
        </form>
      </div>
    </div>
  )
}