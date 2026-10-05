import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/college', label: t('nav.college') },
    { path: '/lycee', label: t('nav.lycee') },
    { path: '/superieur', label: t('nav.superieur') },
    { path: '/reserver', label: t('nav.reserver') },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: isScrolled ? '72px' : '88px',
          backgroundColor: isScrolled
            ? (theme === 'dark' ? 'rgba(17, 21, 23, 0.88)' : 'rgba(249, 249, 246, 0.88)')
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled
            ? `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(32, 36, 39, 0.08)'}`
            : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* DESKTOP NAVIGATION LINKS */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2.2rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.02em',
                    color: isActive ? 'var(--text-main)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--sky-blue)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT UTILITIES: LANG, THEME & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            {/* FR / EN Selector */}
            <button
              onClick={toggleLanguage}
              aria-label="Changer de langue"
              style={{
                background: 'var(--bg-beige)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.4rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: lang === 'fr' ? 'var(--text-main)' : 'var(--text-secondary)' }}>FR</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ color: lang === 'en' ? 'var(--text-main)' : 'var(--text-secondary)' }}>EN</span>
            </button>

            {/* LIGHT / DARK TOGGLE */}
            <button
              onClick={toggleTheme}
              aria-label="Basculer le mode sombre"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="#87CEEB" /> : <Moon size={18} color="#202427" />}
            </button>

            {/* RESERVATION CTA BTN DESKTOP */}
            <Link
              to="/reserver"
              className="btn-primary desktop-cta"
              style={{
                padding: '0.6rem 1.2rem',
                fontSize: '0.88rem',
                display: 'none'
              }}
            >
              <span>{t('nav.bookBtn')}</span>
              <ArrowRight size={14} />
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Ouvrir le menu mobile"
              className="mobile-hamburger"
              style={{
                display: 'flex',
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY (Requirement 6 & 25) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: theme === 'dark' ? 'rgba(17, 21, 23, 0.98)' : 'rgba(249, 249, 246, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--sky-blue)' : 'var(--text-main)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div style={{ marginTop: '2rem' }}>
              <Link
                to="/reserver"
                className="btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}
              >
                <span>{t('nav.bookBtn')}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CSS Rule for showing desktop vs mobile nav */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
