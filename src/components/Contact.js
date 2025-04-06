import React, { useState } from 'react';
import './Contact.css';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    kana: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('メール送信に失敗しました');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <FadeInSection>
          <h2 className="section-title">確認画面</h2>
          <hr className="section-divider" />
          <p>お問い合わせありがとうございました。</p>
        </FadeInSection>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <FadeInSection>
        <h2 className="section-title">お問い合わせ</h2>
        <hr className="section-divider" />
        {error && <p className="error-message">{error}</p>}
      </FadeInSection>

      <FadeInSection>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>
              お問い合わせ内容 <span className="required">※必須</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>
              名前 <span className="required">※必須</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              名前（カナ）<span className="required">※必須</span>
            </label>
            <input
              type="text"
              name="kana"
              value={formData.kana}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              電話番号<span className="required">※必須</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>メールアドレス</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <p className="required-note">
            必須事項を入力の上、確認画面にお進みください。
          </p>
          <button type="submit" className="submit-button">確認画面へ</button>
        </form>
      </FadeInSection>
    </div>
  );
};

export default Contact;

