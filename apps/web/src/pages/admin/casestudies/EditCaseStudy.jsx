import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';
import { Plus, X } from 'lucide-react';
import { INDUSTRIES } from '@/lib/industryTypes'; // or wherever you put it

const emptyForm = {
  title: '',
  industry: '',
  location: '',
  resultLabel: '',
  result: '',
  tagline: '',
  heroImage: '',
  websiteUrl: '',
  isPublished: false,
  about: [''],
  challenge: { heading: '', intro: '', points: [''] },
  solution: { heading: '', intro: '', points: [''] },
  testimonial: { quote: '', author: '', role: '' },
};

// merges a fetched doc into the full form shape, so old/partial
// case studies (missing challenge, solution, testimonial, etc.)
// don't break the form or the .map() calls below
function toFormShape(doc) {
  return {
    ...emptyForm,
    ...doc,
    about: doc.about?.length ? doc.about : [''],
    challenge: {
      heading: doc.challenge?.heading || '',
      intro: doc.challenge?.intro || '',
      points: doc.challenge?.points?.length ? doc.challenge.points : [''],
    },
    solution: {
      heading: doc.solution?.heading || '',
      intro: doc.solution?.intro || '',
      points: doc.solution?.points?.length ? doc.solution.points : [''],
    },
    testimonial: {
      quote: doc.testimonial?.quote || '',
      author: doc.testimonial?.author || '',
      role: doc.testimonial?.role || '',
    },
  };
}

export default function EditCaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(null); // null while loading
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    apiServerClient.get(`/casestudies/id/${id}`) // see note below re: route
      .then(({ data }) => setForm(toFormShape(data)))
      .catch(err => {
        console.error(err);
        setError('Failed to load case study');
      });
  }, [id]);

  const inp = 'w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm';
  const label = 'text-sm font-medium block mb-1';
  const section = 'bg-white p-6 rounded-xl border flex flex-col gap-4';

  const setField = (key, value) => setForm(f => ({ ...f, [key]: value }));
  const setNested = (group, key, value) =>
    setForm(f => ({ ...f, [group]: { ...f[group], [key]: value } }));

  const addItem = (path) => {
    setForm(f => {
      if (path === 'about') return { ...f, about: [...f.about, ''] };
      return { ...f, [path]: { ...f[path], points: [...f[path].points, ''] } };
    });
  };
  const removeItem = (path, index) => {
    setForm(f => {
      if (path === 'about') {
        const next = f.about.filter((_, i) => i !== index);
        return { ...f, about: next.length ? next : [''] };
      }
      const nextPoints = f[path].points.filter((_, i) => i !== index);
      return { ...f, [path]: { ...f[path], points: nextPoints.length ? nextPoints : [''] } };
    });
  };
  const updateItem = (path, index, value) => {
    setForm(f => {
      if (path === 'about') {
        const next = [...f.about];
        next[index] = value;
        return { ...f, about: next };
      }
      const next = [...f[path].points];
      next[index] = value;
      return { ...f, [path]: { ...f[path], points: next } };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const payload = {
        ...form,
        about: form.about.map(s => s.trim()).filter(Boolean),
        challenge: { ...form.challenge, points: form.challenge.points.map(s => s.trim()).filter(Boolean) },
        solution: { ...form.solution, points: form.solution.points.map(s => s.trim()).filter(Boolean) },
      };
      await apiServerClient.put(`/casestudies/${id}`, payload);
      navigate('/admin/casestudies');
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to update');
    } finally {
      setSaving(false);
    }
  };

  const Repeater = ({ path, values, placeholder, textarea }) => (
    <div className="flex flex-col gap-2">
      {values.map((val, i) => (
        <div key={i} className="flex gap-2 items-start">
          {textarea ? (
            <textarea
              className={inp}
              rows={2}
              placeholder={placeholder}
              value={val}
              onChange={e => updateItem(path, i, e.target.value)}
            />
          ) : (
            <input
              className={inp}
              placeholder={placeholder}
              value={val}
              onChange={e => updateItem(path, i, e.target.value)}
            />
          )}
          <button
            type="button"
            onClick={() => removeItem(path, i)}
            className="p-2.5 border-2 border-gray-200 rounded-lg text-gray-400 hover:text-red-500 hover:border-red-200 shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addItem(path)}
        className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 self-start"
      >
        <Plus size={14} /> Add {path === 'about' ? 'paragraph' : 'point'}
      </button>
    </div>
  );

  if (error && !form) {
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

  if (!form) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
        Loading...
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

          {/* Basics */}
          <div className={section}>
            <h2 className="font-semibold text-gray-900">Basics</h2>
            <div>
              <label className={label}>Title *</label>
              <input required className={inp}
                value={form.title} onChange={e => setField('title', e.target.value)} />
            </div>
            <div>
                <label className={label}>Industry</label>
                <select className={inp}
                    value={form.industry} onChange={e => setField('industry', e.target.value)}>
                    <option value="">Select an industry</option>
                    {INDUSTRIES.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                    ))}
                </select>
            </div>
            <div>
              <label className={label}>Location</label>
              <input className={inp}
                value={form.location} onChange={e => setField('location', e.target.value)} />
            </div>
            <div>
              <label className={label}>Tagline</label>
              <textarea className={inp} rows={2}
                value={form.tagline} onChange={e => setField('tagline', e.target.value)} />
            </div>
            <div>
              <label className={label}>Hero Image URL</label>
              <input className={inp}
                value={form.heroImage} onChange={e => setField('heroImage', e.target.value)} />
            </div>
            <div>
              <label className={label}>Website URL</label>
              <input className={inp}
                value={form.websiteUrl} onChange={e => setField('websiteUrl', e.target.value)} />
            </div>
            <div>
              <label className={label}>Result Label</label>
              <input className={inp}
                value={form.resultLabel} onChange={e => setField('resultLabel', e.target.value)} />
            </div>
            <div>
              <label className={label}>Result *</label>
              <input required className={inp}
                value={form.result} onChange={e => setField('result', e.target.value)} />
            </div>
       <div>
  <label className={label}>Status</label>
  <select
    className={inp}
    value={form.isPublished ? 'published' : 'draft'}
    onChange={e => setField('isPublished', e.target.value === 'published')}
  >
    <option value="draft">Draft (not visible on site)</option>
    <option value="published">Published (live on site)</option>
  </select>
</div>
          </div>

          {/* About */}
          <div className={section}>
            <h2 className="font-semibold text-gray-900">About</h2>
            <Repeater path="about" values={form.about} placeholder="About paragraph..." textarea />
          </div>

          {/* Challenge */}
          <div className={section}>
            <h2 className="font-semibold text-gray-900">The Challenge</h2>
            <div>
              <label className={label}>Heading</label>
              <input className={inp}
                value={form.challenge.heading} onChange={e => setNested('challenge', 'heading', e.target.value)} />
            </div>
            <div>
              <label className={label}>Intro</label>
              <textarea className={inp} rows={3}
                value={form.challenge.intro} onChange={e => setNested('challenge', 'intro', e.target.value)} />
            </div>
            <div>
              <label className={label}>Points</label>
              <Repeater path="challenge" values={form.challenge.points} placeholder="Challenge point..." />
            </div>
          </div>

          {/* Solution */}
          <div className={section}>
            <h2 className="font-semibold text-gray-900">Our Solution</h2>
            <div>
              <label className={label}>Heading</label>
              <input className={inp}
                value={form.solution.heading} onChange={e => setNested('solution', 'heading', e.target.value)} />
            </div>
            <div>
              <label className={label}>Intro</label>
              <textarea className={inp} rows={3}
                value={form.solution.intro} onChange={e => setNested('solution', 'intro', e.target.value)} />
            </div>
            <div>
              <label className={label}>Points</label>
              <Repeater path="solution" values={form.solution.points} placeholder="Solution point..." />
            </div>
          </div>

          {/* Testimonial */}
          <div className={section}>
            <h2 className="font-semibold text-gray-900">Testimonial</h2>
            <div>
              <label className={label}>Quote</label>
              <textarea className={inp} rows={3}
                value={form.testimonial.quote} onChange={e => setNested('testimonial', 'quote', e.target.value)} />
            </div>
            <div>
              <label className={label}>Author</label>
              <input className={inp}
                value={form.testimonial.author} onChange={e => setNested('testimonial', 'author', e.target.value)} />
            </div>
            <div>
              <label className={label}>Role</label>
              <input className={inp}
                value={form.testimonial.role} onChange={e => setNested('testimonial', 'role', e.target.value)} />
            </div>
          </div>

          <button disabled={saving}
            className="bg-gray-900 text-white py-3 rounded-lg font-medium disabled:opacity-50">
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}