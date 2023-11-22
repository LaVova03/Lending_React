import './PhotoNatali2.css';
import Exellend from '../../assets/page2/exellend.png';

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
            text: 'Клієнт завжди правий – зі мною не працює. Ми працюємо в партнерстві так, як краще для кінцевого результату',
        },
        {
            id: 6,
            text: 'Немає нічного неможливого. Просто на щось потрібно більше часу',
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

    return (
        <div className='page2__natali__wrap'>
            <div className='page2__photo__natali'></div>
            <div className='page2__float__photo'>
                <ul className='page2__profile__wrap'>
                    <li>
                        <ul className='page2__profile__head'>
                            <li>Привіт, мене звуть</li>
                            <li>Наталя Актибаєва,</li>
                            <li>я креативний підприємець</li>
                        </ul>
                    </li>
                    <li id='page2__expereanse'>
                        Майже 15 років досвіду в сфері маркетингу та бізнесу.<br />
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
            <div className='page2__principles'>МОЇ  ПРИНЦИПИ</div>
            <div className='page2__principles__grid'>
                {principles.map(el => {
                    return (
                        <ul key={el.id}>
                            <li className='page2__grid__li'>
                                <div> <img id='page2__img__exellend' src={Exellend} alt="logo" /></div>
                                <div>{el.text}</div>
                            </li>
                        </ul>
                    )
                })}

            </div>
        </div>
    )
}

export default PhotoNatali2;