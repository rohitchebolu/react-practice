import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [userEntryBtn, setUserEntryBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="components">
          <ul>
            <li>Status: {onlineStatus === true ? ("🟢") : "🔴"}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contactus"}>Contact Us</Link></li>
            <li><Link to={"/grocery"}>Grocery</Link></li>
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
