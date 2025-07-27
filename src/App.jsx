import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
