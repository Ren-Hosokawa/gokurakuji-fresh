// src/components/Main.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Slideshow from './Slideshow';
import FadeInSection from './FadeInSection';

const slideshowImages = [
  "/images/slideshow1.jpeg",
  "/images/slideshow2.jpeg",
  "images/slideshow3.jpeg"
];

const clickableItems = [
  {
    id: 1,
    title: "極楽寺について",
    image: process.env.PUBLIC_URL + "/images/temple.jpeg",
    link: "#about"
  },
  {
    id: 2,
    title: "供養・ご祈祷",
    image: process.env.PUBLIC_URL + "/images/main_pray.jpeg",
    link: "#prayers"
  },
  {
    id: 3,
    title: "お墓",
    image: process.env.PUBLIC_URL + "/images/main_tombs.jpeg",
    link: "#tombs"
  },
  {
    id: 4,
    title: "お問い合わせ",
    image: process.env.PUBLIC_URL + "/images/main_contact.jpeg",
    link: "#contact"
  }
];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToEvent = (id) => {
    navigate(`/event#${id}`);
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Slideshow />

      <div className="main-content container">
        <FadeInSection>
          <section className="news-section">
            <h2>お知らせ</h2>
            <ul className="news-list">
              <li>
                <strong>2024.11.23（土）</strong><br />
                <span className="news-title" onClick={() => goToEvent('event-20241123')}>
                  極楽寺柴灯大護摩供とマルシェの開催報告
                </span>
              </li>
              <li>
                <strong>2023.11.23（木）</strong><br />
                <span className="news-title" onClick={() => goToEvent('event-20231123')}>
                  極楽寺第十九世住職晋山式と奉納行事のご報告
                </span>
              </li>
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="grid-section">
            <div className="grid-container">
              {clickableItems.map(item => (
                <a key={item.id} href={item.link} className="grid-item">
                  <img src={item.image} alt={item.title} className="grid-image" />
                  <div className="grid-title">{item.title}</div>
                </a>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="contact-section">
            <div className="contact-info">
              <div className="contact-text">
                <p className="contact-title">高野山真言宗 安養山極楽寺</p>
                <p>〒640-0424 和歌山県紀の川市</p>
                <p className="contact-tel">Tel: XXXXXXXX</p>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=34.2273049804738,135.3191806151638&hl=ja&z=15&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
};

export default Main;


