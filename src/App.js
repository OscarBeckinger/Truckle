import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { home } from "./pages/home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home" element={< home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
