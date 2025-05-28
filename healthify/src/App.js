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

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreComponent />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/ward" element={<Ward/>} />
          <Route path="/session" element={<Session/>} />




      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
