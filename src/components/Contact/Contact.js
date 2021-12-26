import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-infos">
        <div className="line"> </div>
        <a
          href="https://www.linkedin.com/in/cihan-gonen"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a
          href=" https://github.com/CihanGonen"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <i className="devicon-github-original"></i>
        </a>
        <div className="line"> </div>
      </div>
      <p className="contact-email">
        You can also email me on{" "}
        <span>
          <a style={{ color: "white" }} href="mailto:cihangonen4k@gmail.com">
            cihangonen4k@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}
