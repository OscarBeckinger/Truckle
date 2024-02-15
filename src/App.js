import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Homepage } from "./pages/home-page";
import { ThaiE } from "./pages/trucks/Thai8E8";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home-page" element={< Homepage />} />
          <Route path="/Thai8E8" element={< ThaiE />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
