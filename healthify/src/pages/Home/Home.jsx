import React from 'react'
import HeroSection from './HomeSections/HeroSection'
import Quality from './HomeSections/Qaulity'
import HealthInsuranceHero from './HomeSections/HealthInsurance'
import TeleHealthFeatures from './HomeSections/TeleHealthFeatures'
import EveryonesHealth from './HomeSections/EveryonesHealth'
import ServicesSection from './HomeSections/HealthService'
import DoctorSection from './HomeSections/DoctorSection'
import TestimonialsSection from './HomeSections/TestimonialsSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
       <HeroSection />
      <Quality />
      <HealthInsuranceHero />
      <TeleHealthFeatures />
      <EveryonesHealth />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Home
