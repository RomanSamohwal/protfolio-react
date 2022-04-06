import React from "react";

type CardProps = {
    img: any
    title: string
    text: string
    alt: string
}

export const Card: React.FC<CardProps> = ({title, text, img, alt}) => {
    return <div className='card'>

        <div className='card-img'>
            <img src={img} alt={alt}/>
        </div>

            <div className='card__title title title_fz14'>
                {title}
            </div>

        <div className='card__text card__text-item'>
            {text}
        </div>
    </div>
}
