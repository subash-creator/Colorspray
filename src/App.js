import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./Pages/Career";
import Press from "./Pages/Press";
import Colorsownspray from "./Pages/Colorsownspray";
import MainLanding from "./Pages/MainLanding";
import ComingSoon from "./Pages/ComingSoon";
function App() {
  return (
    <Router>
      <Routes>
       

        {/* Coming Soon page */}
        <Route path="/" element={<MainLanding />} />

        {/* Careers page */}
        <Route path="/career" element={<Career />} />

        {/* Press & Media page */}
        <Route path="/press" element={<Press />} />
        {/* Colorown Spray page */}
        <Route path="/Colorsownspray" element={<Colorsownspray />} /> 
         <Route path="/ComingSoon" element={<ComingSoon />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
