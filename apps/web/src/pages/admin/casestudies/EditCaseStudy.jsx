import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';
import { toast } from 'sonner';

export default function EditCaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [currentPdfName, setCurrentPdfName] = useState('');
  const [file, setFile] = useState(null); // new PDF, optional
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const inp = 'w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm';
  const label = 'text-sm font-medium block mb-1';
  const section = 'bg-white p-6 rounded-xl border flex flex-col gap-4';

  useEffect(() => {
    apiServerClient.get(`/casestudies/id/${id}`)
      .then(({ data }) => {
        setTitle(data.title || '');
        setIsPublished(!!data.isPublished);
        setCurrentPdfName(data.pdfFileName || '');
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load case study');
      })
      .finally(() => setLoading(false));
  }, [id]);

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

    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('isPublished', isPublished);
    if (file) {
      formData.append('pdfFile', file);
    }

    try {
      setSaving(true);
      await apiServerClient.put(`/casestudies/${id}`, formData);
      toast.success('Case study updated successfully');
      navigate('/admin/casestudies');
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to update');
      toast.error('Failed to update case study', {
        description: err?.response?.data?.error || 'Please try again.',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  if (error && !title) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={() => navigate('/admin/casestudies')} className="text-sm underline">
            Back to case studies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
        <span>dgstream / admin</span>
        <button onClick={() => navigate('/admin/casestudies')}>← Back to case studies</button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">Edit Case Study</h1>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={section}>
            <div>
              <label className={label}>Title *</label>
              <input
                required
                className={inp}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className={label}>Current PDF</label>
              <p className="text-sm text-gray-600">{currentPdfName || 'None'}</p>
            </div>

            <div>
              <label className={label}>Replace PDF (optional)</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className={inp}
              />
              {file && (
                <p className="text-xs text-gray-500 mt-1">New file: {file.name}</p>
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
            disabled={saving}
            className="bg-gray-900 text-white py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}