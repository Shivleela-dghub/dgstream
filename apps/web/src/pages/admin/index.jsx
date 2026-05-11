import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats]   = useState({ total: 0, published: 0, draft: 0 });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { navigate('/admin/login'); return; }

    apiServerClient.get('/blogs/all')
      .then(({ data }) => {
        const blogs     = data.blogs;
        const published = blogs.filter(b => b.status === 'published').length;
        const draft     = blogs.filter(b => b.status === 'draft').length;
        setStats({ total: blogs.length, published, draft });
        setRecent(blogs.slice(0, 5));
      })
      .catch(() => navigate('/admin/login'))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-gray-900 text-white px-6 h-14 flex items-center justify-between">
        <span className="font-medium text-sm">dgstream / admin</span>
        <div className="flex gap-4">
          <button onClick={() => navigate('/admin/blogs')}
            className="text-sm text-gray-300 hover:text-white transition-colors">
            Manage Blogs
          </button>
          <button onClick={logout}
            className="text-sm text-gray-300 hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Blogs', value: stats.total,     bg: 'bg-blue-50',   text: 'text-blue-700'   },
            { label: 'Published',   value: stats.published, bg: 'bg-green-50',  text: 'text-green-700'  },
            { label: 'Drafts',      value: stats.draft,     bg: 'bg-yellow-50', text: 'text-yellow-700' },
          ].map(stat => (
            <div key={stat.label} className={`${stat.bg} ${stat.text} rounded-xl p-5`}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-medium text-gray-900">Recent Posts</h2>
            <button onClick={() => navigate('/admin/blogs/new')}
              className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors">
              + New Post
            </button>
          </div>

          {loading ? (
            <div className="p-6 space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {recent.map(blog => (
                <div key={blog._id} className="flex items-center justify-between px-6 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{blog.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {blog.author} · {new Date(blog.createdAt).toDateString()}
                    </p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    blog.status === 'published'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {blog.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}