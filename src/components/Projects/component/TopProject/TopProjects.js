import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ExploreIcon from "@material-ui/icons/Explore";
import "./TopProject.css";
import ProjectModal from "../ProjectModal/ProjectModal";
import { Button } from "@material-ui/core";
import Image from "../../../../assets/visite.jpg";

const topProject = {
  features: (
    <div>
      <p>
        🤍 Share Places (Visible to the world)
        <br />
        🤍 Wishlist Places (Only visible to the user) <br />
        🤍 Share Posts in Markdown Format <br />
        🤍 Like other Profiles and Send Messages <br />
        🤍 Automatic search any place around the world
        <br />
        🤍 Render Map of the address <br />
        🤍 Public chatbox that shows real-time messages <br />
        🤍 Admin only protected route that can post global blogposts <br />
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
        &emsp; • MongoDB with Mongoose [For User Data] <br />
        &emsp; • Cloud Firestore (For Global Realtime chatbox and Admin
        Blogposts)
        <br />
        ⚙ Deployment
        <br />
        &emsp; • Frontend on Firebase and Backend on Heroku <br />
      </p>
    </div>
  ),
  projectLink: "https://visite-place-tracker.web.app/",
  githubLink: "https://github.com/imdude001/Visite-place-tracker",
};

const TopProject = (props) => {
  const { features, stack, projectLink, githubLink } = topProject;
  return (
    <div>
      <div class="container-fluid Projects">
        <h2 className="Projects-text d-inline">
          Latest Project
          <WhatshotIcon className="HotIcon px-2" />
        </h2>
        <div className="Projects-info pt-2 pb-4">
          This is the most recent project that I've made.
        </div>
        <div className="pb-5">
          <div className="row TopProjectRow">
            <div className="col-12 col-md-6">
              <div className="video-container">
                <iframe
                  title="i ARUN SHEKHAR am a Web Developer"
                  className="youtube-container"
                  src="https://www.youtube.com/embed/sncySXQQKFQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-md-0">
              <div className="d-flex align-items-center py-1">
                <h4 className="Top-project-name">
                  Visite - A place tracker
                  <span className="px-2 ">
                    <ExploreIcon className="ExploreIcon" />
                  </span>
                </h4>
              </div>
              <p>
                Want to Track the places you visit with a Great UI and User
                Experience? Visité - A Place Tracker is the Solution.
                <br /> This is a Feature-Rich app in which you can add and
                remove places you visited, wishlist them, share blogposts, like
                other user's profile and even send them texts... It included
                many more features like Automatic place search and Map rendering
                which enhance the user experience.
              </p>
              <ProjectModal
                name="Visite - A place tracker"
                youtubeLink="https://www.youtube.com/embed/ErOUmq8xVZg"
                features={features}
                stack={stack}
                projectLink={projectLink}
                githubLink={githubLink}
              >
                <div className="ProjectKnowMoreButton">
                  <Button variant="outlined">Know More</Button>
                </div>
              </ProjectModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProject;
