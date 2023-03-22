import { useState } from "react";
import LOGO from "../assets/img/logo-ifood.png";

const Title = () => (
  <a href="/">
    <img alt="logo" src={LOGO} className="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
