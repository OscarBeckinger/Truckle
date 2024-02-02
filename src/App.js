import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Homepage } from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home-page" element={< Homepage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
