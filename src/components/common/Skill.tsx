import React from "react";

type SkillProps = {
    title: string
    svg: any
}

export const Skill: React.FC<SkillProps> = ({title, svg}) => {
    return <div className='skill-item'>
        <div className='skill-item-circle'>
            <img src={svg} alt="img"/>
        </div>
        <div>
            <div className='title title_fz14'>
                {title}
            </div>
            <div className='skill__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </div>
        </div>
    </div>
}