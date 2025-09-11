import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./Pages/Career";
import Press from "./Pages/Press";

import ComingSoon from "./Pages/ComingSoon";
function App() {
  return (
    <Router>
      <Routes>
       

        {/* Coming Soon page */}
        <Route path="/" element={<ComingSoon />} />

        {/* Careers page */}
        <Route path="/career" element={<Career />} />

        {/* Press & Media page */}
        <Route path="/press" element={<Press />} />
      </Routes>
    </Router>
  );
}

export default App;
