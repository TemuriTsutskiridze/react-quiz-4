import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          MyApp
        </div>

        <nav className="header-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/users"
            className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`}
          >
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;