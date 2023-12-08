import './PhotoNatali2.css';
import Exellend from '../../assets/page2/exellend.png';
import React from 'react';

const PhotoNatali2 = () => {

    const principles = [
        {
            id: 1,
            text: 'Відкритість, прозорість, чесність з обох сторін в роботі',
        },
        {
            id: 2,
            text: 'Бізнес-етикет – наше все, яка б нервова ситуація не виникала',
        },
        {
            id: 3,
            text: 'Якщо мені не цікавий проект (не подобається ідея і т.д.) – я не зможу взяти його в роботу',
        },
        {
            id: 4,
            text: 'Якщо ти віриш в свій продукт – йти до кінця насолоджуючись процесом, бо бізнес – це про життя',
        },
        {
            id: 5,
            text: 'Клієнт завжди правий – зі мною не працює.\nМи працюємо в партнерстві так, як краще для кінцевого результату',
        },
        {
            id: 6,
            text: 'Немає нічного неможливого.\nПросто на щось потрібно більше часу',
        },
        {
            id: 7,
            text: 'Мої партнери, друзі, що працюють за мною на різних етапах проектів, дотримуються такої ж ідеологій',
        },
        {
            id: 8,
            text: 'За екологічне ведення бізнесу',
        },
    ]

    const principlesAdapt = [
        {
            id: 1,
            text: 'Відкритість, прозорість, чесність з обох сторін в роботі',
        },
        {
            id: 2,
            text: 'Якщо мені не цікавий проект (не подобається ідея і т.д.) – я не зможу взяти його в роботу',
        },
        {
            id: 3,
            text: 'Клієнт завжди правий – зі мною не працює.\nМи працюємо в партнерстві так, як краще для кінцевого результату',
        },
        {

            id: 4,
            text: 'Мої партнери, друзі, що працюють за мною на різних етапах проектів, дотримуються такої ж ідеологій',
        },
        {
            id: 5,
            text: 'Бізнес-етикет – наше все, яка б нервова ситуація не виникала',
        },
        {
            id: 6,
            text: 'Якщо ти віриш в свій продукт – йти до кінця насолоджуючись процесом, бо бізнес – це про життя',
        },
        {
            id: 7,
            text: 'Немає нічного неможливого.\nПросто на щось потрібно більше часу',
        },
        {
            id: 8,
            text: 'За екологічне ведення бізнесу',
        },
    ]

    return (
        <div className='page2__natali__wrap'>
            <div className='page2__wrap__card'></div>
            <div className='page2__main_adapt'><div className='page2__border__adapt'></div></div>
            <div className='page2__vertical__adapt'></div>
            <div className='page2__photo__natali'></div>
            <div className='page2__card__border'></div>
            <div className='page2__float__photo'>
                <ul className='page2__profile__wrap'>
                    <li>
                        <ul className='page2__profile__head'>
                            <li>Привiт, мене звуть</li>
                            <li>Наталя Актиба<span className='shrift__є'>э</span>ва,</li>
                            <li>я креативний пiдпри<span className='shrift__є'>э</span>мець</li>
                        </ul>
                    </li>
                    <li id='page2__expereanse'>
                        Майже 15 років досвіду в<br className='page2__br__adapt' />сфері маркетингу та бізнесу.<br />
                        І це чудесна гра.<br />
                        Якщо чогось дійсно хочу - йду до кінця.
                    </li>
                    <li>
                        <ul className='page2__experience__flex'>
                            <li>
                                <div className='page2__experience__old'>15</div>
                                років досвіду
                            </li>
                            <li>
                                <div className='page2__experience__old'>27</div>
                                консультацій
                            </li>
                            <li>
                                <div className='page2__experience__old'>14</div>
                                проектів
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='page2__background__adapt'></div>
            <div className='page2__principles'>МОЇ  ПРИНЦИПИ</div>
            <div className='page2__principles__grid'>
                {principles.map(el => {
                    return (
                        <ul key={el.id}>
                            <li className='page2__grid__li'>
                                <div> <img id='page2__img__exellend' src={Exellend} alt="logo" /></div>
                                <div className='page2__div__map'>    <p className='page2__map__p'>
                                    {el.text.split('').map((char, index) => (
                                        char.match(/[А-Я]/) && index !== 0 ? <React.Fragment key={index}><br className='page2__br' />{char}</React.Fragment> : char
                                    ))}
                                </p>
                                </div>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className='page2__principles__adapt'>
                {principlesAdapt.map(el => {
                    return (
                        <ul key={el.id}>
                            <li className='page2__grid__li'>
                                <div> <img id='page2__img__exellend' src={Exellend} alt="logo" /></div>
                                <div className='page2__div__map'>    <p className='page2__map__p'>
                                    {el.text.split('').map((char, index) => (
                                        char.match(/[А-Я]/) && index !== 0 ? <React.Fragment key={index}><br className='page2__br' />{char}</React.Fragment> : char
                                    ))}
                                </p>
                                </div>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default PhotoNatali2;