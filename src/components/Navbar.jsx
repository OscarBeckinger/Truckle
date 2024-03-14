import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css";
import React, { useState, useEffect } from 'react';
import Logo from "../pages/auth/assets/TruckleImage.png";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close links if openLinks is true and screen size changes
      if (openLinks && window.innerWidth > 600) {
        setOpenLinks(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [openLinks]);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
        <Link to="/home-page"> Home </Link>
        <Link to="/Search"> Search </Link>
        <Link to="/LeaderBoard"> Leaderboard </Link>
        <Link to="/AccountSettings"> AccountSettings </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/home-page"> Home </Link>
        <Link to="/Search"> Search </Link>
        <Link to="/LeaderBoard"> Leaderboard </Link>
        <Link to="/AccountSettings"> AccountSettings </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;







// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/home-page" className="site-title">
//         Truckle
//       </Link>
//       <ul>
//         <CustomLink to="/Search">Search</CustomLink>
//         <CustomLink to="/LeaderBoard">Leader Board</CustomLink>
//         <CustomLink to="/AccountSettings">Account Settings</CustomLink>
//       </ul>
//     </nav>
//   )
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }