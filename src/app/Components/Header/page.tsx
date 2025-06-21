import React from "react";
import "./header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header>
        <div className="menu2">
          <div className="heading">
            <h1>Styles Hub</h1>
          </div>
          <div className="nav">
            <ul>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li id="dropDown">
                  Shop <i className="bx bx-chevron-down"></i>
                </li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Contact</li>
              </Link>
              <Link href="#">
                <li>Pages</li>
              </Link>
            </ul>
          </div>
          <div className="login-reg-icons">
            <div className="login-reg">
              <i className="bx bxs-user mr-2"></i>
              <button
                id="login"
                className="hover:scale-110 hover:transition-all duration-300 ease-in-out hover:text-blue-700"
              >
                Login
              </button>
              <p className="ml-2 mr-2">/</p>
              <button
                id="register"
                className="mr-14 hover:scale-110 hover:transition-all duration-300 ease-in-out hover:text-blue-700"
              >
                Register
              </button>
            </div>
            <div className="icons">
              <i className="bx bx-search-alt-2 mr-4 hover:scale-125 hover:transition-all duration-300 ease-in-out hover:text-blue-700 cursor-pointer"></i>
              <i className="bx bx-cart-alt mr-4 hover:scale-125 hover:transition-all duration-300 ease-in-out hover:text-blue-700 cursor-pointer"></i>
              <i className="bx bx-heart mr-4 hover:scale-125 hover:transition-all duration-300 ease-in-out hover:text-blue-700 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
