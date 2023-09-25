import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import "./AdminHome.css";

export default function AdminHome() {
  // const Navigate=useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-Containerfull">
      <div className="home-Container1">
        <div className={`home-container-body ${isVisible ? "visible" : ""}`}>
          {/* <div className="home-container-body-h1">
            <span>World's Smartest Vacation Planner</span>
          </div>
          <div className="home-container-body-h4">
            <p>Experience The Best trip ever</p>
          </div> */}
          <div className="home-container-body-links">
            <Link
              to="/Empty"
              className="home-container-btn-link"
              style={{ borderRadius: "60px" }}
            >
              Add Place
            </Link>
          </div>
          <div className="home-container-body-links">
            <Link
              to="/Empty"
              className="home-container-btn-link"
              style={{ borderRadius: "60px" }}
            >
             Add Accommodations
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      
    </div>
  );
}
