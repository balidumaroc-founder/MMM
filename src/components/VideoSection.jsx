import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Play, X, Award, CheckCircle2 } from 'lucide-react';

export default function VideoSection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
            <span>{t('video.badge')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem' }}>
            {t('video.title')}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {t('video.description')}
          </p>
        </div>

        {/* VIDEO CONTAINER WITH CUSTOM OVERLAY */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-light)',
            aspectRatio: '16/9',
            backgroundColor: '#111517'
          }}
        >
          {/* POSTER IMAGE */}
          <img
            src="/assets/classroom-video-poster.jpg"
            alt="Professeur et élèves en cours de soutien scientifique"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85) contrast(1.05)',
              transition: 'transform 0.5s ease'
            }}
          />

          {/* DARK CINEMATIC OVERLAY */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(17, 21, 23, 0.2) 0%, rgba(17, 21, 23, 0.65) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem'
            }}
          >
            {/* TOP CORNER STAMP */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span
                style={{
                  backgroundColor: 'rgba(17, 21, 23, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#F9F9F6',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '2px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderLeft: '3px solid var(--sky-blue)'
                }}
              >
                ENVIRONNEMENT DE CLASSE RÉEL
              </span>
            </div>

            {/* CENTER PLAY BUTTON */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}
            >
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Lancer la vidéo de présentation"
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--sky-blue)',
                  border: '4px solid rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(135, 206, 235, 0.6)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease'
                }}
                className="play-pulse-btn"
              >
                <Play size={34} color="#111517" style={{ marginLeft: '4px' }} />
              </button>

              <span
                style={{
                  color: '#F9F9F6',
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                }}
              >
                {t('video.playButton')}
              </span>
            </div>

            {/* BOTTOM INFO BAR */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#F9F9F6',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                <CheckCircle2 size={16} color="var(--sky-blue)" />
                <span>Mentorat individuel & petits groupes</span>
              </div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                Qualité 4K • 100% Ambiance Académique
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* LIGHTBOX VIDEO MODAL */}
      {isPlaying && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(17, 21, 23, 0.95)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              aspectRatio: '16/9',
              backgroundColor: '#000',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsPlaying(false)}
              aria-label={t('video.close')}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* DEMO VIDEO IFRAME / HTML5 CANVAS VIDEO */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
              title={t('video.modalTitle')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        .play-pulse-btn:hover {
          transform: scale(1.08);
          background-color: #70bee0;
        }
      `}</style>
    </section>
  );
}
