import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Quality from './components/Qaulity';
import HealthInsuranceHero from './components/HealthInsurance';
import EveryonesHealth from './components/EveryonesHealth';
import TeleHealthFeatures from './components/TeleHealthFeatures';
import DoctorSection from './components/DoctorSection';
import ServicesSection from './components/HealthService';
import TestimonialsSection from './components/TestimonialsSection';

const App = () => {
  return (
    <div className="App">
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
  );
};

export default App;