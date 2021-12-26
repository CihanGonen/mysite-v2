import RecipeFinderImg from "../assets/recipe-finder.png";
import NineOktasImg from "../assets/nine-oktas.png";
import StudyTimerImg from "../assets/study-timer.png";
import SunnySideImg from "../assets/sunnyside-landing.png";
import TaskManagementSystemImg from "../assets/task_management_system.png";
import SmartEduImg from "../assets/smartEdu.png";

const PROJECTS = [
  {
    id: 1,
    name: "Task Management System for my College",
    imgSrc: TaskManagementSystemImg,
    desc: "Task Management System for my College",
    longDesc:
      "It's a graduation project of mine. I'm building a task management system for my school. In this website there are 4 types of user; admins, heads of department, employees of department and visitors. The main idea is everyone can create a task for a specific department. Every departments heads will assign these tasks to employees of the department and they will communicate on tasks.",
    techDesc: (
      <p>
        <p>
          I used<span className="keyword"> React </span>in the client and
          <span className="keyword"> Node </span>in server. Since there are many
          relations between entitites I decided to use a relational database and
          I chose<span className="keyword"> PostgreSQL</span>. For
          authentication and authorization operations I used json web tokens
          aka.
          <span className="keyword"> JWT</span>.
        </p>
        <br />
        <p>
          At first I designed the database and relations between each table.
          Afterwards I created my database in Postgresql and started creating
          routes using Node. Before getting into client side I created every
          route that I think I will need and I tested them using
          <span className="keyword"> Postman</span>.
        </p>
      </p>
    ),
    techs: ["html", "css", "javascript", "react", "node", "psql"],
    sourceCode: "https://github.com/CihanGonen/taskManagement/tree/main",
  },
  {
    id: 2,
    name: "9 Oktas Cloud Storage",
    imgSrc: NineOktasImg,
    desc: "9oktas Cloud Storage App Website",
    longDesc:
      "9oktas is a school project that we made as a group. I was the group leader and full-stack web developer. In this project you can login and signup. In these steps I also setted up a server to send a verification code to users email for extra security. After authentication operations there is a dashbaord that you can see the files that you uploaded and you can create folders and upload new files.",
    techDesc: (
      <p>
        I used<span className="keyword"> React </span>in the client and Node in
        the server. I used<span className="keyword"> Firebase </span>for
        authentication and file storage. I used
        <span className="keyword"> useContext </span> hook effectively to
        storing user data for authorization processess.
        <span className="keyword"> I also created many hooks </span>in order to
        stop repeating writing the same code and I tried to keep everything DRY.
      </p>
    ),
    techs: ["html", "css", "react", "javascript", "firebase", "node"],
    liveApp: "",
    sourceCode: "https://github.com/CihanGonen/9oktas-web",
  },
  {
    id: 3,
    name: "Study Timer",
    imgSrc: StudyTimerImg,
    desc: "Timer For Study Sessions",
    longDesc:
      "User can set a study session and a braek session(max 60 mins,min 1 min). Once you start the timer, study session starts and when it ends break session starts. It goes on like that. When timer hits 00:00 an alarm starts ringing and it makes the user know that the session ended.Once you click the start button you can't set the timer. In order to set time you should reset it. While you are studying you can listen any ambiance sound by choosing it on the topside and if you dont want any sound you can just choose no ambiance option.",
    techDesc: (
      <p>
        I used<span className="keyword"> React </span>in the client and
        <span className="keyword"> TailwindCSS </span>for styling purposes. In
        this project states was extra important and hard to manage. I tried my
        best by trying to use
        <span className="keyword"> useState, useEffect and useRef </span> as
        effective as possible.
      </p>
    ),
    techs: ["html", "css", "react", "javascript", "tailwind"],
    liveApp: "https://studytimerbycihan.herokuapp.com/",
    sourceCode: "https://github.com/CihanGonen/study-timer",
  },
  {
    id: 4,
    name: "Recipe Finder",
    imgSrc: RecipeFinderImg,
    desc: "Helps You Search Recipes",
    longDesc:
      "In this recipe finder project you can search recipes based on category, it's main ingredient, or area and you can see recipes details like ingredients,instructions or area on every recipe page.",
    techDesc: (
      <p>
        In this project I used<span className="keyword"> React </span>in the
        client and i also used a public <span className="keyword"> api </span>to
        get all these recipe informations called theMealDB. I hit different
        endpoints for different search parameters. For dark-light mode I used
        <span className="keyword"> useContext </span> hook and I used
        <span className="keyword"> local storage </span> to keep mode status or
        search parameters.
      </p>
    ),
    techs: ["html", "css", "react", "javascript"],
    liveApp: "https://cihangonen.github.io/recipe-finder/",
    sourceCode: "https://github.com/CihanGonen/recipe-finder",
  },
  {
    id: 5,
    name: "Sunny Side Landing Page",
    imgSrc: SunnySideImg,
    desc: "Landing Page",
    longDesc: (
      <p>
        In this landing page project I used
        <span className="keyword"> Sass </span>to keep my stylings clean.
      </p>
    ),
    techs: ["html", "css", "sass"],
    liveApp: "https://cihangonen.github.io/sunnySide-landingPage/",
    sourceCode: "https://github.com/CihanGonen/sunnySide-landingPage",
  },
  {
    id: 6,
    name: "SmartEdu Project",
    imgSrc: SmartEduImg,
    desc: "SmartEdu Project",
    longDesc:
      "It's a Udemy like web page. You can sign in as a student, teacher or admin .As a teacher you can create courses and see your students. As a student you can enroll to courses and as an admin you can manage all courses and students.",
    techDesc: (
      <p>
        I followed the<span className="keyword"> MVC </span>pattern to create
        the routes and endpoints.For the db I choosed
        <span className="keyword"> MongoDB </span>and created different models
        for user, category and course. I used sessions for authentication and
        authorization operations. In client side I turned html to template
        engine<span className="keyword"> Ejs</span>. This project is only
        backend.
      </p>
    ),
    techs: ["javascript", "node", "mongodb"],
    liveApp: "https://smartedu-project.herokuapp.com/",
    sourceCode: "https://github.com/CihanGonen/SmartEduProject",
  },
];

export { PROJECTS };
