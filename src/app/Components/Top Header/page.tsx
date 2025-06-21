import React from "react";
import "./topHeader.css";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div>
      <header className="topHeader">
        <div className="menu">
          <div className="contact">
            <div className="icon-Number">
              <i className="bx bx-phone"></i>
              <h3>0335-130-6807</h3>
            </div>
          </div>
          <div className="email">
            <div className="icon-email">
              <i className="bx bx-envelope"></i>
              <h3>umerfarooq13000@gmail.com</h3>
            </div>
          </div>
          <div className="description">
            <h3>Follow Us & get a chance to win 80% off</h3>
          </div>
          <div className="follow">
            <h3>Follow Us :</h3>
            <div className="icons">
              <Link href="#">
                <i className="bx bxl-instagram instagram common"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-youtube youtube common"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-facebook-circle facebook common"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-twitter twitter common"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;