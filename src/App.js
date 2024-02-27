import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Homepage } from "./pages/home-page";
import {TruckPage} from "./pages/TruckPage/truckPage"
import AccountSettings from "./pages/account-settings/AccountSettings";

// found weird glitch: if type pagen, it blank screen cause not valid path, if i say page to rever back to actual pack throws error cannot read properties of null (readin 'title'); I think because its a default, does not know how to work with no data. 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home-page" element={< Homepage />} />
          <Route path="/Perro" element={ TruckPage('Perro')} />
          <Route path="/Salpicon" element={TruckPage ('Salpicon')} />
          <Route path="/Thai8E8" element={TruckPage('8E8 Thai')} />
          <Route path="/AccountSettings" element={<AccountSettings />} /> {/* Add this route */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
