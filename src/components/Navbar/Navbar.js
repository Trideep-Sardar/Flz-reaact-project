import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const[state,setState]=useState(false);
  const handleClick=()=>{
    setState(!state);
  }
  return (
    <>
      <div className="navbar-container">
        <div className="toggle-btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-wrapper">
          <div className="logo-wrapper">
            <span className="logo">FLEXAGN</span>
          </div>
          <ul className={state?"links-wrapper-btn":"links-wrapper"}>
            <Link to="/" li className="link-item active">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li>About Us</li>
            </Link>
            <Link to='/' className="link-item"><li>Pricing</li></Link>
            <Link to='/' className="link-item"><li>Teacher Login</li></Link>
            <Link to='/' className="link-item"><li>Parent Login</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
