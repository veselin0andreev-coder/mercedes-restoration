import React from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToDonation = () => {
    document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">EST. 1990</div>
        <h1 className="hero-title">
          Help Restore a Legend
        </h1>
        <p className="hero-subtitle">
          Mercedes-Benz 124 300CE-24 Coupé
        </p>
        <p className="hero-description">
          A 15-year dream to bring this iconic black beauty back to life. 
          Every contribution brings us closer to perfection.
        </p>
        <div className="hero-buttons">
          <Button 
            onClick={scrollToDonation}
            className="vintage-button-primary"
            size="lg"
          >
            Support This Dream
          </Button>
          <Button 
            variant="outline"
            className="vintage-button-outline"
            size="lg"
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read The Story
          </Button>
        </div>
        <div className="hero-scroll-indicator" onClick={scrollToDonation}>
          <ArrowDown className="scroll-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
