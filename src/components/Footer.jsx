import React from 'react'
import {pageLink} from '../data'
import SocialLink from '../components/SocialLInk';

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">

        {
          pageLink.map((link)=>{
           return(
             <SocialLink key={link.id} {...link} socialClass="footer-link" />
           )
          })

        }
      </ul>
      <ul class="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer