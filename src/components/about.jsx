import React from 'react'
import "../styles/about.css";
import boylaptop2 from "../assets/boylaptop2.png";
const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-background">
         
          <div className="about-wrapper">
            <div className="left-about">
              <img src={boylaptop2} alt="" />
            </div>
            <div className="right-about">
              <div className="about-card">
                
                <p>
                IT Fresher with past experience of analytical chemist and solid understanding of Frontend Technologies, Skilled in JavaScript language and web development methodologies. 
                </p>
              </div>
              <div className="about-card">
                <h5>Certifications-</h5>
                <p>Full stack web development from Edureka co. Panvel(Offline mode)</p>
              </div>
              <div className="about-card">
                <h5>Education-</h5>
                <p>Master of Science: Analytical Chemistry, Arunodaya University.
	Bachelor of Science: Chemistry, Viva college of science, Virar.

</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blur1"></div>
      <div className="blur2"></div>
      </section>
    </div>
  )
}

export default About