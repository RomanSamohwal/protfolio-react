import React from "react";

type CardProps = {
    img: any
    title: string
    text: string
    alt: string
}

export const Card: React.FC<CardProps> = ({title, text, img, alt}) => {
    return <div className='card'>

        <div className='card__header'>
            <img src={img} alt={alt}/>

            <div className='card__header-item title title_fz14'>
                {title}
            </div>
        </div>

        <div className='card__text card__text-item'>
            {text}
        </div>
    </div>
}
