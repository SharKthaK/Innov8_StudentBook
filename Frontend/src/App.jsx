import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Enroll from "./components/pages/Enroll";
import Services from "./components/pages/Services";
import BBIT from "./components/pages/colleges/BBIT";
import CSEAI from "./components/pages/departments/CSEAI";
import AI26 from "./components/pages/batch/AI26.JSX";
import "./components/pages/Home.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/1/BBIT" element={<BBIT />} />
        <Route path="/2/CSE-AI" element={<CSEAI />} />
        <Route path="/1/2022-2026" element={<AI26 />} />
        <Route path="*" element={<h1 className="noData">No Data Found</h1>} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;