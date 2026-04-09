import { Link } from "react-router-dom";
import "./Header.css";
import { getUsername , isLoggedIn , logout } from "../utils/auth";

function Header() {
  const username = getUsername();
  const isUserLoggedIn = isLoggedIn();

  return (
    <header className="header">
      <div className="logo">UserApp</div>

      <nav>
        <Link to="/">Users</Link>
        <Link to="/create">Create User</Link>
      </nav>
    </header>
  );
}

export default Header;