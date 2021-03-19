import React from "react";
import CustomButton from "../../../Shared/CustomButton/CustomButton";

import "./ProjectInfoSections.css";

export const MediaDiv = (props) => {
  return (
    <div className="ProjectInfoSectionTabsDiv ScrollabelDiv my-3 mt-md-3">
      <div className="container  px-0 px-lg-3">
        <div className="ProjectInfo-VideoContainer">
          {props.imageUrl ? (
            <div className="Center">
              <img
                className="ProjectInfo-Image "
                src={props.imageUrl}
                alt={props.name}
              />
            </div>
          ) : (
            <iframe
              title={props.name}
              className="ProjectInfo-YoutubeContainer"
              src={props.youtubeLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        {props.doubleLink && (
          <p className="Center FontFamily text-success mt-3">⚜ MERN Version</p>
        )}
        <LinkButtons
          projectLink={props.projectLink}
          githubLink={props.githubLink}
        />
        {props.doubleLink && (
          <p className="Center FontFamily text-success mt-3">
            ⚜ Node-Express Version
          </p>
        )}
        {props.doubleLink && (
          <LinkButtons
            projectLink={props.projectLinkTwo}
            githubLink={props.githubLinkTwo}
          />
        )}
      </div>
    </div>
  );
};

export const FeaturesDiv = (props) => {
  return (
    <div className="ProjectInfoSectionTabsDiv my-3 FeaturesDiv FontFamily">
      <div className="container px-3">
        <h5>Here are the Features that this app includes.</h5>
        {props.features}
      </div>
    </div>
  );
};
export const StackDiv = (props) => {
  return (
    <div className="ProjectInfoSectionTabsDiv my-3 FeaturesDiv FontFamily">
      <div className="container px-3">
        <h5>Here's the stack that is used to build this app.</h5>
        {props.stack}
      </div>
    </div>
  );
};

const LinkButtons = (props) => {
  return (
    <div className="row Center mt-4 mt-md-3 mx-0 px-0">
      <div className="col-12 col-lg-6">
        <CustomButton projectLinkButton {...props} />
      </div>
      <div className="col-12 col-lg-6 mt-3 mt-lg-0">
        <CustomButton {...props} />
      </div>
    </div>
  );
};
