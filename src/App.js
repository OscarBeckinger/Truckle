import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Homepage } from "./pages/home-page";
import { ThaiE } from "./pages/trucks/Thai8E8";
import { Perro } from "./pages/trucks/Perro";
import { Salpicon } from "./pages/trucks/Salpicon";
import {TruckPage} from "./pages/trucks/TruckPage/truckPage"
import AccountSettings from "./pages/account-settings/AccountSettings";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home-page" element={< Homepage />} />
          <Route path="/Thai8E8" element={< ThaiE />} />
          <Route path="/Perro" element={< Perro />} />
          <Route path="/Salpicon" element={< Salpicon />} />
          <Route path="/truckPage" element={<TruckPage />} />
          <Route path="/AccountSettings" element={<AccountSettings />} /> {/* Add this route */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
