import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* ページリンク */}
      <ul className="footer-links">
        <li>
          <Link to="/about">極楽寺について</Link>
        </li>
        <li>
          <Link to="/prayers">ご供養・ご祈祷</Link>
        </li>
        <li>
          <Link to="/tombs">お墓</Link>
        </li>
        <li>
          <Link to="/access">年中行事／お知らせ</Link>
        </li>
        <li>
          <Link to="/contact">アクセス</Link>
        </li>
        <li>
          <Link to="/contact">お問い合わせ</Link>
        </li>
      </ul>
      {/* インスタグラムのアカウント（アイコンのみ） */}
      <div className="footer-social">
        <a
          href="https://www.instagram.com/your_instagram_account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
      </div>
      {/* 権利表記 */}
      <p className="footer-rights">© 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;




