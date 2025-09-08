import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ComingSoon from "./Pages/ComingSoon";

import Career from "./Pages/Career";
import Press from "./Pages/Press";
import Colorsownspray from "./Pages/Colorsownspray";
function App() {
  return (
    <Router>
      <Routes>
       

        {/* Coming Soon page */}
        <Route path="/" element={<Colorsownspray />} />

        {/* Careers page */}
        <Route path="/career" element={<Career />} />

        {/* Press & Media page */}
        <Route path="/press" element={<Press />} />
      </Routes>
    </Router>
  );
}

export default App;
