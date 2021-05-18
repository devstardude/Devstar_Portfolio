import React from "react";
import OtherProjectsTabs from "../OtherProjectsTabs/OtherProjectsTabs";
//import'./OtherProjects.css';

const OtherProjects = (props) => {
  return (
    <div className="container-fluid">
      <h2 className="Projects-text">Other Projects</h2>
      <div className="Projects-info pt-2">
        These are some other Projects I made while Learning. (Click on project to know more)
      </div>
      <div className="mt-4">
        <OtherProjectsTabs />
      </div>
    </div>
  );
};

export default OtherProjects;
