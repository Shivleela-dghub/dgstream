import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';

export default function NewBlog() {
  const navigate              = useNavigate();
  const [form, setForm]       = useState({
    title: '', author: '', category: '',
    readTime: '', status: 'draft', content: ''
  });
  const [sections, setSections] = useState([{ heading: '', body: '' }]);
  const [coverImage, setCover]  = useState(null);
  const [preview, setPreview]   = useState(null);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const updateSection = (i, field, value) => {
    const updated = [...sections];
    updated[i][field] = value;
    setSections(updated);
  };

  const addSection    = () => setSections([...sections, { heading: '', body: '' }]);
  const removeSection = (i) => setSections(sections.filter((_, idx) => idx !== i));

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) { setCover(file); setPreview(URL.createObjectURL(file)); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      formData.append('sections', JSON.stringify(sections.filter(s => s.heading || s.body)));
      if (coverImage) formData.append('coverImage', coverImage);

      await apiServerClient.post('/blogs', formData);
      navigate('/admin/blogs');
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
        <span className="font-medium text-sm">dgstream / admin</span>
        <button onClick={() => navigate('/admin/blogs')}
          className="text-sm text-gray-300 hover:text-white transition-colors">
          ← Back to posts
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">New Blog Post</h1>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Basic Info */}
          <Card title="Basic Info">
            <Field label="Title *">
              <input required className={inp} placeholder="Blog title"
                value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Author *">
              <input required className={inp} placeholder="e.g. Dr. Sarah Chen"
                value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Category">
                <input className={inp} placeholder="e.g. Healthcare"
                  value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
              </Field>
              <Field label="Read Time">
                <input className={inp} placeholder="e.g. 6 min read"
                  value={form.readTime} onChange={e => setForm({ ...form, readTime: e.target.value })} />
              </Field>
            </div>
            <Field label="Status">
              <select className={inp} value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value })}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </Field>
          </Card>

          {/* Cover Image */}
          <Card title="Cover Image">
            <input type="file" accept="image/*" onChange={handleCoverChange}
              className="text-sm text-gray-500" />
            {preview && (
              <img src={preview} alt="preview"
                className="mt-3 w-full h-48 object-cover rounded-lg" />
            )}
          </Card>

          {/* Intro */}
          <Card title="Intro Paragraph">
            <textarea required className={`${inp} h-28 resize-none`}
              placeholder="Opening paragraph of your blog..."
              value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
          </Card>

          {/* Sections */}
          <Card title="Content Sections">
            <div className="flex flex-col gap-3">
              {sections.map((sec, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">Section {i + 1}</span>
                    {sections.length > 1 && (
                      <button type="button" onClick={() => removeSection(i)}
                        className="text-red-400 hover:text-red-600 text-xl leading-none">×</button>
                    )}
                  </div>
                  <Field label="Heading">
                    <input className={inp} placeholder="e.g. 1. Dominate Local SEO"
                      value={sec.heading} onChange={e => updateSection(i, 'heading', e.target.value)} />
                  </Field>
                  <Field label="Body">
                    <textarea className={`${inp} h-24 resize-none mt-2`} placeholder="Section paragraph..."
                      value={sec.body} onChange={e => updateSection(i, 'body', e.target.value)} />
                  </Field>
                </div>
              ))}
            </div>
            <button type="button" onClick={addSection}
              className="mt-3 w-full py-2.5 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
              + Add Section
            </button>
          </Card>

          <button type="submit" disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors">
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>

        </form>
      </div>
    </div>
  );
}

// ── Reusable components ──────────────────────
const inp = 'w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400';

const Card = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">{title}</p>
    <div className="flex flex-col gap-4">{children}</div>
  </div>
);

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-medium text-gray-500">{label}</label>
    {children}
  </div>
);