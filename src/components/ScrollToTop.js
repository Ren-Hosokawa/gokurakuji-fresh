// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 常にページの先頭へスクロール
  }, [pathname]); // pathname が変更されるたびに発動

  return null;
};

export default ScrollToTop;
