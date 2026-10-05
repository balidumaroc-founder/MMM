import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Subjects from '../components/Subjects';
import PedagogicalMethod from '../components/PedagogicalMethod';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Superieur() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* PAGE HERO */}
      <section style={{ padding: '4rem 0 5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge-tag" style={{ margin: '0 auto 1.2rem auto' }}>
              <span>ENSEIGNEMENT SUPÉRIEUR & CPGE</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)', marginBottom: '1.2rem' }}>
              {t('pageSuperieur.heroTitle')}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              {t('pageSuperieur.desc')}
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

      {/* HIGHLIGHTS FOR SUPERIEUR */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--bg-beige)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Rigueur Universitaire</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Maniement irréprochable des outils d'analyse avancée, d'algèbre linéaire et de théorie des groupes.</p>
            </div>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Informatique & Algorithmique</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Complexité, programmation C/C++/Python, structures de données complexes et bases de données.</p>
            </div>
            <div className="academic-card">
              <CheckCircle2 color="var(--sky-blue)" size={24} style={{ marginBottom: '0.8rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Préparation Concours CPGE</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Entraînement aux épreuves d'écoles d'ingénieurs (X-Mines-Centrale) et khôlles individuelles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS SPECIFIC TO SUPERIEUR */}
      <Subjects defaultLevel="superieur" hideTabs={true} />

      <PedagogicalMethod />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </main>
  );
}
