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
              Worked with designers and I made their designs alive using
              <span className="keyword"> html </span>and
              <span className="keyword"> css</span>. This way
              <span className="keyword">
                {" "}
                I learned to turn design files to working web pages{" "}
              </span>
              . In this job I mostly worked on the projects with a senior web
              developer and learned many things from him like
              <span className="keyword"> communicating with apis </span>and
              <span className="keyword"> client-server communication </span>.
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
                <h2 className="experience-company">Havelsan</h2>
                <h2>/</h2>
                <h3 className="experience-company">Jul 2020 - Aug 2020 </h3>
              </div>
              <h3 className="title">Software Developer Internship</h3>
            </div>
          </div>

          <div className="experience-text">
            <p>
              Got the chance to do an internship in the Havelsan which is one of
              the best Turkish software and systems company having business
              presence in the defence and IT sectors. In this experience I
              worked in the client side and used
              <span className="keyword"> SAPUI5 </span>to help team
              <span className="keyword">
                {" "}
                to create cross-platform web applications
              </span>
              .
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
              Learned<span className="keyword"> algorithmic </span>thinking and
              solved many problems using
              <span className="keyword"> Java </span>and
              <span className="keyword"> C#</span>. I also learned to create
              projects using<span className="keyword"> agile </span>and
              <span className="keyword"> scrum </span>methodologies. We usually
              created projects as a team so
              <span className="keyword">
                {" "}
                I learned to be a team member and to communicate{" "}
              </span>
              with each other to meet the deadlines.
            </p>
            <br />
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>GPA ( 3.48 / 4 )</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
