// About.js
import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our trip planning platform! We are passionate about helping you plan your dream vacations.
        {/* Add more information about your application */}
      </p>
      <h2>Our Team</h2>
      <div className="team-members">
        {/* Add team member information here */}
        <div className="team-member">
          <img src="a1.jpg" alt="John Doe" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <br/>
        <div className="team-member">
          <img src="jane.jpg" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div><br/>
        <div className="team-member">
          <img src="alice.jpg" alt="Alice Johnson" />
          <h3>Alice Johnson</h3>
          <p>Designer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
