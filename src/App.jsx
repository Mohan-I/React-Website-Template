import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Global styles and font imports
import Navbar from './components/ui/navbar/Navbar';
import Footer from './components/ui/footer/Footer';
import Loader from './components/ui/loader/loader'; // Assuming this is a full-screen loading component

// 1. Code Splitting / Lazy Loading:
// This loads the component code only when the user navigates to that page,
// improving the initial loading time of the application.
const HomePage = lazy(() => import('./pages/home/Home'));
const AboutPage = lazy(() => import('./pages/about/About'));
const ServicesPage = lazy(() => import('./pages/services/Services'));
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx')); // Added a standard 404 page

const App = () => {
  return (
    // 2. Wrap the entire application in the Router
    <BrowserRouter>
      {/* <Loader /> - Keep this outside the main layout if it's an initial preloader */}
      
      {/* Navbar stays outside the Routes, so it's always visible */}
      <Navbar />

      <main className="main-content">
        {/* 3. Suspense for Fallback UI: 
            Shows the Loader component while the lazy-loaded page components are being fetched. */}
        <Suspense fallback={<Loader />}>
          
          {/* 4. Define the Application Routes */}
          <Routes>
            {/* Index/Default Route */}
            <Route path="/" element={<HomePage />} />
            
            <Route path="/about" element={<AboutPage />} />
            
            <Route path="/services" element={<ServicesPage />} />

            {/* Catch-all Route for 404 Not Found pages */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer stays outside the Routes, so it's always visible */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;