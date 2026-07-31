import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Preloader } from './components/Loader/Preloader';

// Pages
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { ServiceDetail } from './pages/Services/ServiceDetail';
import { BridalPackages } from './pages/BridalPackages/BridalPackages';
import { Gallery } from './pages/Gallery/Gallery';
import { TestimonialsPage } from './pages/Testimonials/TestimonialsPage';
import { Blog } from './pages/Blog/Blog';
import { BlogDetail } from './pages/Blog/BlogDetail';
import { Contact } from './pages/Contact/Contact';
import { BookAppointment } from './pages/BookAppointment/BookAppointment';
import { NotFound } from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="bridal-packages" element={<BridalPackages />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
