import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [userEntryBtn, setUserEntryBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {logedInUser} = useContext(UserContext);
  
  return (
    <header>
      <div className="flex justify-between  bg-orange-300 shadow-lg">
        <div className="w-32">
          <img src={LOGO_URL} />
        </div>
        <div className="components">
          <ul className="flex m-4 p-4">
            <li className="px-4">Status: {onlineStatus === true ? ("🟢") : "🔴"}</li>
            <li className="px-4"><Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/about"}>About Us</Link></li>
            <li className="px-4"><Link to={"/contactus"}>Contact Us</Link></li>
            <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button
              className="px-4"
              onClick={() => {
                userEntryBtn === "Login"
                  ? setUserEntryBtn("Logout")
                  : setUserEntryBtn("Login");
              }}
            >
              {userEntryBtn}
            </button>
            <li>{logedInUser}</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
