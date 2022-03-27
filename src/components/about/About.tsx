import main_photo from './../../img/main_photo.jpg'
import {Divider} from "../common/Divider";
import {Skill} from "../common/Skill";
import React from "react";
import web_development from '../../icons/about_me/web_development.svg'
import design from '../../icons/about_me/design.svg'
import mobile from '../../icons/about_me/mobile_dev.svg'

export const About = () => {
    return <section className={'about'}>
        <div className="container">
            <div className='about__wrapper'>
               <div className='about__photo'>
                   <img  src={main_photo} alt="main-photo"/>
               </div>

                <div className='about__desc'>
                    <div className='title title_fz16 about__title'>
                        <h4>Про меня</h4>
                    </div>
                    <div className='about_title title title_fz36'>
                        Меня зовут Александра
                    </div>
                    <Divider/>
                    <p className='about__text title_fz14'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                <div className='about__skills'>
                    <Skill title={'Web-разработка'}
                           svg={web_development}/>
                    <Skill title={'Разработка приложений'}
                           svg={mobile}/>
                    <Skill title={'UI/UX Design'}
                           svg={design}/>
                </div>
            </div>
        </div>
    </section>
}