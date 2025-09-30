import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import MainLanding from "./Pages/MainLanding";
import Colorsownspray from "./Pages/Colorsownspray";
import ComingSoon from "./Pages/ComingSoon";
import Career from "./Pages/Career";
import Press from "./Pages/Press";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import Partner from "./Pages/Partner";
import PatentTrademark from "./Pages/PatentTrademark";
import Privacypolicy from "./Pages/Privacypolicy";
import Refundpolicy from "./Pages/Refundpolicy";
import Story from "./Pages/Story";
import Terms from "./Pages/Terms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<MainLanding />} />

        {/* Coming Soon / Placeholder Page */}
        <Route path="/comingsoon" element={<ComingSoon />} />

        {/* Careers */}
        <Route path="/career" element={<Career />} />

        {/* Press & Media */}
        <Route path="/press" element={<Press />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Help & Support */}
        <Route path="/help" element={<Help />} />

        {/* Partner With Us */}
        <Route path="/partner" element={<Partner />} />

        {/* Patent & Trademark */}
        <Route path="/patent-trademark" element={<PatentTrademark />} />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<Privacypolicy />} />

        {/* Refund Policy */}
        <Route path="/refund-policy" element={<Refundpolicy />} />

        {/* Our Story */}
        <Route path="/story" element={<Story />} />

        {/* Terms & Conditions */}
        <Route path="/terms" element={<Terms />} />

        {/* Colorown Spray page */}
        <Route path="/colorsownspray" element={<Colorsownspray />} />
      </Routes>
    </Router>
  );
}

export default App;
