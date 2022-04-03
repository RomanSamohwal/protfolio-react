import {Divider} from "../common/Divider";
import university from '../../icons/experience/university.svg'
import courses from '../../icons/experience/courses.svg'
import developers from '../../icons/experience/developer.svg'
import designer from '../../icons/experience/designer.svg'

export const Resume = () => {
    return <section className='resume'>
        <div className='container'>
            <h2 className='title title_fz16 resume__title'>
                Опыт
            </h2>
            <div className="title title_fz36 resume__subtitle">
                Чем я буду полезна
            </div>
            <Divider/>

            <div className="resume__wrapper">
                <div className="resume__column">
                    <h3 className="title title_fz20 resume__column-title">
                        Образование
                    </h3>
                    <ul>
                        <li>
                            <div className="resume__item">
                                <div className="resume__item-head">
                                    <div className="resume__item-icon">
                                        <img src={university} alt="university"/>
                                    </div>
                                    <h4 className='title title_fz14'>
                                        МГТУ им. Н. Э. Баумана
                                    </h4>
                                    <div className="resume__item-location">
                                        Диплом магистра | Москва (2014-2020)
                                    </div>
                                </div>
                                <div className="resume__item-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmo.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="resume__item">
                                <div className="resume__item-head">
                                    <div className="resume__item-icon">
                                        <img src={courses} alt="university"/>
                                    </div>
                                    <h4 className='title title_fz14'>
                                        Udemy
                                    </h4>
                                    <div className="resume__item-location">
                                        Курсы по Web-разработке
                                    </div>
                                </div>
                                <div className="resume__item-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmo.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="resume__column">
                    <h3 className="title title_fz20 resume__column-title">
                        Опыт работы
                    </h3>
                    <ul>
                        <li>
                            <div className="resume__item">
                                <div className="resume__item-head">
                                    <div className="resume__item-icon">
                                        <img src={developers} alt="developers"/>
                                    </div>
                                    <h4 className='title title_fz14'>
                                        Front-End Developer
                                    </h4>
                                    <div className="resume__item-location">
                                        EPAM | Москва (2018-2019)
                                    </div>
                                </div>
                                <div className="resume__item-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmo.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="resume__item">
                                <div className="resume__item-head">
                                    <div className="resume__item-icon">
                                        <img src={designer} alt="designer"/>
                                    </div>
                                    <h4 className='title title_fz14'>
                                        UI/UX Designer
                                    </h4>
                                    <div className="resume__item-location">
                                        Squad Team | Москва (2018)
                                    </div>
                                </div>
                                <div className="resume__item-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmo.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}
