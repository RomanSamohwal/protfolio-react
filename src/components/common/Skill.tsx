import React from "react";

type SkillProps = {
    title: string
    svg: any
}

export const Skill: React.FC<SkillProps> = ({title, svg}) => {
    return <div className='skill'>
        <div className='skill_title title title_fz14'>
            {title}
        </div>
        <div className='skill_description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </div>

        <div className='skill_img'>
            {svg}
        </div>
    </div>
}