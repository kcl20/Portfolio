import React from 'react';
import '../styles/Styles.css';
import resume from "../../Assets/Resume - Kenny Li - Grantbook.docx.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <p>Download my <a href={resume}>Resume</a></p>
    </div>
  );
}
