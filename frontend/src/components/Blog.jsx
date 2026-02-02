import React from 'react';
import { Card } from './ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const blogPosts = [
  {
    date: 'January 15, 2025',
    author: 'Project Owner',
    title: 'Finding the Right Parts for a 1990 Mercedes',
    excerpt: 'After 15 years of "research" (procrastination), I\'ve finally located the perfect parts suppliers. Here\'s what I learned about sourcing authentic Mercedes components...',
    image: 'https://images.unsplash.com/photo-1563108773-fddb66a4ce6f',
    readTime: '5 min read'
  },
  {
    date: 'January 8, 2025',
    author: 'Project Owner',
    title: 'Why the 124 300CE-24 is Special',
    excerpt: 'The 300CE-24 wasn\'t just another Mercedes. With its sportline package and advanced multi-valve engine, it represented the pinnacle of 1990s luxury coupes...',
    image: 'https://images.unsplash.com/photo-1643291265674-cf5c7cbe126b',
    readTime: '7 min read'
  },
  {
    date: 'December 28, 2024',
    author: 'Project Owner',
    title: 'The First Step: Finally!',
    excerpt: 'After a decade and a half of dreaming, I\'ve taken the first real step. The car is now in the workshop, and we\'re starting the assessment phase. The journey begins!',
    image: 'https://images.unsplash.com/photo-1662582315594-2f698857f142',
    readTime: '4 min read'
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">RESTORATION DIARY</span>
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">
            Follow the restoration journey, challenges, and victories
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <Card key={index} className="blog-card">
              <div className="blog-image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-meta-item">
                    <Calendar className="meta-icon" />
                    {post.date}
                  </span>
                  <span className="blog-meta-item">
                    <User className="meta-icon" />
                    {post.author}
                  </span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Button variant="ghost" className="blog-read-more">
                  Read More
                  <ArrowRight className="arrow-icon" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
