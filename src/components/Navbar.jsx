import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img
            src="https://prog-8.com/assets/packs/dist/images/typo_logo-b40bf595603dc0e63a5c..svg"
            alt="logo"
          />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/">Language</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/" id="last__child">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
