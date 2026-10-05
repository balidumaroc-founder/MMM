import React from 'react';

export default function EinsteinIllustration() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        zIndex: 2
      }}
    >
      {/* Editorial Outer Frame Accent */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-beige)',
          padding: '12px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--paper-shadow)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Inner Paper Border */}
        <div
          style={{
            position: 'relative',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(135, 206, 235, 0.4)',
            backgroundColor: '#F9F9F6'
          }}
        >
          <img
            src="/assets/einstein.jpg"
            alt="Albert Einstein - Figure de la méthode et du savoir académique"
            loading="eager"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'contrast(1.04) sepia(0.05)',
              mixBlendMode: 'multiply',
              transition: 'transform 0.6s ease'
            }}
          />

          {/* Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'radial-gradient(circle at center, transparent 60%, rgba(232, 220, 200, 0.4) 100%)'
            }}
          />
        </div>

        {/* Vintage Academic Label Stamp */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(249, 249, 246, 0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--sky-blue)',
            padding: '0.4rem 0.8rem',
            borderRadius: '2px',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          Albert Einstein — 1879–1955
        </div>
      </div>
    </div>
  );
}
