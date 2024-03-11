import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home-page" className="site-title">
        Truckle
      </Link>
      <ul>
        <CustomLink to="/Search">Search</CustomLink>
        <CustomLink to="/LeaderBoard">Leader Board</CustomLink>
        <CustomLink to="/AccountSettings">Account Settings</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}