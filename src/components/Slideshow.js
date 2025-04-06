import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  process.env.PUBLIC_URL + "/images/slideshow1.jpeg",
  process.env.PUBLIC_URL + "/images/slideshow2.jpeg",
  process.env.PUBLIC_URL + "/images/slideshow3.jpeg",
  process.env.PUBLIC_URL + "/images/slideshow4.jpeg",

];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-section"> {/* ← 修正ここ！ */}
      <div className="slideshow">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>
    </div>
  );
};

export default Slideshow;


