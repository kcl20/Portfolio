import React from 'react';
import './styles/Header.css';
import logo from "../Assets/round logo.jpg";

export default function Header() {
    return (
      <div className="header">
     <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
  