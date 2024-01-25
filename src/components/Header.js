import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [userEntryBtn, setUserEntryBtn] = useState("login");
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="components">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                userEntryBtn === "login"
                  ? setUserEntryBtn("logout")
                  : setUserEntryBtn("login");
              }}
            >
              {userEntryBtn}
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
