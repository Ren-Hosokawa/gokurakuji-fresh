// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'; // ← 追加
import Main from './components/Main';
import About from './components/About';
import Prayers from './components/Prayers';
import Tombs from './components/Tombs';
import Event from './components/Event';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ← ここに追加 */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/tombs" element={<Tombs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/access" element={<Access />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
