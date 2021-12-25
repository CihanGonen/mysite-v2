import "./AboutMe.css";
import MyPic from "../../assets/me.jpg";

export default function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <div className="about-me">
        <div className="img-side">
          <img src={MyPic} alt="Cihan Gönen" />
        </div>
        <div className="text-side">
          <div className="greetings">
            <h2>Hey I'm Cihan Gönen,</h2>
            <h2>React.js Node.js developer from İzmir/Turkey</h2>
          </div>
          <br />
          <br />
          <p>
            Developed my skills in web area by myself. This way I learned how to
            read documentation. I can learn new technologies and have a good
            grasp on them easily. Created many web pages using only html,css and
            also more advenced technologies.
          </p>
          <br />
          <p>
            Love creating useful web pages and share with my friends. Now I want
            to use my skills to work with a team to create bigger and more
            exciting projects. I want to work in the web development area using
            Javascript techologies because this is what I enjoy doing.
          </p>
          <br />
          <p>
            In college I learned the theory of things and also practiced them
            with projects. We always tried to write code sustainable, reliable,
            and pure so I always care about my code quality. This way it can be
            understood by my team mates.
          </p>
        </div>
      </div>
    </div>
  );
}
