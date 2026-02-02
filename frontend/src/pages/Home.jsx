import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import AnimatedTimeline from '../components/AnimatedTimeline';
import DonationSection from '../components/DonationSection';
import Gallery from '../components/Gallery';
import ProgressTracker from '../components/ProgressTracker';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="vintage-page">
      <Hero />
      <Story />
      <AnimatedTimeline />
      <DonationSection />
      <Gallery />
      <ProgressTracker />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
