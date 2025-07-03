import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header({ isLoggedIn, setIsLoggedIn }) {
  // Check if user is logged in by looking for email in localStorage

  return (
    <header>
      <nav>
        <div>
          <Link to="/">Your App Name</Link>
          <div>
            {isLoggedIn ? (
              <LogoutLink setIsLoggedIn={setIsLoggedIn}/>
            ) : (
              <>
                <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}