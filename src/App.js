import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExploreComponent from "./pages/explore/ExploreComponent";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Sidebar from "./components/Sidebar";
import Invoice from "./pages/Finance/Invoice";
import Ward from "./pages/Ward/Ward";
import Session from "./pages/Session/Session";
import Jjj from "./components/Jjj";
import DashboardLayout from "./components/Dashboard";
import Profile from "./pages/Profile/Profile";
import NearestHospital from "./pages/NearesrHospital/NearestHospital";
import Wellness from "./pages/Wellness/Wellness";
import Subscription from "./pages/Subscription/Subscription";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import ChangePassword from "./pages/Auth/ChangePassword/ChangePassword";
import Explore from "./pages/explore/Explore";
import Homepage from "./components/Homepage";
import DashboardTwo from "./pages/Dashboard/DashboardTwo";

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exploreComponent" element={<ExploreComponent />} />
          <Route path="/explore" element={<Explore />} />

          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/ward" element={<Ward/>} />
          <Route path="/session" element={<Session/>} />
          <Route path="/jjj" element={<Jjj/>} />
          {/* <Route path="/dashboard" element={<DashboardLayout/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/nearest-hospitals" element={<NearestHospital/>} />
          <Route path="/wellness" element={<Wellness/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/Help" element={<Help/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Settings" element={<ChangePassword/>} />
          <Route path="/dashboard" element={<DashboardTwo/>} />





          









      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
