import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './pages/Home';
import AboutSection from './pages/AboutSection';
import TeamSection from './pages/TeamSection';
import ServicesGrid from './pages/Service';
import Slide from './Components/Slide';
import CapturedInAction from './pages/CapturedInAction';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';
import ContactUsPage from './pages/ContactUs';
import CompanyDetailPage from './pages/CompanyDetailPage';
import IndustriesServed from './pages/IndustriesServed';
import Testimonials2 from './pages/Testimonials2';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" className="pt-24">
                <HeroSection />
              </div>
              <div id="about-us">
                <AboutSection />
              </div>
              <div id="our-team">
                <TeamSection />
              </div>
              {/* <div id="services">
                <ServicesGrid />
              </div> */}
              <div id="contact-us">
                <ContactUsPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/success-stories" element={<Slide />} />
        <Route path="/success-stories/:companySlug" element={<CompanyDetailPage />} />
        <Route path="/industries-served" element={<IndustriesServed />} />
        <Route path="/captured-actions" element={<CapturedInAction />} />
        <Route path="/testimonials" element={<Testimonials2 />} />
      </Routes>
    </Router>
  );
}

export default App;
