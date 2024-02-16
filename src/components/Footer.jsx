import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer container_pd">
      <div className="logo">
        <Link to="/">
          Alfreza<span className="green">.</span>
        </Link>
      </div>

      <div>
        <hr />
        <span>
          Designed & Developed By
          <Link to="https://github.com/Juadebfm" target="_blank">
            {" "}
            Juadeb Gabriel
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
