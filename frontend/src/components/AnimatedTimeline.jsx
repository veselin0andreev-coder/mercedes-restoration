import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';

const timelineData = [
  {
    year: '2010',
    title: 'The Dream Begins',
    description: 'Found this beauty in a garage. "I\'ll fix it this summer!" Famous last words...',
    emotion: '😍',
    status: 'optimistic'
  },
  {
    year: '2011-2012',
    title: 'Life Happens',
    description: 'Bought all the parts! They\'re still in boxes. Very organized boxes.',
    emotion: '📦',
    status: 'planning'
  },
  {
    year: '2013-2015',
    title: 'The Great Excuse Era',
    description: '"I\'ll start when weather gets better." Checked weather: Still not perfect.',
    emotion: '☔',
    status: 'waiting'
  },
  {
    year: '2016-2018',
    title: 'YouTube University',
    description: 'Watched 10,000 restoration videos. Now I\'m DEFINITELY ready. Tomorrow.',
    emotion: '🎓',
    status: 'learning'
  },
  {
    year: '2019',
    title: 'The False Start',
    description: 'Took off one wheel. That counts as progress! Celebrated with 6-month break.',
    emotion: '🔧',
    status: 'progress'
  },
  {
    year: '2020-2021',
    title: 'Pandemic Excuses',
    description: 'Perfect time to restore... or perfect time to binge Netflix. Chose wisely.',
    emotion: '🏠',
    status: 'lockdown'
  },
  {
    year: '2022-2023',
    title: 'Serious Planning Phase',
    description: 'Made spreadsheets. Very detailed spreadsheets. Car still in garage.',
    emotion: '📊',
    status: 'organizing'
  },
  {
    year: '2024',
    title: 'The Wake-Up Call',
    description: 'Realized I\'ve been dreaming for 15 YEARS! Maybe I need help?',
    emotion: '😱',
    status: 'revelation'
  },
  {
    year: '2025',
    title: 'YOU Are Here!',
    description: 'Finally asking for help. Together we can make this happen! For real this time!',
    emotion: '🚀',
    status: 'hopeful'
  }
];

const AnimatedTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">THE JOURNEY</span>
          <h2 className="section-title">15 Years of "I'll Start Tomorrow"</h2>
          <p className="section-subtitle">
            A hilariously honest timeline of dreams, excuses, and eternal optimism
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''} ${item.status}`}
            >
              <div className="timeline-marker">
                <span className="timeline-emoji">{item.emotion}</span>
              </div>
              <Card className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="timeline-cta">
          <p className="timeline-cta-text">
            After 15 years of dreaming, it's time to make it happen. Will you help end this beautiful procrastination story?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
