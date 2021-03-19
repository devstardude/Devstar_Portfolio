import React from 'react';
import SkillsItems from '../Components/SkillsItems';
import SkillsTitle from "../Components/SkillsTitle" 

//import'./Skills.css';

const Skills = (props)=>{
    return (
      <section id="section-skills" class="container-fluid py-3 py-md-5 Skills">
        <SkillsTitle />
        <SkillsItems />
      </section>
    );
};

export default Skills ;