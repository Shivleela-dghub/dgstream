import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';

// Public pages
import HomePage           from './pages/HomePage.jsx';
import HealthcarePage     from './pages/HealthcarePage.jsx';
import RetailPage         from './pages/RetailPage.jsx';
import ServicesPage       from './pages/ServicesPage.jsx';
import AboutPage          from './pages/AboutPage.jsx';
import ContactPage        from './pages/ContactPage.jsx';
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import BlogsPage          from './pages/BlogsPage.jsx';
import BlogDetailPage     from './pages/BlogDetailPage.jsx';

// Admin pages
import AdminLogin     from './pages/admin/login.jsx';
import AdminDashboard from './pages/admin/index.jsx';
import AdminBlogs     from './pages/admin/blogs/index.jsx';
import NewBlog        from './pages/admin/blogs/new.jsx';
import EditBlog       from './pages/admin/blogs/[id]/edit.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ── Public routes ──────────────────── */}
        <Route path="/"               element={<HomePage />} />
        <Route path="/healthcare"     element={<HealthcarePage />} />
        <Route path="/retail"         element={<RetailPage />} />
        <Route path="/services"       element={<ServicesPage />} />
        <Route path="/about"          element={<AboutPage />} />
        <Route path="/contact"        element={<ContactPage />} />
        <Route path="/blogs"          element={<BlogsPage />} />
        <Route path="/blog/:id"       element={<BlogDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />

        {/* ── Admin routes ───────────────────── */}
        <Route path="/admin/login"          element={<AdminLogin />} />
        <Route path="/admin"                element={<AdminDashboard />} />
        <Route path="/admin/blogs"          element={<AdminBlogs />} />
        <Route path="/admin/blogs/new"      element={<NewBlog />} />
        <Route path="/admin/blogs/:id/edit" element={<EditBlog />} />

        {/* ── 404 ────────────────────────────── */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;