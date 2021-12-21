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
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a
          href=" https://github.com/CihanGonen"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <i class="devicon-github-original"></i>
        </a>
        <div className="line"> </div>
      </div>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        You can also email me on{" "}
        <span style={{ color: "white" }}>cihangonen4k@gmail.com</span>
      </p>
    </div>
  );
}
