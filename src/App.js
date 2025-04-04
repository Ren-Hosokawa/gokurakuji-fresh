// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Prayers from './components/Prayers';
import Tombs from './components/Tombs';
import Event from './components/Event'; // 年中行事
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header /> {/* 全ページ共通ヘッダー */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/tombs" element={<Tombs />} />
        <Route path="/access" element={<Access />} />
        <Route path="/event" element={<Event />} /> {/* 年中行事 */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* 全ページ共通フッター */}
    </Router>
  );
};

export default App;





