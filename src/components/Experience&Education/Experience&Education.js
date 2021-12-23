import "./Experience&Education.css";

import GrafiketLogo from "../../assets/grafiket.jpg";
import HavelsanLogo from "../../assets/havelsan.jpg";
import FiratLogo from "../../assets/firat.jpg";

export default function Experience() {
  return (
    <div className="experience-education-wrapper">
      <div className="experience-wrapper">
        <h1 className="experience-education-heading">Experience</h1>
        <div className="experience-details">
          <div className="experience-heading">
            <div className="experience-img">
              <img src={GrafiketLogo} alt="Grafiket Adworks" />
            </div>
            <div className="experience-headings-title">
              <div className="experience-headings">
                <h2 className="experience-company">Grafiket Adworks / </h2>
                <h3 className="experience-company">Oct 2020 - Dec 2020 </h3>
              </div>
              <h3 className="title"> Web Development Intern</h3>
            </div>
          </div>

          <div className="experience-text">
            <p>
              I started learning web development a year ago. From then i made so
              many designs real using html, css and javascript. I just love
              putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony
            </p>
          </div>
        </div>
        <div className="experience-details">
          <div className="experience-heading">
            <div className="experience-img">
              <img src={HavelsanLogo} alt="Havelsan" />
            </div>
            <div className="experience-headings-title">
              <div className="experience-headings">
                <h2 className="experience-company">Havelsan / </h2>
                <h3 className="experience-company">Jul 2020 - Aug 2020 </h3>
              </div>
              <h3 className="title">Software Developer Internship</h3>
            </div>
          </div>

          <div className="experience-text">
            <p>
              I started learning web development a year ago. From then i made so
              many designs real using html, css and javascript. I just love
              putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony
            </p>
          </div>
        </div>
      </div>
      <div className="education-wrapper">
        <h1 className="experience-education-heading">Education</h1>
        <div className="experience-details">
          <div className="experience-heading">
            <div className="experience-img">
              <img src={FiratLogo} alt="Firat University" />
            </div>
            <div className="experience-headings-title">
              <div className="experience-headings">
                <h2 className="experience-company">Firat University / </h2>
                <h3 className="experience-company">
                  Sept 2017 - Present (June 2022)
                </h3>
              </div>
              <h3 className="title">Software Development</h3>
            </div>
          </div>

          <div className="experience-text">
            <p>
              I started learning web development a year ago. From then i made so
              many designs real using html, css and javascript. I just love
              putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony I started learning web development a year ago. From then i
              made so many designs real using html, css and javascript. I just
              love putting every element of the page together like decorating a
              balcony
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
