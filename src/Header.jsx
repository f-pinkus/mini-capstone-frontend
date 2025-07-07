import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">The Clothing Co.</Link>

          <div className="d-flex align-items-center gap-2">
            {isLoggedIn ? (
              <>
                <Link to="/cart" className="btn btn-outline-primary">Cart</Link>
                <LogoutLink setIsLoggedIn={setIsLoggedIn} />
              </>
            ) : (
              <>
                <Link to="/signup" className="btn btn-outline-success">Sign Up</Link>
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
