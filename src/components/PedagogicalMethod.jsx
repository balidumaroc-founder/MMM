import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Target, Search, Users, BarChart3, CheckCircle2 } from 'lucide-react';

export default function PedagogicalMethod() {
  const { t } = useLanguage();
  const steps = t('method.steps') || [];
  const stepIcons = [Target, Search, Users, BarChart3];

  return (
    <section
      id="methode"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-beige)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('method.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem' }}>
            {t('method.title')}
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            « {t('method.subtitle')} »
          </p>
        </div>

        {/* 4 STEPS GRAPHICAL TIMELINE / GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
          className="method-grid"
        >
          {steps.map((step, idx) => {
            const StepIcon = stepIcons[idx] || Target;
            return (
              <div
                key={idx}
                className="academic-card"
                style={{
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  position: 'relative'
                }}
              >
                {/* STEP NUMBER & ICON */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-beige)',
                      border: '1px solid var(--sky-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)'
                    }}
                  >
                    <StepIcon size={22} color="var(--text-main)" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--sky-blue)'
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontFamily: 'var(--font-serif)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    « {step.desc} »
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {step.text}
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
