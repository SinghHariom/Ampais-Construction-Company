import React from 'react';
import './Side-Icons.css';

import { FaPhone, FaWhatsapp,  FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Side-Icons.css'; // Import the CSS file for styling

const SideIcons = () => {
  return (
    <div className="side-icons">
      <a href="tel:+919340524985" className="icon phone"><FaPhone /></a>
      <a href="https://wa.me/919340524985" className="icon whatsapp"><FaWhatsapp /></a>
      <a href="https://www.instagram.com/ampaisco?utm_source=qr&igsh=MXd1bGdzNzRydjVwZQ==" className="icon instagram"><FaInstagram /></a>
      <a href='mailto:mailto:ampaisconstruction@gmail.com' className="icon email"><FaEnvelope/></a>
    </div>
  );
};

export default SideIcons;
