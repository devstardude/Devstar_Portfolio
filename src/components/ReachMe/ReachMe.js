import React from "react";

import "./ReachMe.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

const ReachMe = (props) => {
  return (
    <section id="reachme-project " className="container-fluid ">
      <h2 className="reachme-text">Get in touch with me...</h2>
      <div className="container-fluid no-gutters px-0 reachme-info pt-2">
        <p>
          Here are a few ways to reach me if you are...
          <br />
          <span className="reachme-info-bold">
            Looking for a Developer
          </span> 👨‍💻,{" "}
          <span className="reachme-info-bold">Want to ask something </span>
          🤔, or to{" "}
          <span className="reachme-info-bold">
            See what I'm up to nowadays{" "}
          </span>{" "}
          ⚡
        </p>
        <div className="row py-1 py-md-5 my-5">
          <div className="col-12 col-md-4 text-center">
            <h4 className="reachme-text">
              Mail Me{" "}
              <MailOutlineIcon style={{ color: "#e34134" }} fontSize="large" />{" "}
            </h4>
            <h6>
              <a
                className="reachme-link pt-2"
                href="mailto:developerdude001@gmail.com"
              >
                developerdude001@gmail.com
              </a>
            </h6>
          </div>
          <div className="col-12 col-md-4 my-5 my-md-0 text-center">
            <h4 className="reachme-text ">
              LinkedIn Profile{" "}
              <LinkedInIcon style={{ color: "0e76a8" }} fontSize="large" />{" "}
            </h4>
            <h6>
              <a
                className="reachme-link pt-2"
                href="https://linkedin.com/in/arun-shekhar"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/arun-shekhar
              </a>
            </h6>
          </div>
          <div className="col-12 col-md-4 text-center">
            <h4 className="reachme-text ">
              GitHub Profile{" "}
              <GitHubIcon fontSize="large" style={{ color: "black" }} />{" "}
            </h4>
            <h6>
              <a
                className="reachme-link pt-2"
                href="https://github.com/imdude001"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.github.com/imdude001
              </a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachMe;
