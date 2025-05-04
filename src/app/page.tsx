"use client";

import React, { useEffect, useRef } from 'react';
import Header from '@/components/app/home/Header';
import Hero from '@/components/app/home/Hero';
import Features from '@/components/app/home/Features';
import Categories from '@/components/app/home/Categories';
import BestSellers from '@/components/app/home/BestSellers';
import Brands from '@/components/app/home/Brands';
import Blog from '@/components/app/home/Blog';
import Training from '@/components/app/home/Training';
import Footer from '@/components/app/home/Footer';
import MobileNav from '@/components/common/MobileNav';

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featureCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add('animate-fade-in-up');
    }

    featureCardRefs.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.classList.add('animate-fade-in-up');
          card.classList.remove('opacity-0');
        }, 100 * (index + 1));
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <BestSellers />
      <Brands />
      <Blog />
      <Training />
      {/* <Testimonials /> */}
      <Footer />
      <MobileNav />
      
    </div>
  );
};

export default HomePage;