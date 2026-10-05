import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Calendar, Clock, User, Mail, Phone, BookOpen, Send } from 'lucide-react';

export default function ReservationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    level: '',
    subject: '',
    courseType: 'individual',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = t('form.errors.fullName');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = t('form.errors.email');
    }
    const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      errs.phone = t('form.errors.phone');
    }
    if (!formData.level) {
      errs.level = t('form.errors.level');
    }
    if (!formData.subject) {
      errs.subject = t('form.errors.subject');
    }
    if (!formData.preferredDate) {
      errs.preferredDate = t('form.errors.preferredDate');
    }
    if (!formData.preferredTime) {
      errs.preferredTime = t('form.errors.preferredTime');
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger celebrate confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div
        className="academic-card"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          backgroundColor: 'var(--bg-card)',
          borderTop: '4px solid var(--sky-blue)'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-beige)',
            border: '2px solid var(--sky-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}
        >
          <CheckCircle2 size={36} color="var(--sky-blue)" />
        </div>

        <h3
          style={{
            fontSize: '1.8rem',
            fontFamily: 'var(--font-serif)',
            marginBottom: '1rem',
            color: 'var(--text-main)'
          }}
        >
          {t('form.successTitle')}
        </h3>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}
        >
          {t('form.successMessage')}
        </p>

        <div style={{ padding: '1rem', backgroundColor: 'var(--bg-beige)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          📌 Note : Cette démonstration enregistre votre saisie côté client. Les données sont prêtes à être envoyées vers Supabase, Firebase ou votre API backend.
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              level: '',
              subject: '',
              courseType: 'individual',
              preferredDate: '',
              preferredTime: '',
              message: ''
            });
          }}
          className="btn-secondary"
        >
          {t('form.anotherRequest')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="academic-card"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 2.2rem',
        backgroundColor: 'var(--bg-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.8rem'
      }}
      noValidate
    >
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
          {t('form.title')}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          {t('form.subtitle')}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        
        {/* FULL NAME */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.fullName')} *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t('form.fullNamePlaceholder')}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                backgroundColor: 'var(--bg-white)',
                border: errors.fullName ? '1px solid #e53e3e' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <User size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.fullName && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.fullName}</span>}
        </div>

        {/* EMAIL */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.email')} *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('form.emailPlaceholder')}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                backgroundColor: 'var(--bg-white)',
                border: errors.email ? '1px solid #e53e3e' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <Mail size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.email && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
        </div>

        {/* PHONE */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.phone')} *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('form.phonePlaceholder')}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                backgroundColor: 'var(--bg-white)',
                border: errors.phone ? '1px solid #e53e3e' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <Phone size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.phone && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.phone}</span>}
        </div>

        {/* LEVEL */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.level')} *
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.8rem 1rem',
              backgroundColor: 'var(--bg-white)',
              border: errors.level ? '1px solid #e53e3e' : '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          >
            <option value="">{t('form.selectLevel')}</option>
            <option value="college">{t('form.college')}</option>
            <option value="lycee">{t('form.lycee')}</option>
            <option value="superieur">{t('form.superieur')}</option>
          </select>
          {errors.level && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.level}</span>}
        </div>

        {/* SUBJECT */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.subject')} *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.8rem 1rem',
              backgroundColor: 'var(--bg-white)',
              border: errors.subject ? '1px solid #e53e3e' : '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          >
            <option value="">{t('form.selectSubject')}</option>
            <option value="math">Mathématiques</option>
            <option value="physique">Physique-Chimie</option>
            <option value="francais">Français / Littérature</option>
            <option value="anglais">Anglais</option>
            <option value="informatique">Informatique & Algorithmique</option>
            <option value="philosophie">Philosophie</option>
          </select>
          {errors.subject && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.subject}</span>}
        </div>

        {/* COURSE TYPE */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.courseType')}
          </label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.8rem 1rem',
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          >
            <option value="individual">{t('form.individual')}</option>
            <option value="group">{t('form.group')}</option>
          </select>
        </div>

        {/* PREFERRED DATE */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.preferredDate')} *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                backgroundColor: 'var(--bg-white)',
                border: errors.preferredDate ? '1px solid #e53e3e' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <Calendar size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.preferredDate && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.preferredDate}</span>}
        </div>

        {/* PREFERRED TIME */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            {t('form.preferredTime')} *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                backgroundColor: 'var(--bg-white)',
                border: errors.preferredTime ? '1px solid #e53e3e' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <Clock size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.preferredTime && <span style={{ color: '#e53e3e', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>{errors.preferredTime}</span>}
        </div>

      </div>

      {/* MESSAGE / REMARKS */}
      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
          {t('form.message')}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder={t('form.messagePlaceholder')}
          style={{
            width: '100%',
            padding: '0.8rem 1rem',
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-main)',
            fontSize: '0.95rem',
            outline: 'none',
            resize: 'vertical'
          }}
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{
            width: '100%',
            maxWidth: '380px',
            padding: '1rem 2rem',
            fontSize: '1.05rem',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? (
            <span>Transmission en cours...</span>
          ) : (
            <>
              <span>{t('form.submitButton')}</span>
              <Send size={18} />
            </>
          )}
        </button>
      </div>

    </form>
  );
}
