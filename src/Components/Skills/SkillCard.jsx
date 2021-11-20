import React from 'react';
import { skillList } from '../../assets/skillsData';
import './Skills.css';
const SkillCard=({skillName,skillUrl})=>{
    return(
        <div className="skill">
            <img src={skillUrl} alt="skillurl"></img>
            <p>{skillName}</p>
        </div>
    )
};
export default SkillCard;