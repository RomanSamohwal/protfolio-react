import React from "react";

type ProgressProps = {
    title: string
    percent: string
}
export const Progress: React.FC<ProgressProps> = ({percent, title}) => {
    return <div className='progress'>

        <div className='progress__title title title_fz14 about__title'>
            {title}
        </div>

        <div className='progress__percent title_fz14'>
            {percent}
        </div>

        <div className='progress__line progress__line-item'>
            <div className='progress__line-load progress__line-item' style={{width: percent}}/>
        </div>
    </div>
}
