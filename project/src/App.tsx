import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JobCategories from './components/JobCategories';
import JobListings from './components/JobListings';
import FeaturedCompanies from './components/FeaturedCompanies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <JobCategories />
      <JobListings />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
}

export default App;