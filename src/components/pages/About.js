import React from 'react';
import '../styles/Styles.css';
import avatar from "../../Assets/Fotor_AI.png";


export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={avatar} className="avatar" alt="avatar" />
      <p>
      Enabling non-profits to do more good. I bridge people and processes with technology, connecting and empowering teams to succeed with the latest tools, systems and digital strategies.

Smart, tech-savvy, and business-minded, I have translated tech for clients and rolled up sleeves with development teams in large enterprises, the public sector, and SMBs including VANOC (Vancouver Olympic Organizing Committee), BlackBerry, TELUS, and Absolute Software.
      </p>
    </div>
  );
}
