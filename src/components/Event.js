// src/components/Event.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Event.css';
import FadeInSection from './FadeInSection';

const allEvents = [
  {
    id: 'event-20241123',
    date: "2024.11.23（土）",
    title: "極楽寺柴灯大護摩供、極楽寺マルシェを開催しました。",
    images: [
      "/images/about_dummy.jpeg",
      "/images/about_dummy.jpeg",
      "/images/about_dummy.jpeg",
    ],
    content: `
極楽寺柴灯大護摩供とは真言密教の奥義であり、野外で行う大規模な護摩（加持）祈祷。
護摩壇を造り、護摩木を焚き供養する法で皆様の願いを記し、護摩作法を添え功徳を得ます。
また、ご祈祷後には護摩壇の炭の上を歩く火渡を多くの方々に体験していただきました。
極楽寺マルシェでは、ブルーベリーファームきしがわ様、八旗農園様、39HOUSE様、近隣の農家様が出店し、
皆様に喜んでいただきました。
極楽寺マルシェにおいては、定期的に開催する予定です。出店ご希望の方はご相談ください。
    `
  },
  {
    id: 'event-20231123',
    date: "2023.11.23（木）",
    title: "第十九世住職の法燈継承・晋山式報告法会を行いました。",
    images: [
      "/images/event_20231123-1.jpeg",
      "/images/event_20231123-2.jpeg",
      "/images/event_20231123-3.jpeg",
    ],
    content: `
安養山極楽寺第十八世住職 加藤栄俊師より、細川融賢が、第十九世住職の法燈を継承し、
晋山式報告法会、稚児行列、剣詩舞と大太鼓の奉納をしていただきました。
皆様には諸事ご多忙のところご臨席を頂き、温かいご法愛ご支援を賜りましたこと厚くお礼申し上げます。
おかげさまで晋山式を執り行うことができたことに感謝し、極楽寺がこれからも御本尊の阿弥陀如来様のご加護の中
「人々が集う場所」、移り変わる世の中でも「変わることのない場所」で在ることを目指し、
極楽寺が益々発展できるように、一層精進、微力を尽くす覚悟でございます。
皆様方には今後共、ご指導を賜りますよう心からお願い申し上げます。
    `
  }
];

const EVENTS_PER_PAGE = 5;

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const location = useLocation();

  const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = allEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="event-page">
      <FadeInSection>
        <h2 className="section-title">お知らせ</h2>
        <hr className="section-divider" />
      </FadeInSection>

      {currentEvents.map((event, index) => (
        <FadeInSection key={index}>
          <article className="event-article" id={event.id}>
            <div className="event-details">
              <h3>{event.date}</h3>
              <h4>{event.title}</h4>
              {event.content.trim().split('\n').map((line, i) => (
                <p key={i}>{line.trim()}</p>
              ))}
            </div>
            {event.images.length > 0 && (
              <div className="event-images">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={process.env.PUBLIC_URL + img}
                    alt={`Event ${index + 1} Image ${i + 1}`}
                    className="event-image zoom-on-hover"
                    onClick={() => setModalImage({ src: process.env.PUBLIC_URL + img, alt: event.title })}
                  />
                ))}
              </div>
            )}
          </article>
          <hr className="event-divider" />
        </FadeInSection>
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`page-button ${currentPage === idx + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <img src={modalImage.src} alt={modalImage.alt} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;

