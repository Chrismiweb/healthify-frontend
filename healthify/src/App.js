import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Quality from "./components/Qaulity";
import HealthInsuranceHero from "./components/HealthInsurance";
import EveryonesHealth from "./components/EveryonesHealth";
import TeleHealthFeatures from "./components/TeleHealthFeatures";
import DoctorSection from "./components/DoctorSection";
import ServicesSection from "./components/HealthService";
import TestimonialsSection from "./components/TestimonialsSection";
import DashboardLayout from "./components/Dashboard";
import Homepage from "./components/Homepage";
import ExploreComponent from "./components/ExploreComponent";
// import ProfileComponent from "./components/ProfileComponent";
// import WardComponent from "./components/WardComponent";
// import SessionsComponent from "./components/SessionsComponent";
// import HospitalComponent from "./components/HospitalComponent";
// import WellnessComponent from "./components/WellnessComponent";
// import FinanceComponent from "./components/FinanceComponent";
// import SubscriptionComponent from "./components/SubscriptionComponent";
// import HelpComponent from "./components/HelpComponent";
// import SettingsComponent from "./components/SettingsComponent";

const LandingPage = () => (
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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/landingPage" element={<LandingPage />} />
        
        {/* Dashboard routes with nested routing */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Homepage />} />
          <Route path="dashboard" element={<Homepage />} />
          <Route path="explore" element={<ExploreComponent />} />
          {/* <Route path="profile" element={<ProfileComponent />} />
          <Route path="ward" element={<WardComponent />} />
          <Route path="sessions" element={<SessionsComponent />} />
          <Route path="hospital" element={<HospitalComponent />} />
          <Route path="wellness" element={<WellnessComponent />} />
          <Route path="finance" element={<FinanceComponent />} />
          <Route path="subscription" element={<SubscriptionComponent />} />
          <Route path="help" element={<HelpComponent />} />
          <Route path="settings" element={<SettingsComponent />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;