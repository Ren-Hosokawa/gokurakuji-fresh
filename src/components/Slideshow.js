// src/components/Slideshow.js
import React, { useState, useEffect } from 'react';
// import './Slideshow.css';

const images = [
  "/images/slideshow1.jpeg",
  "/images/slideshow2.jpeg",
  "/images/slideshow3.jpeg"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 150000); // 15秒ごとにスライドを切り替え

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;

