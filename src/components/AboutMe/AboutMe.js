import "./AboutMe.css";
import MyPic from "../../assets/me.jpg";

export default function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-heading">
        <h1>About Me</h1>
      </div>
      <div className="about-me">
        <div className="img-side">
          <img src={MyPic} alt="Cihan Gönen" />
        </div>
        <div className="text-side">
          <p>
            I started learning web development a year ago. From then i made so
            many designs real using html, css and javascript. I just love
            putting every element of the page together like decorating a balcony
          </p>
          <br />
          <p>
            I started learning web development a year ago. From then i made so
            many designs real using html, css and javascript. I just love
            putting every element of the page together like decorating a balcony
          </p>
          <br />
          <p>
            I started learning web development a year ago. From then i made so
            many designs real using html, css and javascript. I just love
            putting every element of the page together like decorating a balcony
          </p>
          <br />
          <p>
            I started learning web development a year ago. From then i made so
            many designs real using html, css and javascript. I just love
            putting every element of the page together like decorating a balcony
          </p>
        </div>
      </div>
    </div>
  );
}
