import React from 'react'
import logo from "../images/logo.svg"
import {pageLink,socialLink} from "../data"
import SocialLink from "../components/SocialLInk";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose */}
        <ul className="nav-links" id="nav-links">
          {
            pageLink.map((link)=>{
             return (
               <SocialLink key={link.id} {...link} socialClass="nav-link" />
             ); 
            })
          }
        </ul>

        <ul className="nav-icons">

          {
            socialLink.map((link)=>{
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar