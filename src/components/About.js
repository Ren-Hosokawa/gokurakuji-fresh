// src/components/About.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import './ModalImage.css'; // モーダル用CSS
import FadeInSection from './FadeInSection';

const ModalImage = ({ src, alt, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content">
      <img src={src} alt={alt} className="modal-image" />
    </div>
  </div>
);

const About = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="about-page">
      <h2 className="section-title">極楽寺について</h2>
      <hr className="section-divider" />

      <section className="about-description">
        <p>
          今は去る事、四百有余年文緑二年 太閤秀吉公、高野山清巌寺落成時、
          紀ノ川流域を高野山寺領とする朱印を与えた。その最西端の要として、
          高野山常喜院末寺、極楽寺を建立した（極楽寺緑起伝々）。
        </p>
        <p>
          ご本堂に菊の御紋を戴き、京より熊野詣の際には、停馬所として公家一行をお出迎えし、
          手厚くおもてなしをされたとの口伝が古くから伝わる。
        </p>
        <p>
          本尊は、阿弥陀如来立像（西方の極楽浄土の教主であり、
          生けし生きるもの全てを救う仏である）。
        </p>
        <p>
          西方極楽浄土……時の高野山領、最西端であった安養山極楽寺より
          皇室また高野山との因縁は深い寺院である。
        </p>
      </section>

      <section className="facilities-section">
        <h2 className="section-title">施設紹介</h2>
        <hr className="section-divider" />

        <div className="facility-item">
          <img
            src={process.env.PUBLIC_URL + "/images/about_hondo.jpeg"}
            alt="本堂"
            className="facility-image zoom-on-hover"
            onClick={() => openModal(process.env.PUBLIC_URL + "/images/about_hondo.jpeg", "本堂")}
          />
          <div className="facility-description">
            <h3>本堂</h3>
            <p>
              本尊は、阿弥陀如来立像（西方の極楽浄土の教主であり、
              生けし生きるもの全てを救う仏である）。
            </p>
          </div>
        </div>

        <div className="facility-item">
          <img
            src={process.env.PUBLIC_URL + "/images/about_daikouma.jpeg"}
            alt="大広間"
            className="facility-image zoom-on-hover"
            onClick={() => openModal(process.env.PUBLIC_URL + "/images/about_daikouma.jpeg", "大広間")}
          />
          <div className="facility-description">
            <h3>大広間</h3>
            <p>法要時の待合室や会食、葬儀等にご利用いただけます。</p>
          </div>
        </div>

        <div className="facility-item">
          <img
            src={process.env.PUBLIC_URL + "/images/about_dummy.jpeg"}
            alt="鐘楼塔"
            className="facility-image zoom-on-hover"
            onClick={() => openModal(process.env.PUBLIC_URL + "/images/about_dummy.jpeg", "鐘楼塔")}
          />
          <div className="facility-description">
            <h3>鐘楼塔</h3>
            <p>境内に静かに佇む鐘楼塔は、来訪者を迎える象徴のひとつです。</p>
          </div>
        </div>

        <div className="facility-item">
          <img
            src={process.env.PUBLIC_URL + "/images/about_dummy.jpeg"}
            alt="極楽寺霊園"
            className="facility-image zoom-on-hover"
            onClick={() => openModal(process.env.PUBLIC_URL + "/images/about_dummy.jpeg", "極楽寺霊園")}
          />
          <div className="facility-description">
            <h3>極楽寺霊園</h3>
            <p>
              和型墓、クリスタルガーデン墓地、樹木葬＜絆＞、動物供養塔＜虹＞、
              ペットと一緒に入るクリスタル墓などがあります。<br />
              詳しくは、
              <Link to="/tombs" className="link-inline">お墓のページ</Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {modalImage && (
        <ModalImage
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default About;
