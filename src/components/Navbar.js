import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              DevPR
            </Link>

            <ul className="right hide-on-med-and-down">
              <li>
                <a href="!#">Sign In</a>
              </li>
              <li>
                <a href="!#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
