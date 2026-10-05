import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Subjects from '../components/Subjects';
import PedagogicalMethod from '../components/PedagogicalMethod';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { BookMarked, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lycee() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* PAGE HERO */}
      <section style={{ padding: '4rem 0 5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge-tag" style={{ margin: '0 auto 1.2rem auto' }}>
              <span>CYCLE LYCÉE (2NDE — TERMINALE)</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)', marginBottom: '1.2rem' }}>
              {t('pageLycee.heroTitle')}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              {t('pageLycee.desc')}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/reserver" className="btn-primary">
                <span>{t('hero.ctaReserve')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS FOR LYCEE */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--bg-beige)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Spécialités Scientifiques</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Approfondissement intensif en Mathématiques Spé, Physique-Chimie et NSI (Informatique).</p>
            </div>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Préparation au Bac & Grand Oral</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Sujets types, gestion du temps, précision des démonstrations et aisance oratoire.</p>
            </div>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Orientations Parcoursup</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Consolidation du dossier académique pour viser les filières sélectives (CPGE, Écoles, Pass/L.AS).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS SPECIFIC TO LYCEE */}
      <Subjects defaultLevel="lycee" hideTabs={true} />

      <PedagogicalMethod />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </main>
  );
}
