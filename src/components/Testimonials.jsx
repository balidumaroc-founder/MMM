import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { testimonialsData } from '../data/testimonials';
import { Star, MessageSquareQuote, Check } from 'lucide-react';

export default function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '0.6rem' }}>
            {t('testimonials.title')}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {t('testimonials.disclaimer')}
          </p>
        </div>

        {/* CARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="academic-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                padding: '2.2rem 1.8rem',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div>
                {/* RATING & TAG */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--sky-blue)" color="var(--sky-blue)" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--bg-beige)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '2px',
                      color: 'var(--text-main)'
                    }}
                  >
                    {lang === 'fr' ? item.tagFr : item.tagEn}
                  </span>
                </div>

                {/* QUOTE */}
                <p
                  style={{
                    fontFamily: 'var(--font-quote)',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    color: 'var(--text-main)',
                    marginBottom: '1rem'
                  }}
                >
                  {lang === 'fr' ? item.quoteFr : item.quoteEn}
                </p>
              </div>

              {/* AUTHOR */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--sky-blue)',
                    color: '#111517',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>{item.name}</span>
                    <Check size={14} color="var(--sky-blue)" />
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {lang === 'fr' ? item.roleFr : item.roleEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
