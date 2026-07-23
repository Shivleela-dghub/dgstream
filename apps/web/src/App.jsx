import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';

// Public pages
import HomePage           from './pages/HomePage.jsx';
import HealthcarePage     from './pages/HealthcarePage.jsx';
import RetailPage         from './pages/RetailPage.jsx';
import ServicesPage       from './pages/ServicesPage.jsx';
import ContactPage        from './pages/ContactPage.jsx';
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import BlogsPage          from './pages/BlogsPage.jsx';
import BlogDetailPage     from './pages/BlogDetailPage.jsx';
import ProductDesign from "./pages/ProductDesign";

// Admin pages
import AdminLogin     from './pages/admin/login.jsx';
import AdminDashboard from './pages/admin/index.jsx';
import AdminBlogs     from './pages/admin/blogs/index.jsx';
import NewBlog        from './pages/admin/blogs/new.jsx';
import EditBlog       from './pages/admin/blogs/[id]/edit.jsx';
import OurWork from './pages/OurWork.jsx';
import BrandGrowth from './pages/BrandGrowth.jsx';
import AboutUs from './pages/AboutUs.jsx';
import AdminCasestudies from './pages/admin/casestudies/index.jsx';
import NewCaseStudy from './pages/admin/casestudies/NewCaseStudy.jsx';


function App() {
  return (
    <Router>
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 3000,
        }}
      />
      <ScrollToTop />
      <Routes>
        {/* ── Public routes ──────────────────── */}
        <Route path="/"               element={<HomePage />} />
        <Route path="/healthcare"     element={<HealthcarePage />} />
        <Route path="/retail"         element={<RetailPage />} />
        <Route path="/services"       element={<ServicesPage />} />
        <Route path="/about"          element={<AboutUs />} />
        <Route path="/contact"        element={<ContactPage />} />
        <Route path="/blogs"          element={<BlogsPage />} />
        <Route path="/blog/:id"       element={<BlogDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/brand-growth" element={<BrandGrowth />} />


        {/* ── Admin routes ───────────────────── */}
        <Route path="/admin/login"          element={<AdminLogin />} />
        <Route path="/admin"                element={<AdminDashboard />} />
        <Route path="/admin/blogs"          element={<AdminBlogs />} />
        <Route path="/admin/blogs/new"      element={<NewBlog />} />
        <Route path="/admin/blogs/:id/edit" element={<EditBlog />} />

        <Route path="/admin/casestudies" element={<AdminCasestudies />} />
        <Route path="/admin/casestudies/new"      element={<NewCaseStudy />} />
        {/* ── 404 ────────────────────────────── */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;