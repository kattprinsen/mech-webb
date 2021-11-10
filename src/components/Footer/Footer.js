import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {

  return (
    <div className="footer">
      <span> Follow me on </span>
       <a href={'https://twitter.com/fritzbqvist'}> <FiTwitter /></a>
    </div>
  );
}

export default Footer;
