// src/components/NewsTable.js
import React from 'react';

const newsItems = [
  {
    date: "2023.11.23（木）",
    title: "極楽寺第十九世住職晋山式と奉納行事のご報告"
  },
  {
    date: "2024.11.23（土）",
    title: "極楽寺柴灯大護摩供とマルシェの開催報告"
  }
];

const NewsTable = () => {
  return (
    <div className="news-table">
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <div className="news-date">{item.date}</div>
          <div className="news-title">{item.title}</div>
          {index !== newsItems.length - 1 && <hr className="news-divider" />}
        </div>
      ))}
    </div>
  );
};

export default NewsTable;
