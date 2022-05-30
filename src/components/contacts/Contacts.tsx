import main_photo from './../../img/main_photo.jpg'
import React from "react";
import {Divider} from "../common/Divider";
import facebook from './../../icons/social/facebook2.svg'
import telegram from './../../icons/social/telegram.svg'

export const Contacts = () => {
    return <section className='contacts'>
        <div className='container'>
            <div className="contacts__wrapper">
                <div className='contacts__photo'>
                    <img src={main_photo} alt="main-photo"/>
                </div>

                <div className="contacts__descr">
                    <h4 className='title title_fz16 contacts__title'>Контакты</h4>
                    <div className='title title_fz36 contacts_subtitle'>Свяжитесь со мной</div>
                    <Divider/>

                    <div className="title title_fz14 contacts__text">
                        Любым удобным для вас способом:
                    </div>
                    <div className="contacts__social">
                        <a href="" className="contacts__link">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a href="" className="contacts__link">
                            <img src={telegram} alt="telegram"/>
                        </a>
                        {/*<a href="" className="contacts__link">*/}
                        {/*    <img src={instagram} alt="instagram"/>*/}
                        {/*</a>*/}
                    </div>

                    <div className='title title_fz14 contacts__text'>
                        Или оставьте ваши данные и я сама вам напишу:
                    </div>


                    <form action="#" className="contacts__form">
                        <div className="contacts__input">
                            <input required name='name' id='name' type="text"/>
                            <label htmlFor="name">Ваше имя</label>
                        </div>

                        <div className="contacts__input">
                            <input required name='text' id='email' type="email"/>
                            <label htmlFor="email">Ваша почта</label>
                        </div>

                        <div className="contacts__textarea">
                            <textarea name="text" id="text"/>
                            <label htmlFor="text">Ваше сообщение</label>
                        </div>

                        <div className='contacts__triggers'>
                            <button className='contacts__btn btn'>Отправить сообщение</button>
                            <div className="contacts__policy">
                                <input required type="checkbox"/>
                                <span>
                                    Я согласен(а) с <a href="#">политикой конфиденциальности</a>
                                </span>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
}
