import React from 'react';
import { Card } from './ui/card';
import { Heart, Wrench, Star } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="story-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">THE DREAM</span>
          <h2 className="section-title">A Love Story 15 Years in the Making</h2>
        </div>

        <div className="story-grid">
          <div className="story-main">
            <img 
              src="https://images.unsplash.com/photo-1662582315594-2f698857f142" 
              alt="Mercedes 124 300CE24"
              className="story-image"
            />
            <div className="story-content">
              <p className="story-text">
                In 1990, Mercedes-Benz created a masterpiece: the 124 300CE-24 Coupé. 
                With its elegant black paint, timeless lines, and powerful 3.0-liter engine, 
                this two-door beauty represents the golden era of German engineering.
              </p>
              <p className="story-text">
                Fifteen years ago, I found her—neglected, forgotten, but still beautiful. 
                I made a promise: one day, she would shine again. Life happened, time passed, 
                but the dream never faded. Now it's time to make it real.
              </p>
              <p className="story-text">
                Every restoration project is a journey of passion, patience, and precision. 
                This isn't just about fixing a car—it's about preserving automotive history 
                and honoring the craftsmanship of a bygone era.
              </p>
            </div>
          </div>

          <div className="story-cards">
            <Card className="vintage-card">
              <div className="card-icon">
                <Heart className="icon-vintage" />
              </div>
              <h3 className="card-title">Pure Passion</h3>
              <p className="card-text">
                A 15-year love affair with one of Mercedes' finest creations
              </p>
            </Card>

            <Card className="vintage-card">
              <div className="card-icon">
                <Wrench className="icon-vintage" />
              </div>
              <h3 className="card-title">Authentic Restoration</h3>
              <p className="card-text">
                Period-correct parts and meticulous attention to original specifications
              </p>
            </Card>

            <Card className="vintage-card">
              <div className="card-icon">
                <Star className="icon-vintage" />
              </div>
              <h3 className="card-title">Timeless Beauty</h3>
              <p className="card-text">
                Preserving automotive heritage for future generations
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
