import React, { useState, useEffect } from "react";
import {
  VscThreeBars,
  VscChromeClose,
  VscAccount,
  VscSignOut,
} from "react-icons/vsc";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthUser from "../AuthUser";
import navMain from "./navMain.css";

function NavMain({ firstName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const { isLoggedIn, doLogout, getUser } = AuthUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Enable/disable scrolling on the main page
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const logout = () => {
    doLogout();
    history.push("/login");
  };

  return (
    <div>
      {/* nav bar for catagories */}
      <div className="catagory-navbar">
        <div id="mobile" className="nav-buttton">
          <div>
            {isMenuOpen && (
              <div>
                <div className="overlay" onClick={toggleMenu}></div>
                <div className="popup">
                  <VscChromeClose
                    size={30}
                    onClick={toggleMenu}
                    className="close-icon"
                  />
                  <div className="customer-name">
                    <h2>
                      <VscAccount
                        style={{ marginRight: "10px" }}
                        className="VscAccount"
                      />{" "}
                      Hello, {firstName}
                    </h2>
                  </div>
                  <div>
                    <p>Filter options goes here...</p>
                  </div>

                  {/* Logout */}
                  <div className="popup-Logout">
                    {/* Logout button */}
                    <button onClick={logout}>
                      <h2>
                        <VscSignOut className="VscSignOut" /> Sign out
                      </h2>
                    </button>
                    {/* Close popup button */}
                  </div>
                </div>
              </div>
            )}
            {!isMenuOpen && <VscThreeBars size={30} onClick={toggleMenu} />}
          </div>
        </div>
        <h2 className="all">All</h2>
      </div>
    </div>
  );
}

export default NavMain;
