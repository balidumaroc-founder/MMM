import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* COL 1: ACADEMIC MISSION STATEMENT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '300px' }}>
              Un accompagnement pédagogique de haut niveau axé sur la compréhension des méthodes fondamentales et la progression durable.
            </p>
          </div>

          {/* COL 2: MAIN NAVIGATION */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                color: 'var(--text-main)'
              }}
            >
              {t('footer.navHeader')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/college" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {t('nav.college')}
                </Link>
              </li>
              <li>
                <Link to="/lycee" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {t('nav.lycee')}
                </Link>
              </li>
              <li>
                <Link to="/superieur" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {t('nav.superieur')}
                </Link>
              </li>
              <li>
                <Link to="/reserver" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {t('nav.reserver')}
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: ACADEMIC CYCLES */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                color: 'var(--text-main)'
              }}
            >
              {t('footer.levelsHeader')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>Collège (6ème - 3ème)</li>
              <li>Lycée & Spécialités Sciences</li>
              <li>Enseignement Supérieur & CPGE</li>
              <li>Soutien personnalisé & Groupes</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ATTRIBUTION BAR - EXACT REQUIREMENT */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--text-main)',
              backgroundColor: 'var(--bg-beige)',
              padding: '0.5rem 1.2rem',
              borderRadius: '2px',
              border: '1px solid var(--sky-blue)'
            }}
          >
            Website créé par OUSSAMA | MOUHSSINE | SIHAM
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} — {t('footer.rights')}
          </p>
        </div>

      </div>
    </footer>
  );
}
