import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, BookOpen, Layers, LineChart } from 'lucide-react';

export default function Philosophy() {
  const { t } = useLanguage();
  const items = t('philosophy.items') || [];
  const icons = [BookOpen, Layers, LineChart];

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('philosophy.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1.2rem' }}>
            {t('philosophy.title')}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}
          >
            {t('philosophy.description')}
          </p>
        </div>

        {/* 3 EDITORIAL PRINCIPLE CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {items.map((item, idx) => {
            const IconComponent = icons[idx] || BookOpen;
            return (
              <div
                key={idx}
                className="academic-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: '2.5rem 2rem',
                  borderTop: '3px solid var(--sky-blue)'
                }}
              >
                {/* CARD HEADER WITH NUMBER & ICON */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--sky-blue)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.num}
                  </span>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-beige)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)'
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* TITLE & SUBTITLE */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontFamily: 'var(--font-serif)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.8rem'
                    }}
                  >
                    « {item.subtitle} »
                  </p>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
