import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="section-six">
        <div className="upper">
          <h1>Styles Hub</h1>
          <div className="social">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
          </div>
        </div>
        <div className="middle">
          <div className="list-1">
            <h1>Company Info</h1>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="list-2">
            <h1>Legal</h1>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="list-3">
            <h1>Features</h1>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="list-4">
            <h1>Resources</h1>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div className="list-5">
            <h1>Get In Touch</h1>
            <div>
              <input type="email" placeholder="Your Email" name="email" />
              <label>Subscribe</label>
            </div>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div className="bottom">
          <h1>Made With Love By Finland All Right Reserved </h1>
        </div>
      </section>
    </div>
  );
};

export default Footer;
