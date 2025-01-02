import "./footer.css";
import logo4 from "../../assets/assets/logo4.png";
import footer_logo from "../../assets/assets/footer_logo.svg";
import user_icon from "../../assets/assets/user_icon.svg";
import React from "react";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="foooter-top-left">
          <img src={logo4} alt="" width="130" height="80" />
          <p></p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer_subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2025 Dulan Prabashwara. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
export default footer;
