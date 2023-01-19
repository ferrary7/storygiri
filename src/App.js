import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Blogs from "./components/Blogs";
import About from "./components/About";
import TandC from "./components/TandC";
import PrivacyPolicy from "./components/PirvacyPolicy";
import OneOnOne from "./components/OneOnOne";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/t&c" element={<TandC />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/ooo" element={<OneOnOne />} />
    </Routes>
  );
}

export default App;
