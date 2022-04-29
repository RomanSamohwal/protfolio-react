import {Divider} from "../common/Divider";
import {Card} from "./card/Card";
import html from '../../icons/skills/html5.svg'
import css from '../../icons/skills/css3.svg'
import js from '../../icons/skills/js.svg'
import jquery from '../../icons/skills/jquery.svg'
import react from '../../icons/skills/react.svg'
import nodejs from '../../icons/skills/node.js.svg'
import mongodb from '../../icons/skills/mongo.db.svg'
import {Progress} from "./progress/Progress";

export const Experience = () => {
    return <section className="experience">
        <div className='container'>
            <h2 className='title title_fz16 title__section-title'>
                Навыки
            </h2>
            <div className="title title_fz36 title__section-subtitle">
                Что я использую в работе
            </div>
            <Divider/>

            <div className='experience__card'>
                <Card img={html} title={'HTML5'} alt={'html'}
                      text={'Именно он создает каркас вашего сайта или приложения,' +
                          ' а пятая версия позволит мне создавать ' +
                          'более SEO-оптимизированную структуру вашего продукта'}/>

                <Card img={css} title={'CSS3'} alt={'css'}
                      text={'Этот язык стилей позволяет мне создавать абсолютно ' +
                          'любой внешний вид вашего сайта или приложения. ' +
                          'Все ограничивается только вашей фантазией!'}/>

                <Card img={js} title={'Java Script'} alt={'js'}
                      text={'Этот язык программирования позволяет оживить все что угодно: ' +
                          'слайдеры, окна, подсказки, ' +
                          'вкладки, получение данных от сервера и многое другое'}/>

                <Card img={jquery} title={'Jquery'} alt={'jquery'}
                      text={'Библиотека Jquery позволит ускорить разработку. ' +
                          'Без необходимости интегрировать в ' +
                          'проект мы её не будем, но навык работы с ней присутствует'}/>

                <Card img={react} title={'React'} alt={'react'}
                      text={'Эта библиотека позволяет создавать web-приложения. ' +
                          'Мы можем создать максимально интерактивный продукт именно под ваши цели'}/>

                <Card img={nodejs} title={'Node.js'} alt={'nodejs'}
                      text={'Эта платформа позволяет создавать бэкенд для вашего продукта - ' +
                          '“мозги”, которые будут выполнять действия, которые пользователь не видит'}/>

                <Card img={mongodb} title={'Mongo.db'} alt={'mongodb'}
                      text={'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения'}/>
            </div>

            <div className='experience__progress'>
              <Progress title={'Создание сайтов'} percent={'100%'}/>
              <Progress title={'Создание приложений'} percent={'85%'}/>
              <Progress title={'Работа с данными'} percent={'90%'}/>
              <Progress title={'Креативность'} percent={'75%'}/>
              <Progress title={'Создание дизайна'} percent={'90%'} />
              <Progress title={'Soft skills'} percent={'95%'}/>
            </div>

        </div>
    </section>
}
