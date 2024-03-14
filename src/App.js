import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Homepage } from "./pages/home-page";
import { TruckPage } from "./pages/TruckPage/truckPage";
import { Searchpage } from "./pages/search-page";
import AccountSettings from "./pages/account-settings/AccountSettings";
import LeaderBoard from "./pages/Leaderboard/leaderboard";
import AboutRanking from "./pages/Leaderboard/AboutRanking";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import { useLocation } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarWithConditionalRendering /> 
        <Routes>
          <Route path="/" exact element={< Auth />} />
          <Route path="/home-page" element={< Homepage />} />
          <Route path="/Perro" element={TruckPage('Perro')} />
          <Route path="/Salpicon" element={TruckPage('Salpicon')} />
          <Route path="/8E8 Thai" element={TruckPage('8E8 Thai')} />
          <Route path="/CerdaVega" element={TruckPage('Cerda Vega Tacos')} />
          <Route path="/StopBye" element={TruckPage('StopBye Cafe')} />
          <Route path="/SmileHotdog" element={TruckPage('Smile Hotdog')} />
          <Route path="/AccountSettings" element={<AccountSettings />} /> {/* Add this route */}
          <Route path="/LeaderBoard" element={<LeaderBoard />} /> {/* Add this route */}
          <Route path="/AboutRanking" element={<AboutRanking />} /> {/* Add this route */}
          <Route path="/Search" element={<Searchpage />} />
        </Routes>
        <FooterbarWithConditionalRendering />
      </Router>

    </div>
  );
}

function NavbarWithConditionalRendering() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/"]; // Add paths here that shouldn't render the Navbar
  if (pathsWithoutNavbar.includes(location.pathname)) {
    return null;
  } else {
    return <Navbar />;
  }
}

function FooterbarWithConditionalRendering() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/"]; // Add paths here that shouldn't render the Navbar
  if (pathsWithoutNavbar.includes(location.pathname)) {
    return null;
  } else {
    return <Footer />;
  }
}



export default App;
