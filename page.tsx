"use client";
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import GamesSection from './components/GamesSection';
import TournamentsSection from './components/TournamentsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EFE5D4]">
      <HeroSection />
      <HowItWorks />
      <GamesSection />
      <TournamentsSection />
      <FAQ />
      <Footer />
    </main>
  );
} 