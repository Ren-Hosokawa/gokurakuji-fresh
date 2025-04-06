import React from 'react';
import './About.css';
import FadeInSection from './FadeInSection';

const Access = () => {
  return (
    <div className="about-page">
      <FadeInSection>
        <h2 className="section-title">アクセス</h2>
        <hr className="section-divider" />
      </FadeInSection>

      <FadeInSection>
        <section className="access-info">
          <p>〒640-0424　和歌山県紀の川市貴志川町井ノ口106</p>

          <h3>電車でお越しの方</h3>
          <p>和歌山電鐵貴志川線「貴志駅」より徒歩15分</p>

          <h3>お車でお越しの方</h3>
          <p>阪和道「和歌山南」ETC出口より〇〇分</p>
          <p>無料駐車場あり</p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <div className="map-embed" style={{ marginTop: '30px' }}>
          <iframe
            src="https://www.google.com/maps?q=34.2273049804738,135.3191806151638&hl=ja&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Access;
