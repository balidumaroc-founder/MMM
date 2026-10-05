import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: '5rem 0',
        position: 'relative',
        backgroundColor: 'var(--bg-beige)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            padding: '2.5rem 1.5rem'
          }}
        >
          {/* Subtle Quote Icon */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: 'var(--sky-blue)'
            }}
          >
            <Quote size={42} strokeWidth={1.5} />
          </div>

          {/* QUOTE TEXT */}
          <blockquote
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: 'var(--text-main)',
              marginBottom: '2rem',
              fontWeight: 500
            }}
          >
            {t('quote.text')}
          </blockquote>

          {/* AUTHOR & SUBTEXT */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-main)'
              }}
            >
              — {t('quote.author')}
            </span>
            <span
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em'
              }}
            >
              {t('quote.subtext')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
