import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--bg-beige)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '4rem 2rem',
            textAlign: 'center',
            overflow: 'hidden',
            boxShadow: 'var(--paper-shadow)'
          }}
        >
          {/* Subtle Corner Paper Decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: 'var(--sky-blue)',
              opacity: 0.15,
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: 'var(--sky-blue)',
              opacity: 0.15,
              pointerEvents: 'none'
            }}
          />

          <div style={{ relative: 'z-index: 2', maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-tag" style={{ margin: '0 auto 1.2rem auto' }}>
              <span>EXCELLENCE & SUCCÈS</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.2rem',
                lineHeight: 1.2
              }}
            >
              {t('cta.title')}
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                fontWeight: 500
              }}
            >
              {t('cta.subtitle')}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/reserver"
                className="btn-primary"
                style={{ padding: '1.1rem 2.4rem', fontSize: '1.05rem' }}
              >
                <span>{t('cta.button')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
