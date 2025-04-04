// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ← ここを変更

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
    <Router> {/* HashRouter を使うことで GitHub Pages に対応 */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/tombs" element={<Tombs />} />
        <Route path="/access" element={<Access />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;