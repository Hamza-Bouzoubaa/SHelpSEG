import TopBar from "./components/topbar/TopBar.jsx";
import Home1 from "./pages/home/Home1";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer"
import Services from "./pages/services/Services"
import Viewall from "./pages/viewall/Viewall.jsx"
import About from "./pages/about/About.jsx"
import Info from "./pages/info/Info.jsx"
import Contact from "./pages/contact/Contact.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/SHelpSEG">
      <TopBar />
      <Routes>
        <Route path="" element={<Home1 />} />
        <Route path="/SHelpSEG/" element={<Home1 />} />
        <Route path="/Home" element={<Home1 />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Viewall" element={<Viewall />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>     
  );
}

export default App;
