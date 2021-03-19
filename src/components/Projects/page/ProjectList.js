import React from "react";
import drum from "../../../assets/drum.png";
import burger from "../../../assets/burger.png";
import mail from "../../../assets/mail.png";
import blog from "../../../assets/blog.png";
import shop from "../../../assets/shop.png";
import places from "../../../assets/places.png";

const PROJECTS = [
  {
    name: "Place visité (Old Version)",
    description:
      "A Featured MERN Project to Share Places you Visited around the world with Geocoding (You enter the address and coordinates will be automatically generated), and Map Rendering by Google.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "REST API",
      "React-hooks",
      "Axios",
      "Multer",
      "Material-UI",
      "Particles.js",
      "Image-upload",
    ],
    image: `${places}`,
    projectLink: "https://myplace009.web.app/",
    githubLink:
      "https://github.com/imdude001/Places-visite-firebase-image-upload",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/7JoNcnxMl2c",
    features: (
      <div>
        <p>
          🤍 Share Visited Places <br />
          🤍 Geocoding(Address user enter will be converted into Langitude and
          Longitude coordinates) <br />
          🤍 Map Rendering by Google <br />
          🤍 User can edit and delete place
          <br />
          🤍 Custom Authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js with Hooks
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Material UI
          <br />
          ⚙ Backend <br />
          &emsp; • Node.js with Express.js (RESTful API)
          <br />
          ⚙ Database
          <br />
          &emsp; • MongoDB (Mongoose) <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase and Backend on Heroku <br />
        </p>
      </div>
    ),
  },
  {
    name: "Burger Blast",
    description:
      "A React, Redux, and Firebase Project to make delicious burger interactively and submit your order details to the server.",
    tech: [
      "React",
      "Redux",
      "React-lifecycles",
      "Firebase",
      "Class-based",
      "Redux-thunk",
      "Material-UI",
    ],
    image: `${burger}`,
    projectLink: "https://burger-blast.web.app/",
    githubLink: "https://github.com/imdude001/Burger-Blast",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/LrZ9xbln95Y",
    features: (
      <div>
        <p>
          🤍 Build tasty looking burger in realtime <br />
          🤍 Add or Remove ingredient with a click of button <br />
          🤍 Price calculated automatically <br />
          🤍 Submit your order to online server
          <br />
          🤍 See your previous orders
          <br />
          🤍 Firebase authentication and custom Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js - Class based with Lifecycles
          <br />
          &emsp; • Redux
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Material UI
          <br />
          ⚙ Database
          <br />
          &emsp; • Firebase Realtime Database
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase <br />
        </p>
      </div>
    ),
  },
  {
    name: "Shop Sharer",
    description:
      "An app to make shopping lists from multiple online stores, and share the list with your friends to manage the list from both sides.",
    tech: [
      "React",
      "Firebase",
      "Firestore",
      "React-hooks",
      "Google-Sign-in",
      "Image-upload",
    ],
    image: `${shop}`,
    projectLink: "https://shopsharer009.web.app/",
    githubLink: "https://github.com/imdude001/Shop-Sharer",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/A0uQHsp4ViU",
    features: (
      <div>
        <p>
          🤍 Make Shopping list from any Online Stores <br />
          🤍 Share that list with other Peoples <br />
          🤍 Automatic screenshot of product added as item's image <br />
          🤍 Mutually manage list by shared people
          <br />
          🤍 Google Authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js with Hooks
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          ⚙ Database
          <br />
          &emsp; • Cloud Firestore <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Classy Blog",
    description:
      "A Featured Blog Post Project to Create, Edit, Delete posts. Also Markdown is also integrated to write a beautiful blog with pictures, links, and gif support. (Recently I made a MERN Stack version of this app.) ",
    tech: [
      "(MERN-Stack-Update)",
      "Node",
      "Express",
      "Ejs",
      "MongoDB",
      "Bootstrap",
      "Image-upload",
      "Express-session",
      "Passport",
    ],
    image: `${blog}`,
    projectLink: "https://classyblog-react.web.app/",
    githubLink: "https://github.com/imdude001/Classy-Blog-MERN",
    projectLinkTwo: "https://classyblog.herokuapp.com/",
    githubLinkTwo: "https://github.com/imdude001/classy_blog",
    doubleLink: true,
    youtubeLink: "https://www.youtube.com/embed/l7fnlKt_MwY",
    features: (
      <div>
        <p>
          🤍 Add Markdown enabled blogposts from your profile <br />
          🤍 Dedicated User management system
          <br />
          🤍 Beautiful UI <br />
          🤍 Remove and Edit feature also available
          <br />
          🤍 Available in both MERN and Node-Express only
          <br />
          🤍 Custom authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          <span className="text-success">⚜ MERN Version</span>
          <br />
          ⚙ Frontend <br />
          &emsp; • React.js - with Hooks
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Material UI
          <br />
          ⚙ Backend <br />
          &emsp; • Node.js with Express.js (RESTful API)
          <br />
          ⚙ Database
          <br />
          &emsp; • MongoDB with Mongoose
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase and Backend on Heroku
          <br />
          <br />
          <span className="text-success">⚜ Node-Express Version</span>
          <br />
          ⚙ Frontend <br />
          &emsp; • Ejs Layout with Html, Css
          <br />
          &emsp; • Bootstrap
          <br />
          ⚙ Backend <br />
          &emsp; • Node.js with Express.js
          <br />
          ⚙ Database
          <br />
          &emsp; • MongoDB with Mongoose
          <br />
          ⚙ Deployment
          <br />
          &emsp; • On Heroku
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Mailchimp Newsletter",
    description:
      "A simple form to take the user's details and send them to Mailchimp which is a marketing automation platform and an email marketing service, so that you can send emails to your audience.",
    tech: ["Node", "Ejs", "Express", "Bootstrap", "Mailchimp", "Mailchimp-API"],
    image: `${mail}`,
    projectLink: "https://mailchimpnewsletterproject.herokuapp.com/",
    githubLink: "https://github.com/imdude001/newsletter",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/TIwXFr1zYrE",
    features: (
      <div>
        <p>
          🤍 Send Userdata to Mailchimp Account <br />
          🤍 Send Newsletter or emails from mailchimp thereafter <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          &emsp; • Node.js with Express
          <br />
          &emsp; • Ejs template
          <br />
          &emsp; • Html, CSS, JS with Bootstrap
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Drum-Beatz / Click-Blip",
    description:
      "A Starter Html, Css and Javascript focused projects, First one can make Drum beats and another one is Simon game.",
    tech: ["Html", "Css", "Javascript", "Jquery"],
    image: `${drum}`,
    projectLink: "https://imdude001.github.io/Drum-Beatz/",
    githubLink: "https://github.com/imdude001/Drum-Beatz",
    doubleLink: false,
    youtubeLink: "https://www.youtube.com/embed/I-RC-nIkPDo",
    features: (
      <div>
        <p>
          🤍 Play Drum beats by clicking button
          <br />
          🤍 Simon game - click the pattern shown on screen to play <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Jquery
          <br />
        </p>
      </div>
    ),
  },
];

export default PROJECTS;
