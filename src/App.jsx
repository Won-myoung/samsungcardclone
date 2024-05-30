import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import My from "./My";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/My" element={<My />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
