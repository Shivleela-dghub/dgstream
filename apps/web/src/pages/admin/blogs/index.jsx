import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServerClient from '@/lib/apiServerClient.js';

export default function AdminBlogs() {
  const navigate          = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { navigate('/admin/login'); return; }
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await apiServerClient.get('/blogs/all');
      setBlogs(data.blogs);
    } catch {
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    try {
      await apiServerClient.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(b => b._id !== id));
    } catch {
      alert('Failed to delete blog');
    }
  };

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
          <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
          <button onClick={() => navigate('/admin/blogs/new')}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            + New Post
          </button>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-white rounded-xl border border-gray-200 animate-pulse" />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-400 mb-4">No blogs yet</p>
            <button onClick={() => navigate('/admin/blogs/new')}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
              Create First Blog
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Title', 'Author', 'Category', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogs.map(blog => (
                  <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 max-w-xs truncate">
                      {blog.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{blog.author}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{blog.category}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        blog.status === 'published'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-400">
                      {new Date(blog.createdAt).toDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/blogs/${blog._id}/edit`)}
                          className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBlog(blog._id)}
                          className="text-xs px-3 py-1.5 border border-red-200 rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                          Delete
                        </button>
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
  );
}