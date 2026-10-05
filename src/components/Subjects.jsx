import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { subjectsData } from '../data/subjects';
import { BookOpen, ArrowUpRight, GraduationCap, School, BookMarked } from 'lucide-react';

export default function Subjects({ defaultLevel = 'college', hideTabs = false }) {
  const { lang, t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState(defaultLevel);

  const levels = [
    { id: 'college', label: t('subjects.tabs.college'), icon: School, link: '/college' },
    { id: 'lycee', label: t('subjects.tabs.lycee'), icon: BookMarked, link: '/lycee' },
    { id: 'superieur', label: t('subjects.tabs.superieur'), icon: GraduationCap, link: '/superieur' }
  ];

  const currentSubjects = subjectsData[activeLevel] || [];

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('subjects.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '0.8rem' }}>
            {t('subjects.title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            {t('subjects.subtitle')}
          </p>
        </div>

        {/* LEVEL TABS (IF NOT HIDDEN) */}
        {!hideTabs && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '3.5rem'
            }}
          >
            {levels.map((lvl) => {
              const IconComp = lvl.icon;
              const isActive = activeLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 1.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--sky-blue)' : 'var(--bg-beige)',
                    color: isActive ? '#111517' : 'var(--text-main)',
                    border: '1px solid var(--border-light)',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 4px 14px rgba(135, 206, 235, 0.4)' : 'none'
                  }}
                >
                  <IconComp size={18} />
                  <span>{lvl.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* SUBJECT CARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {currentSubjects.map((subj) => (
            <div
              key={subj.id}
              className="academic-card subject-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.2rem',
                cursor: 'pointer'
              }}
            >
              <div>
                {/* CODE & TITLE */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-serif)',
                      letterSpacing: '0.1em',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-beige)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px'
                    }}
                  >
                    {subj.code}
                  </span>
                  <div className="arrow-reveal" style={{ transition: 'transform 0.2s ease, opacity 0.2s ease', opacity: 0.6 }}>
                    <ArrowUpRight size={18} color="var(--sky-blue)" />
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '0.6rem',
                    color: 'var(--text-main)'
                  }}
                >
                  {lang === 'fr' ? subj.titleFr : subj.titleEn}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {lang === 'fr' ? subj.descFr : subj.descEn}
                </p>
              </div>

              {/* ACTION LINK */}
              <Link
                to="/reserver"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--sky-blue)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '0.5rem'
                }}
              >
                <span>Réserver ce module</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM LEVEL PAGE LINK */}
        {!hideTabs && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link
              to={`/${activeLevel}`}
              className="btn-secondary"
              style={{ padding: '0.85rem 2.2rem' }}
            >
              <span>{t('subjects.exploreLevel')}</span>
            </Link>
          </div>
        )}

      </div>

      <style>{`
        .subject-card:hover .arrow-reveal {
          opacity: 1 !important;
          transform: translate(2px, -2px) !important;
        }
      `}</style>
    </section>
  );
}
