import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/navbar/Navbar';
import Footer from './components/ui/footer/Footer';
import Loader from './components/ui/loader/loader'; 
import BackToTop from './components/backToTop/BackToTop.jsx';
const HomePage = lazy(() => import('./pages/home/Home'));
const AboutPage = lazy(() => import('./pages/about/About'));
const ServicesPage = lazy(() => import('./pages/services/Services'));
const ContactUsPage = lazy(() => import('./pages/contact/ContactUsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx')); 

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />  
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;