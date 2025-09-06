import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ComingSoon from "./Pages/ComingSoon";
import Colorsownspray from "./Pages/Colorsownspray";
import Career from "./Pages/Career";
import Press from "./Pages/Press";
//import Colorownspray from "./Colorownspray"; // ✅ Import your Colorownspray component

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
