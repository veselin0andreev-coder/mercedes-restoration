import React, { useState } from 'react';
import { Card } from './ui/card';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1662582315594-2f698857f142',
    title: 'The Beauty in Black',
    description: 'Classic Mercedes coupe styling at its finest'
  },
  {
    url: 'https://images.unsplash.com/photo-1662580426636-a41f8f08c1fc',
    title: 'Showroom Quality',
    description: 'Our goal: restore to pristine condition'
  },
  {
    url: 'https://images.unsplash.com/photo-1596717590324-f4183d9a4f72',
    title: 'Timeless Elegance',
    description: 'Black and white captures the vintage soul'
  },
  {
    url: 'https://images.unsplash.com/photo-1563108773-fddb66a4ce6f',
    title: 'The Three-Pointed Star',
    description: 'Symbol of engineering excellence'
  },
  {
    url: 'https://images.unsplash.com/photo-1643291265674-cf5c7cbe126b',
    title: 'Classic Silhouette',
    description: 'The iconic W124 profile'
  },
  {
    url: 'https://images.unsplash.com/photo-1662582037712-b93264c4693d',
    title: 'Interior Craftsmanship',
    description: 'Every detail matters in restoration'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">THE GALLERY</span>
          <h2 className="section-title">Beauty in Every Detail</h2>
          <p className="section-subtitle">
            Explore the timeless design of the Mercedes 124 300CE-24
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="gallery-card"
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image-container">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-image-title">{image.title}</h3>
                  <p className="gallery-image-description">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="gallery-dialog">
          {selectedImage && (
            <>
              <button 
                className="dialog-close"
                onClick={() => setSelectedImage(null)}
              >
                <X />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="dialog-image"
              />
              <div className="dialog-info">
                <h3 className="dialog-title">{selectedImage.title}</h3>
                <p className="dialog-description">{selectedImage.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
