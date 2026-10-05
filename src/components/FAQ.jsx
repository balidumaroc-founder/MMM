import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqData } from '../data/faq';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState('faq-1');

  const toggleItem = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

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
            <span>{t('faq.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '0.8rem' }}>
            {t('faq.title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            {t('faq.subtitle')}
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            const question = lang === 'fr' ? item.questionFr : item.questionEn;
            const answer = lang === 'fr' ? item.answerFr : item.answerEn;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: isOpen ? '0 6px 20px rgba(17,21,23,0.06)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.5rem 1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text-main)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      lineHeight: 1.3
                    }}
                  >
                    {question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-beige)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: isOpen ? 'var(--sky-blue)' : 'var(--text-main)'
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* ANIMATED EXPANDABLE PANEL */}
                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.8rem 1.6rem 1.8rem',
                      fontSize: '0.98rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem',
                      animation: 'fadeIn 0.3s ease-out'
                    }}
                  >
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
