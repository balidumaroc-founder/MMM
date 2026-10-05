import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { statisticsData } from '../data/statistics';
import { TrendingUp } from 'lucide-react';

function CounterNumber({ target, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800; // 1.8s
          const steps = 40;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Statistics() {
  const { lang, t } = useLanguage();

  return (
    <section
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--bg-beige)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('stats.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '0.5rem' }}>
            {t('stats.title')}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {t('stats.disclaimer')}
          </p>
        </div>

        {/* 4 STAT CARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {statisticsData.map((stat) => (
            <div
              key={stat.id}
              className="academic-card"
              style={{
                textAlign: 'center',
                padding: '2.2rem 1.5rem',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  color: 'var(--text-main)',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}
              >
                <CounterNumber target={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  marginBottom: '0.4rem',
                  color: 'var(--text-main)'
                }}
              >
                {lang === 'fr' ? stat.labelFr : stat.labelEn}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {lang === 'fr' ? stat.detailFr : stat.detailEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
