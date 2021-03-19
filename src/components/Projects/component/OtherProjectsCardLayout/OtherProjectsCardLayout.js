import React from 'react';
import OtherProjectsCard from '../OtherProjectsCard/OtherProjectsCard';
//import'./OtherProjectsCardLayout.css';

const OtherProjectsCardLayout = (props)=>{
    return (
          <div class="container-fluid">
            <div class="row OverflowY">
              {props.projects.slice(props.start, props.end).map((project) => (
                <OtherProjectsCard project={project} />
              ))}
            </div>
          </div>
    );
};

export default OtherProjectsCardLayout ;