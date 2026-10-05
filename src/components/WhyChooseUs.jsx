import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { UserCheck, Award, CalendarCheck, Compass, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const items = t('whyUs.items') || [];
  const icons = [UserCheck, Award, CalendarCheck, Compass];

  return (
    <section
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-beige)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('whyUs.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
            {t('whyUs.title')}
          </h2>
        </div>

        {/* 4 ITEMS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}
        >
          {items.map((item, idx) => {
            const IconComponent = icons[idx] || UserCheck;
            return (
              <div
                key={idx}
                className="academic-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-beige)',
                    border: '1px solid var(--sky-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    marginBottom: '0.5rem'
                  }}
                >
                  <IconComponent size={24} color="var(--text-main)" />
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--text-main)'
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  « {item.desc} »
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
