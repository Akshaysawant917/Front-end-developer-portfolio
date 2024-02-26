import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/nav.css";

function NavB() {
  const [showLinks, setLinks] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setLinks(false);
      } else {
        setLinks(true); // Ensure links are shown when window width is greater than 600
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setLinks(!showLinks);
  };

  return (  
    <nav>
      <Link to="/">portfolio</Link>

      {showLinks && (
        <ul className="navlinks navlinksmob">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/expirience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}

      <button onClick={toggleLinks} className="buttonMenu">&#9776;</button>
    </nav>
  );
}

export default NavB;
