// src/components/Tombs.js
import React, { useState } from 'react';
import './About.css';
import './ModalImage.css'; // モーダル用CSSを追加
import FadeInSection from './FadeInSection';

const ModalImage = ({ src, alt, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content">
      <img src={src} alt={alt} />
    </div>
  </div>
);

const Tombs = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="about-page">
      <h2 className="section-title">極楽寺霊園の特徴</h2>
      <hr className="section-divider" />
      <section className="tombs-features">
        <p>
          当霊園は、在来仏教であれば宗旨・宗派を問いません。<br />
          檀家になる必要もありませんので、どなたでもご利用いただけます。<br /><br />
          園内は全区画バリアフリー設計となっており、車イスの方も安心してお参りいただけます。<br />
          休憩室や水場、車イス専用トイレなど、設備も充実しています。<br /><br />
          また、貴志駅から徒歩圏内にあり、お車でも安心してお越しいただけるよう駐車場も完備しております。<br /><br />
          詳しくは、下記のパンフレットをご覧ください。 <a href="https://www.ohaka-shinei.com/download/gokurakuji_omote.pdf" target="_blank" rel="noopener noreferrer">パンフレット表</a>　<a href="https://www.ohaka-shinei.com/download/gokurakuji_ura.pdf" target="_blank" rel="noopener noreferrer">裏</a>
        </p>
      </section>

      <h2 className="section-title">永代供養付のお墓</h2>
      <hr className="section-divider" />

      {/* 永代納骨供養墓（合祀墓） */}
      <div className="facility-item photo-lower">
        <img
          src="/images/about_dummy.jpeg"
          alt="永代納骨供養墓"
          className="facility-image zoom-on-hover"
          onClick={() => openModal("/images/about_dummy.jpeg", "永代納骨供養墓")}
        />
        <div className="facility-description">
          <h3>永代納骨供養墓（合祀墓）</h3>
          <p>少子化が進みご先祖様のご供養やお墓の維持管理の担い手がいない方が増えている現代です。<br />
          皆様からのご要望もございまして『極楽寺 永代納骨供養墓』を建立しました。<br />
          ご先祖様やご家族様のご供養、ご遺骨を永代にわたりご供養します。<br />
          ご遺骨（全骨）は、永代納骨墓に完全合祀（埋葬）します。<br />
          ※全骨とは、大小問わず骨壷に納められているすべてのお骨になります。<br />
          永代過去帳に「命日・俗名・戒名等」を記入し、ご回向を勤めさせていただきます。<br />
          すでにお墓に納骨されている方の改葬、墓じまいご希望の方も申し込みできます。<br />
          毎年１回、合同供養祭を行います。<br />
          永代納骨供養冥加金 一霊 100,000円（その他費用一切不要）</p>
        </div>
      </div>

      {/* クリスタルガーデン墓地 */}
      <div className="facility-item photo-lower">
        <img
          src="/images/tombs_crystal.jpeg"
          alt="クリスタルガーデン墓地"
          className="facility-image zoom-on-hover"
          onClick={() => openModal("/images/tombs_crystal.jpeg", "クリスタルガーデン墓地")}
        />
        <div className="facility-description">
          <h3>クリスタルガーデン墓地</h3>
          <p>お墓の概念が変わる、見た目にも美しいクリスタルガラスでできたお墓です。<br />
          レーザー彫刻で仏様が浮かび上がり、家紋や戒名も刻むことができます。<br />
          墓石と異なり雨による腐食もなく、クリスタルガラス製なので劣化する恐れがありません。<br />
          通常必要な「年間管理費」が不要で、代々墓としての利用も可能です。<br />
          継承者のいない方、子供に負担をかけたくない方にもおすすめです。<br />
          価格 728,000円（税込）<br />
          ［内訳］永代使用料：150,000円／管理料：50,000円／墓石施工：528,000円<br />
          家紋・先祖代々之霊位・故人様の名入れ彫刻込み（2霊目から+22,000円）<br />
          </p>
        </div>
      </div>

      {/* 樹木葬＜絆＞ */}
      <div className="facility-item">
        <img
          src="/images/about_dummy.jpeg"
          alt="樹木葬＜絆＞"
          className="facility-image zoom-on-hover"
          onClick={() => openModal("/images/about_dummy.jpeg", "樹木葬＜絆＞")}
        />
        <div className="facility-description">
          <h3>樹木葬＜絆＞</h3>
          <p>家族墓としても利用できる個別納骨の樹木葬です。４霊まで納骨できます。<br />
          永代管理・永代供養のため、跡取りがない方も安心です。<br />
          檀家条件がないので在来仏教の方ならどなたでも利用できます。<br /><br />
          価格 403,000円（税込）<br />
          ［内訳］永代使用料：100,000円　永代管理料：50,000円　墓石施工価格：253,000円<br />
          <a href="https://www.ohaka-shinei.com/download/jumokusou.pdf" target="_blank" rel="noopener noreferrer">[パンフレットPDF]</a>
          </p>
        </div>
      </div>

      {/* 動物供養塔＜虹＞（合祀墓） */}
      <div className="facility-item">
        <img
          src="/images/tombs_niji.jpeg"
          alt="動物供養塔＜虹＞"
          className="facility-image zoom-on-hover"
          onClick={() => openModal("/images/tombs_niji.jpeg", "動物供養塔＜虹＞")}
        />
        <div className="facility-description">
          <h3>動物供養塔＜虹＞（合祀墓）</h3>
          <p>家族の一員として生涯を共にした大好きなペットの合祀墓になります。<br />
          火葬後の焼骨のみの受付になります。<br />
          永代過去帳にペットのお名前・没年月日を記入の上、本堂にお祀りし供養します。<br />
          永代納骨供養冥加金 一霊 10,000円（受付のみ）<br />
          葬儀・個別法要は完全予約制です。また別途料金がかかります。<br />
          その際は火葬後の焼骨のみの受付になります。</p>
        </div>
      </div>

      {/* ペットと一緒に入るクリスタル墓 */}
      <div className="facility-item">
        <img
          src="/images/tombs_animal.jpeg"
          alt="ペットと一緒に入るクリスタル墓"
          className="facility-image zoom-on-hover"
          onClick={() => openModal("/images/tombs_animal.jpeg", "ペットと一緒に入るクリスタル墓")}
        />
        <div className="facility-description">
          <h3>ペットと一緒に入るクリスタル墓</h3>
          <p>家族の一員として生涯を共にした大好きなペットと一緒に入るお墓になります。<br />
          価格 783,000円（税込）永代供養料・永代使用料・永代管理料込<br />
          [内訳] 永代使用料: 150,000円 永代管理料: 50,000円 墓石施工価格: 528,000円<br />
          上記価格には、家紋・先祖代々之霊位・故人様（一霊）の名入れ彫刻代金込み。<br />
          故人様の名入れ彫刻は、二霊目当たり22,000円の別途追加料金がかかります。<br /><br />
          [オプション] ペット用レーザー彫刻（メモリアルストーン）１枚あたり49,500円（税込）</p>
        </div>
      </div>

      {/* モーダル表示 */}
      {modalImage && (
        <ModalImage src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}

      <hr className="section-divider" />
      <p className="additional-note">その他、和型のお墓もございます。ぜひご見学にお越しください。</p>
    </div>
  );
};

export default Tombs;