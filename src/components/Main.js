import React, { useState, useEffect } from 'react';
import './Main.css';

// スライドショー用の画像パス（public/images/ フォルダに配置）
const slideshowImages = [
  "/images/slideshow1.jpeg",
  "/images/slideshow2.jpeg",
  "/images/slideshow3.jpeg"
];

// クリック可能なグリッドの各項目
const clickableItems = [
  {
    id: 1,
    title: "極楽寺について",
    image: "/images/temple.jpeg",
    link: "#about"
  },
  {
    id: 2,
    title: "供養・ご祈祷",
    image: "/images/pray.jpeg",
    link: "#prayers"
  },
  {
    id: 3,
    title: "お墓",
    image: "/images/tombs_crystal.jpeg",
    link: "#tombs"
  },
  {
    id: 4,
    title: "お問い合わせ",
    image: "/images/mizuko.jpeg",
    link: "#contact"
  }
];

const Main = () => {
  // スライドショー用の状態管理
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000); // 3秒ごとに切り替え
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content">
      {/* スライドショーセクション */}
      <section className="slideshow-section">
        <img
          src={slideshowImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slideshow-image"
        />
      </section>

      {/* お知らせセクション */}
      <section className="news-section">
        <h2>お知らせ</h2>
        <ul className="news-list">
          <li>
            <strong>2024.11.23（土）</strong><br />
            極楽寺柴灯大護摩供とマルシェの開催報告
          </li>
          <li>
            <strong>2023.11.23（木）</strong><br />
            極楽寺第十九世住職晋山式と奉納行事のご報告
          </li>
        </ul>
      </section>

      {/* クリック可能な写真グリッド */}
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

      {/* お問い合わせ＆地図セクション */}
      <section className="contact-section">
        <div className="contact-info">
          <div className="contact-text">
            <p className="contact-title">高野山真言宗 極楽寺</p>
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
    </div>
  );
};

export default Main;

