import RecipeFinderImg from "../assets/recipe-finder.png";
import NineOktasImg from "../assets/nine-oktas.png";
import StudyTimerImg from "../assets/study-timer.png";
import SunnySideImg from "../assets/sunnyside-landing.png";

const PROJECTS = [
  {
    id: 1,
    name: "Study Timer",
    imgSrc: StudyTimerImg,
    desc: "A timer for study sessions.",
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
    name: "Recipe Finder",
    imgSrc: RecipeFinderImg,
    desc: "Helps you search recipes.",
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
    id: 4,
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
];

export { PROJECTS };
