import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import My from "./My";
import Benefit from "./Benefit";
import Guide from "./Guide";
import Finance from "./Finance";
import Payment from "./Payment";
import { useState } from "react";
// import "./reset.css";

function App() {
  const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);

  const toggleHidemenu = () => {
    setIsHideMenuOpen(!isHideMenuOpen);
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header toggleHideMenu={toggleHideMenu} /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/My" element={<My />} />
          <Route path="/Benefit" element={<Benefit />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
