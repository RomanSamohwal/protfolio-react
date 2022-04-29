import uber from './../../img/works/uber.jpg'
import pulse from './../../img/works/pulse.jpg'
import ipad from './../../img/works/ipad.jpg'
import bread from './../../img/works/bread.jpg'
import plans from './../../img/works/plans.jpg'
import mac from './../../img/works/mac.jpg'

export const Portfolio = () => {
    return <section className='portfolio'>
        <div className="container">
            <h2 className='title title_fz16 title__section-title'>Портфолио</h2>
            <div className='title title_fz36  title__section-subtitle'>Что я использую в работе</div>
            <div className='divider'/>

            <div className="portfolio__wrapper">
                <a href="#" className="wrapper__item">
                    <img src={uber} alt="uber"/>
                </a>
                <a href="#" className="portfolio__item">
                    <img src={pulse} alt="pulse"/>
                </a>
                <a href="#" className="portfolio__item">
                    <img src={bread} alt="bread"/>
                </a>
                <a href="#" className="portfolio__item vertical">
                    <img src={plans} alt="plans"/>
                </a>
                <a href="#" className="portfolio__item">
                    <img src={ipad} alt="ipad"/>
                </a>
                <a href="#" className="portfolio__item horizontal">
                    <img src={mac} alt="mac"/>
                </a>
            </div>
        </div>
    </section>
}