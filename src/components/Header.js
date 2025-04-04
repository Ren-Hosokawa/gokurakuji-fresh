// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        {/* ロゴ */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + "/images/logo.jpeg"} alt="Logo" className="logo" />
        </Link>

        {/* ハンバーガーボタン (PCでは非表示) */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* 全画面メニュー (スマホ) or PC横並びメニュー */}
        <nav className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
          {/* ×ボタン (スマホ時のみ表示) */}
          <button className="close-button" onClick={closeMenu}>×</button>

          <ul>
            <li><Link to="/about" onClick={closeMenu}>極楽寺について</Link></li>
            <li><Link to="/prayers" onClick={closeMenu}>ご供養・ご祈祷</Link></li>
            <li><Link to="/tombs" onClick={closeMenu}>お墓</Link></li>
            <li><Link to="/events" onClick={closeMenu}>年中行事</Link></li>
            <li><Link to="/access" onClick={closeMenu}>アクセス</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

