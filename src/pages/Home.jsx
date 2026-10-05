import React from 'react';
import Hero from '../components/Hero';
import QuoteSection from '../components/QuoteSection';
import VideoSection from '../components/VideoSection';
import Statistics from '../components/Statistics';
import Philosophy from '../components/Philosophy';
import PedagogicalMethod from '../components/PedagogicalMethod';
import Subjects from '../components/Subjects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <VideoSection />
      <Statistics />
      <Philosophy />
      <PedagogicalMethod />
      <Subjects defaultLevel="college" hideTabs={false} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
