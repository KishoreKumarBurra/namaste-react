import { LOGO_URL } from "../../utils/constants";
import profile from "../../../../assests/profile.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅": "⭕"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <img
              className="icon"
              alt="profile-icon"
              src={profile}
              width={20}
              height={20}
            />
          </li>
          <li>
            <button className="login-btn" onClick={() => {
              btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
            }}>{btnNameReact}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
