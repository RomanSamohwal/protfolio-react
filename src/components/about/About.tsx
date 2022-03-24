import main_photo from './../../img/main_photo.jpg'

export const About = () => {
    return <section className={'about'}>
        <div className="container about_info">
            <img src={main_photo} alt="main-photo"/>
            <div>
                <div className='title title_fz16 promo__subtitle'>
                    Про меня
                </div>
                <div className='title title_fz36'>
                    <h1 >Меня зовут Александра</h1>
                </div>

            </div>

        </div>
    </section>
}