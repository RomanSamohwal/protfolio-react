import html from '../../../icons/skills/html5.svg'

export const Card = () => {
    return <div className='card'>

        <div className='card__header'>
            <img src={html} alt='html'/>

            <div className='card__header-item title title_fz14'>
                HTML5
            </div>
        </div>

        <div className='card__text card__text-item'>
               Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более
               SEO-оптимизированную структуру вашего продукта
        </div>
    </div>
}
