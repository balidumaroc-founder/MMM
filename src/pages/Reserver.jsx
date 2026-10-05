import React from 'react';
import ReservationForm from '../components/ReservationForm';
import FAQ from '../components/FAQ';
import { CalendarCheck2 } from 'lucide-react';

export default function Reserver() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 2.5rem)', paddingBottom: '4rem' }}>
      <section style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <div className="badge-tag" style={{ margin: '0 auto 1rem auto' }}>
              <span>RÉSERVATION DE SÉANCE</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', marginBottom: '1rem' }}>
              Réserver une séance de soutien académique
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Bénéficiez d'un diagnostic offert lors de votre premier entretien. Remplissez le formulaire ci-dessous pour convenir d'un créneau adapté.
            </p>
          </div>

          {/* FORM */}
          <ReservationForm />
        </div>
      </section>

      <FAQ />
    </main>
  );
}
