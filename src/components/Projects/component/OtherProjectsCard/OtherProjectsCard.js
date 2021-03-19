import React from "react";
import { Card, ImageHeader, CardBody } from "react-simple-card";
import { Chip } from "@material-ui/core";

import "./OtherProjectsCard.css";
import ProjectModal from "../ProjectModal/ProjectModal";

const OtherProjectsCard = (props) => {
  const { name, description, image, tech,projectLink,githubLink,youtubeLink,features,stack,doubleLink,projectLinkTwo,githubLinkTwo } = props.project;
  return (
    <div class="col-12 col-md-6 my-2 px-0 pl-md-0 pr-md-5 py-md-3 ">
      <Card>
        <ProjectModal
          doubleLink={doubleLink}
          name={name}
          youtubeLink={youtubeLink}
          projectLink={projectLink}
          projectLinkTwo={projectLinkTwo}
          githubLink={githubLink}
          githubLinkTwo={githubLinkTwo}
          features={features}
          stack={stack}
        >
          <ImageHeader alt="image" imageSrc={image} />
          <CardBody>
            <h4>{name} </h4>
            <p>{description}</p>
            <p>
              {tech.map((chip) => (
                <Chip
                  className="mr-1 my-1"
                  size="small"
                  label={chip}
                  clickable
                />
              ))}
            </p>
          </CardBody>
        </ProjectModal>
      </Card>
    </div>
  );
};

export default OtherProjectsCard;
