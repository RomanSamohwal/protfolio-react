import {Divider} from "../common/Divider";
import {Card} from "./card/Card";

export const Experience = () => {
    return <section className="experience">
        <div className='container'>
            <h2 className='title title_fz16 resume__title'>
                Навыки
            </h2>
            <div className="title title_fz36 resume__subtitle">
                Что я использую в работе
            </div>
            <Divider/>

            <div className='experience__card'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    </section>
}
