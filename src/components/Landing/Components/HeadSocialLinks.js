import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./HeadSociaLinks.css";
import { Fab, Zoom } from "@material-ui/core";

const HeadSociaLinks = (props) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="allignn text-center align-middle">
          <hr className="Head-hr " />
        </div>
        <div className="mx-auto text-center d-md-inline-block ">
          <Zoom in={true} timeout={500}>
            <Fab
              size="small"
              className=" Head-fab mr-4"
              href="https://www.instagram.com/i_m_a.r.u.n/"
              target="_blank"
            >
              <InstagramIcon />
            </Fab>
          </Zoom>

          <Zoom in={true} timeout={800}>
            <Fab
              size="small"
              className=" Head-fab mr-4"
              href="https://github.com/imdude001"
              target="_blank"
            >
              <GitHubIcon />
            </Fab>
          </Zoom>
          <Zoom in={true} timeout={1100}>
            <Fab
              size="small"
              className=" Head-fab mr-4"
              href="https://linkedin.com/in/arun-shekhar"
              target="_blank"
            >
              <LinkedInIcon />
            </Fab>
          </Zoom>
          <Zoom in={true} timeout={1400}>
            <Fab
              size="small"
              className=" Head-fab "
              href="https://www.youtube.com/channel/UCEL_3xlrevncI0OWEzaIY3Q"
              target="_blank"
            >
              <YouTubeIcon />
            </Fab>
          </Zoom>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeadSociaLinks;
