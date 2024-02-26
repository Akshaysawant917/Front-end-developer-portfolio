import React from "react";
import "../styles/expirience.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import reactpng from "../assets/reactpng.png";
import responsive from "../assets/responsive.png";
import Skilllogo from "./skilllogo";
const logoData = [
  {
    name: "html",
    logo: html,
  },
  {
    name: "css",
    logo: css,
  },
  {
    name: "Javascript",
    logo: js,
  },
  {
    name: "React",
    logo: reactpng,
  },
  {
    name: "Responsive",
    logo: responsive,
  },
  {
    name: "Tailwind",
    logo: tailwind,
  },
];
// import PdfViewer from './PdfViewer';
// import pdf from "../assets/Front_End_Web_Developer_Fresher_Resume"
const Expirience = () => {
  return (
    <div>
      <section className="expirience">
        <div className="expirience-wrapper">
          <div className="left-expirience">
            {logoData.map((item) => {
              return <Skilllogo projectDataTo={item} />;
            })}
          </div>
          <div className="right-expirience">
            {/* <PdfViewer pdfUrl={pdf} /> */}
            <div className="expirience-card">
              <h5>Officer-Hikal ltd.(Non IT) -1 year</h5>
              <li>
              Analysis and data interpretation of agrochemicals on instrument like HPLC and GC
              </li>
              <li>Calibrations of instruments</li>
            
            </div>
            <div className="expirience-card">
              <h5>Assitant Officer-Blue jet healthcare ltd.(Non IT) -1.6 years</h5>
              <li>Analysis of pharmaceutical prodcuts on instruments</li>
              
            </div>
          </div>
        </div>
        <div className="blur1"></div>
        <div className="blur2"></div>
      </section>
    </div>
  );
};

export default Expirience;
