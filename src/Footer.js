import React from 'react';
import './CSS/Footer.css';

const Footer = () => {

return(
 <>
 <footer data-testid = 'footer'>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">POPCORN HUB</span>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="/#">Home</a></li>
          <li><a href="/#">Contact us</a></li>
          <li><a href="/#">About us</a></li>
          <li><a href="/#">Get started</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><a href="/#">Delivery</a></li>
          <li><a href="/#">Catering</a></li>
          <li><a href="/#">Dine-in Reservation</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="/#">Profile</a></li>
          <li><a href="/#">Cart</a></li>
          <li><a href="/#">Purchase</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Social</li>
          <li><a href="/#">Facebook</a></li>
          <li><a href="/#">Instagram</a></li>
          <li><a href="/#">Twitter</a></li>
          <li><a href="/#">Telegram</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2022 <a href="/#">Donjie and Friends.</a>All rights deserved</span>
        <span class="policy_terms">
          <a href="/#">Privacy policy</a>
          <a href="/#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
 </>
);

 }
export default Footer;