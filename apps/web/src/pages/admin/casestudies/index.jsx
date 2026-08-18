import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';
import { Helmet } from 'react-helmet-async';
import { DeleteCaseStudyButton } from './DeleteCaseStudy';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export default function AdminCasestudies() {
  const navigate = useNavigate();
  const [casestudies, setCasestudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { navigate('/admin/login'); return; }
    fetchCasestudies();
  }, []);

  const fetchCasestudies = async () => {
    try {
      const { data } = await apiServerClient.get('/casestudies/admin/all');
      setCasestudies(data || []);
    } catch (err) {
      console.error(err);
      setCasestudies([]);
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const togglePublish = async (cs) => {
    try {
      const { data } = await apiServerClient.patch(`/casestudies/${cs._id}/publish`, {
        isPublished: !cs.isPublished,
      });
      setCasestudies(casestudies.map(c => c._id === cs._id ? data : c));
    } catch {
      alert('Failed to update status');
    }
  };

  const deleteCasestudy = async (id) => {
    if (!confirm('Are you sure you want to delete this Case Study?')) return;
    try {
      await apiServerClient.delete(`/casestudies/${id}`);
      setCasestudies(casestudies.filter(b => b._id !== id));
      alert('Case study deleted successfully');
    } catch {
      alert('Failed to delete case study');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Case studies | DG Stream Admin</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
          <span className="font-medium text-sm">dgstream / admin</span>
          <div className="flex gap-4">
            <button onClick={() => navigate('/admin')}
              className="text-sm text-gray-300 hover:text-white transition-colors">
              Dashboard
            </button>
            <button onClick={logout}
              className="text-sm text-gray-300 hover:text-white transition-colors">
              Logout
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Case Studies</h1>
            <button onClick={() => navigate('/admin/casestudies/new')}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
              + New Case Study
            </button>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-white rounded-xl border border-gray-200 animate-pulse" />
              ))}
            </div>
          ) : casestudies.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-400 mb-4">No case studies yet</p>
              <button onClick={() => navigate('/admin/casestudies/new')}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                Create First Case study
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {['Title', 'PDF', 'Status', 'Date', 'Actions'].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {casestudies.map(cs => (
                    <tr key={cs._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 max-w-xs truncate">
                        {cs.title}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <a
                          href={`${API_BASE}${cs.pdfFile}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {cs.pdfFileName || 'View PDF'}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => togglePublish(cs)}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            cs.isPublished
                              ? 'bg-green-50 text-green-700'
                              : 'bg-yellow-50 text-yellow-700'
                          }`}
                        >
                          {cs.isPublished ? 'Published' : 'Draft — click to publish'}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {new Date(cs.createdAt).toDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate(`/admin/casestudies/${cs._id}/edit`)}
                            className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">
                            Edit
                          </button>
                         <DeleteCaseStudyButton
                            study={cs}
                            onDeleted={(id) => setCasestudies(prev => prev.filter(b => b._id !== id))}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}