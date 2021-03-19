import React from 'react';
import OtherProjects from '../component/OtherProjects/OtherProjects';
import TopProject from '../component/TopProject/TopProjects';
//import'./Project.css';

const Project = (props)=>{
    return (
      <section id="section-project" className=" my-1 pt-4">
        <div class="container-fluid mx-0 px-0 ">
            <TopProject/>
            <OtherProjects/>
        </div>
      </section>
    );
};

export default Project ;