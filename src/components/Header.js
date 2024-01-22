import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
