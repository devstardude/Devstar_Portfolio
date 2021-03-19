import { Fab, Fade } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";

import "./TopButton.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const TopButton = (props) => {
  return (
    <div className="container no-gutters ">
      <div className="row">
        <div className="About-button col-6 col-md-3 col-lg-2 text-center text-md-left pl-md-0">
          <Link
            activeClass="active "
            to="section-about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Fade in timeout={1600}>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className="Top-button px-4"
              >
                <KeyboardArrowDownIcon />
                About
              </Fab>
            </Fade>
          </Link>
        </div>
        <div className="Skills-button col-6 col-md-3 col-lg-2 text-center text-md-left pl-md-0 ">
          <Link
            activeClass="active "
            to="section-skills"
            spy={true}
            smooth={true}
            duration={1200}
          >
            <Fade in timeout={1600}>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className="Top-button px-4"
              >
                <KeyboardArrowDownIcon />
                Skills
              </Fab>
            </Fade>
          </Link>
        </div>
        <div className="Project-button col-12 col-md-3 col-lg-2 text-center text-md-left pl-md-0">
          <Link
            activeClass="active "
            to="section-project"
            spy={true}
            smooth={true}
            duration={1300}
          >
            <Fade in timeout={1600}>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className="Top-button-project mt-3 px-4  mt-md-0 "
              >
                <KeyboardArrowDownIcon />
                Projects
              </Fab>
            </Fade>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopButton;
