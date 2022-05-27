export const Price = () => {

    const list1 = [
        {
            title: 'Landing-page',
            price: 'от 8000 руб.',
            description: 'Одностраничный сайт для презентации услуг/товаров/...'
        },
        {
            title: 'Корпоративный сайт',
            price: 'от 20000 руб.',
            description: 'Сайт для вашего бизнеса или компании'
        },
        {
            title: 'Интернет-магазин',
            price: 'от 30000 руб.',
            description: 'Инструмент для ваших продаж в сети'
        }
    ]

    const list2 = [
        {
            title: 'Web-приложение',
            price: 'от 28000 руб.',
            description: 'Приложение внутри браузера для лучшего комфорта'
        },
        {
            title: 'Android/IOS Приложение',
            price: 'от 25000 руб.',
            description: 'Приложение для смартфона любой ОС'
        },
        {
            title: 'Дизайн',
            price: 'Индивидуально',
            description: 'Создам дизайн для вашего сайта/приложения...'
        }
    ]

    return <section className='price'>
        <div className="container">
            <h2 className='title title_fz16 title__section-title'>Прайс-лист</h2>

            <div className='divider'/>

            <div className='price__wrapper'>
                <div className='price__column'>
                    <ul>
                        {list1.map((l, index) => {
                            return <li key={index}>
                                <div className='price__item'>
                                    <div className='price__item-head'>
                                        <h4 className='title title_fz14'>
                                            {l.title}
                                        </h4>

                                        <h4 className='title title_fz14'>
                                            {l.price}
                                        </h4>
                                    </div>

                                    <div className='title_fz12'>
                                        {l.description}
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className='price__column'>
                    <ul>
                        {list2.map((l,index) => {
                            return <li key={index}>
                                <div className='price__item'>
                                    <div className='price__item-head'>
                                        <h4 className='title title_fz14'>
                                            {l.title}
                                        </h4>

                                        <h4 className='title title_fz14'>
                                            {l.price}
                                        </h4>
                                    </div>

                                    <div className='title_fz12'>
                                        {l.description}
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </section>
}
