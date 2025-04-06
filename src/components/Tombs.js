// src/components/Tombs.js
import React, { useState } from 'react';
import './About.css';
import './ModalImage.css'; // モーダル用スタイル
import FadeInSection from './FadeInSection';

const ModalImage = ({ src, alt, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content">
      <img src={src} alt={alt} className="modal-image" />
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

  const facilities = [
    {
      src: "/images/about_dummy.jpeg",
      alt: "永代納骨供養墓",
      title: "永代納骨供養墓（合祀墓）",
      desc: `少子化が進みご先祖様のご供養やお墓の維持管理の担い手がいない方が増えている現代です。
皆様からのご要望もございまして『極楽寺 永代納骨供養墓』を建立しました。
ご先祖様やご家族様のご供養、ご遺骨を永代にわたりご供養します。
ご遺骨（全骨）は、永代納骨墓に完全合祀（埋葬）します。
※全骨とは、大小問わず骨壷に納められているすべてのお骨になります。
永代過去帳に「命日・俗名・戒名等」を記入し、ご回向を勤めさせていただきます。
すでにお墓に納骨されている方の改葬、墓じまいご希望の方も申し込みできます。
毎年１回、合同供養祭を行います。
永代納骨供養冥加金 一霊 100,000円（その他費用一切不要）`
    },
    {
      src: "/images/tombs_crystal.jpeg",
      alt: "クリスタルガーデン墓地",
      title: "クリスタルガーデン墓地",
      desc: `お墓の概念が変わる、見た目にも美しいクリスタルガラスでできたお墓です。
レーザー彫刻で仏様が浮かび上がり、家紋や戒名も刻むことができます。
墓石と異なり雨による腐食もなく、クリスタルガラス製なので劣化する恐れがありません。
通常必要な「年間管理費」が不要で、代々墓としての利用も可能です。
継承者のいない方、子供に負担をかけたくない方にもおすすめです。
価格 728,000円（税込）
［内訳］永代使用料：150,000円／管理料：50,000円／墓石施工：528,000円
家紋・先祖代々之霊位・故人様の名入れ彫刻込み（2霊目から+22,000円）`
    },
    {
      src: "/images/tombs_kizuna.jpeg",
      alt: "樹木葬＜絆＞",
      title: "樹木葬＜絆＞",
      desc: `家族墓としても利用できる個別納骨の樹木葬です。４霊まで納骨できます。
永代管理・永代供養のため、跡取りがない方も安心です。
檀家条件がないので在来仏教の方ならどなたでも利用できます。

価格 403,000円（税込）
［内訳］永代使用料：100,000円　永代管理料：50,000円　墓石施工価格：253,000円
[パンフレットPDF] https://www.ohaka-shinei.com/download/jumokusou.pdf`
    },
    {
      src: "/images/tombs_niji.jpeg",
      alt: "動物供養塔＜虹＞",
      title: "動物供養塔＜虹＞（合祀墓）",
      desc: `家族の一員として生涯を共にした大好きなペットの合祀墓になります。
火葬後の焼骨のみの受付になります。
永代過去帳にペットのお名前・没年月日を記入の上、本堂にお祀りし供養します。
永代納骨供養冥加金 一霊 10,000円（受付のみ）
葬儀・個別法要は完全予約制です。また別途料金がかかります。`
    },
    {
      src: "/images/tombs_animal.jpeg",
      alt: "ペットと一緒に入るクリスタル墓",
      title: "ペットと一緒に入るクリスタル墓",
      desc: `家族の一員として生涯を共にした大好きなペットと一緒に入るお墓になります。
価格 783,000円（税込）永代供養料・永代使用料・永代管理料込
[内訳] 永代使用料: 150,000円 永代管理料: 50,000円 墓石施工価格: 528,000円
家紋・先祖代々之霊位・故人様（一霊）の名入れ彫刻代金込み。
故人様の名入れ彫刻は、二霊目当たり22,000円の別途追加料金がかかります。

[オプション] ペット用レーザー彫刻（メモリアルストーン）１枚あたり49,500円（税込）`
    }
  ];

  return (
    <div className="about-page">
      <FadeInSection>
        <h2 className="section-title">極楽寺霊園の特徴</h2>
        <hr className="section-divider" />
        <section className="tombs-features">
          <p>
            当霊園は、在来仏教であれば宗旨・宗派を問いません。<br />
            檀家になる必要もありませんので、どなたでもご利用いただけます。<br /><br />
            園内は全区画バリアフリー設計となっており、車イスの方も安心してお参りいただけます。<br />
            休憩室や水場、車イス専用トイレなど、設備も充実しています。<br /><br />
            また、貴志駅から徒歩圏内にあり、お車でも安心してお越しいただけるよう駐車場も完備しております。<br /><br />
            詳しくは、下記のパンフレットをご覧ください。
            <a href="https://www.ohaka-shinei.com/download/gokurakuji_omote.pdf" target="_blank" rel="noopener noreferrer">パンフレット表</a>　
            <a href="https://www.ohaka-shinei.com/download/gokurakuji_ura.pdf" target="_blank" rel="noopener noreferrer">裏</a>
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <h2 className="section-title">永代供養付のお墓</h2>
        <hr className="section-divider" />
      </FadeInSection>

      {facilities.map((item, index) => (
        <FadeInSection key={index}>
          <div className="facility-item photo-lower">
            <img
              src={process.env.PUBLIC_URL + item.src}
              alt={item.alt}
              className="facility-image zoom-on-hover"
              onClick={() => openModal(process.env.PUBLIC_URL + item.src, item.alt)}
            />
            <div className="facility-description">
              <h3>{item.title}</h3>
              <p>
                {item.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}<br /></React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </FadeInSection>
      ))}

      {modalImage && (
        <ModalImage src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}

      <hr className="section-divider" />
      <p className="additional-note">その他、和型のお墓もございます。ぜひご見学にお越しください。</p>
    </div>
  );
};

export default Tombs;
