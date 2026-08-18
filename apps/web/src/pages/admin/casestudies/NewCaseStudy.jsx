import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';

export default function NewCaseStudy() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inp = 'w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm';
  const label = 'text-sm font-medium block mb-1';
  const section = 'bg-white p-6 rounded-xl border flex flex-col gap-4';

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type !== 'application/pdf') {
      setError('Please select a PDF file.');
      setFile(null);
      return;
    }
    setError('');
    setFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Please enter a case study title.');
      return;
    }
    if (!file) {
      setError('Please choose a PDF to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('pdfFile', file);
    formData.append('isPublished', isPublished);

    try {
      setLoading(true);
      await apiServerClient.post('/casestudies', formData);
      navigate('/admin/casestudies');
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to create case study');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
        <span>dgstream / admin</span>
        <button onClick={() => navigate('/admin/casestudies')}>← Back to case studies</button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">New Case Study</h1>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={section}>
            <div>
              <label className={label}>Title *</label>
              <input
                required
                className={inp}
                placeholder="e.g. Advenzo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className={label}>Case Study PDF *</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className={inp}
              />
              {file && (
                <p className="text-xs text-gray-500 mt-1">Selected: {file.name}</p>
              )}
            </div>

            <div>
              <label className={label}>Status</label>
              <select
                className={inp}
                value={isPublished ? 'published' : 'draft'}
                onChange={(e) => setIsPublished(e.target.value === 'published')}
              >
                <option value="draft">Draft (not visible on site)</option>
                <option value="published">Published (live on site)</option>
              </select>
            </div>
          </div>

          <button
            disabled={loading}
            className="bg-gray-900 text-white py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Save Case Study'}
          </button>
        </form>
      </div>
    </div>
  );
}