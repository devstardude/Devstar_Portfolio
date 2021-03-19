import React from "react";
import { Button } from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./CustomButton.css";

const CustomButton = (props) => {
  if (props.projectLinkButton) {
    return (
      <div className="CustomButton">
        <Button target="_blank" href={props.projectLink} variant="outlined">
          <span className="pr-2">
            <DesktopMacIcon />
          </span>
          See Website
        </Button>
      </div>
    );
  } else {
    return (
      <div className="CustomButton">
        <Button target="_blank" href={props.githubLink} variant="outlined">
          <span className="pr-2">
            <GitHubIcon />
          </span>
          Go to Code
        </Button>
      </div>
    );
  }
};

export default CustomButton;
