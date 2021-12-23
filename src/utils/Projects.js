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
      "User can set a study session and a braek session(max 60 mins,min 1 min). Once you start the timer, study session starts and when it ends break session starts. It goes on like that. When timer hits 00:00 an alarm starts ringing and it makes the user know that the session ended.Once you click the start button you can't set the timer.In order to set time you should reset it.While you are studying you can listen any ambiance sound by choosing it on the topside and if you dont want any sound you can just choose no ambiance option.",
    techs: ["html", "css", "react", "javascript", "tailwind"],
  },
  {
    id: 2,
    name: "9 Oktas Cloud Storage",
    imgSrc: NineOktasImg,
    desc: "9oktas Cloud Storage App Website",
    longDesc:
      "User can set a study session and a braek session(max 60 mins,min 1 min). Once you start the timer, study session starts and when it ends break session starts. It goes on like that. When timer hits 00:00 an alarm starts ringing and it makes the user know that the session ended.Once you click the start button you can't set the timer.In order to set time you should reset it.While you are studying you can listen any ambiance sound by choosing it on the topside and if you dont want any sound you can just choose no ambiance option.",
    techs: ["html", "css", "react", "javascript", "firebase", "node"],
  },
  {
    id: 3,
    name: "Recipe Finder",
    imgSrc: RecipeFinderImg,
    desc: "Helps you search recipes.",
    longDesc:
      "User can set a study session and a braek session(max 60 mins,min 1 min). Once you start the timer, study session starts and when it ends break session starts. It goes on like that. When timer hits 00:00 an alarm starts ringing and it makes the user know that the session ended.Once you click the start button you can't set the timer.In order to set time you should reset it.While you are studying you can listen any ambiance sound by choosing it on the topside and if you dont want any sound you can just choose no ambiance option.",
    techs: ["html", "css", "react", "javascript"],
  },
  {
    id: 4,
    name: "Sunny Side Landing Page",
    imgSrc: SunnySideImg,
    desc: "Landing Page",
    longDesc:
      "User can set a study session and a braek session(max 60 mins,min 1 min). Once you start the timer, study session starts and when it ends break session starts. It goes on like that. When timer hits 00:00 an alarm starts ringing and it makes the user know that the session ended.Once you click the start button you can't set the timer.In order to set time you should reset it.While you are studying you can listen any ambiance sound by choosing it on the topside and if you dont want any sound you can just choose no ambiance option.",
    techs: ["html", "css", "sass"],
  },
];

export { PROJECTS };
