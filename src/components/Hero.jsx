import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import EinsteinIllustration from './EinsteinIllustration';
import ScientificFormulas from './ScientificFormulas';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 3rem)',
        paddingBottom: '5rem',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Floating formulas background */}
      <ScientificFormulas />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          
          {/* LEFT CONTENT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            {/* BADGE */}
            <div className="badge-tag">
              <span>{t('hero.badge')}</span>
            </div>

            {/* MAIN EDITORIAL TITLE */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                lineHeight: 1.15,
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              {t('hero.titleLine1')}
              <br />
              <span
                style={{
                  color: 'var(--text-main)',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {t('hero.titleLine2')}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'var(--sky-blue)',
                    opacity: 0.35,
                    zIndex: -1,
                    borderRadius: '2px'
                  }}
                />
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '600px',
                fontWeight: 400
              }}
            >
              {t('hero.description')}
            </p>

            {/* CTA BUTTONS */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}
            >
              <a
                href="#methode"
                className="btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <span>{t('hero.ctaButton')}</span>
              </a>

              <Link
                to="/reserver"
                className="btn-secondary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <span>{t('hero.ctaReserve')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* EDITORIAL FOOTNOTE */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                marginTop: '1rem',
                maxWidth: '520px'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Niveaux
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Collège • Lycée • Supérieur
                </span>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-light)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Discipline
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Sciences & Lettres
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT - EINSTEIN ARTWORK */}
          <div style={{ position: 'relative' }}>
            <EinsteinIllustration />
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
