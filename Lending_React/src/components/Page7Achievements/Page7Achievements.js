import './Page7Achievements.css';
import Ellipse from '../../assets/page7/Ellipse.svg';
import Disc from '../../assets/page7/adapt/disc.png'

const Page7Achievements = () => {
    return (
        <div className='page7__main__wrap'>
            <div className='page7__head'>
                Що я вважаю своїми основними<br className='page7__br' /> <span className='page7__head__span'>професійними досягненнями</span> за<br className='page7__br' />останні пару років:
            </div>
            <div className='page7__vertical__line'></div>
            <div className='page7__disk'>
                <img className='page7__img__disc' src={Disc} alt="logo" />
                <img className='page7__img__disc1' src={Disc} alt="logo" />
                <img className='page7__img__disc2' src={Disc} alt="logo" />
                <img className='page7__img__disc3' src={Disc} alt="logo" />
                <img className='page7__img__disc4' src={Disc} alt="logo" />
                <img className='page7__img__disc5' src={Disc} alt="logo" />
                <img className='page7__img__disc6' src={Disc} alt="logo" />
                <img className='page7__img__disc7' src={Disc} alt="logo" />
                <img className='page7__img__disc8' src={Disc} alt="logo" />
                <img className='page7__img__disc9' src={Disc} alt="logo" />
            </div>
            <ul className='page7__ul__grid'>
                <li className='page7__li__year'>
                    <div className='page7__disk__2023'>
                        2023
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li className='page7__ul__adapt'>
                    <ul className='page7__text__ul' id='page7__li__adapt'>
                        <li className='page7__li__textright'>Запуск пекарні в Голландії з початковим капіталом<br className='page7__br' /> 50 євро</li><br /><br /><br />
                        <li className='page7__li__textright'>Вивчення нової сфери для себе – психології. <br />Результат: підписання контракту по співпраці мінімум на рік</li><br /><br /><br />
                        <li className='page7__li__textright'>Надання послуг консультування бізнесів</li><br /><br /><br />
                        <li className='page7__li__textright'>Ведення ділових переговорів на англійській мові. <br className='page7__br__adapt' />Це особисте, але внесу в професійні. <br className='page7__br__adapt' />Бо такого рівня досягла за останній рік</li>
                    </ul>
                </li>
                <li id='page7__li3' className='page7__ul__adapt'>
                    <ul className='page7__li__ul'>
                        <li className='page7__li__text'>Вивчення абсолютно нової сфери для себе за півроку: отримала керування рестораном як шеф-повар (абсолютно не моя тема, але що не зробиш для результату)</li><br /><br /><br />
                        <li className='page7__li__text'>Онлайн-запуск перевезень по Україні<br />(тимчасовий проект)</li><br /><br /><br />
                        <li className='page7__li__text'>Надання послуг консультування бізнесів</li>
                    </ul>
                </li>
                <li className='page7__li__year' id='page7__li4'>
                    <div className='page7__disk__2022'>
                        <label className='page7__lable__year2'>2022</label>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        <label className='page7__lable__year'>2022</label>
                    </div>
                </li>
                <li className='page7__li__year'>
                    <div className='page7__disk__2020'>
                        2020
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li id='page7__li5' className='page7__ul__adapt'>
                    <ul className='page7__text__ul'>
                        <li id='page7__li5__adapt' className='page7__li__textright'>Відкриття свого магазину взуття.<br />Відпрацювала та налагодила усі процеси самостійно</li><br /><br /><br />
                        <li className='page7__li__textright'>Запуск кавового бренду з парнером.<br />Цей бренд чекає рестарт, бо він вийшов дійсно класним. <br className='page7__br__adapt'/>Скоріше за все рестарт буде лише в Європі. (причина в факап №1)</li>
                    </ul>
                </li>
                <li id='page7__li6' className='page7__li__text'>Підписання контракту на поставку на 1 млн грн за 1 смс в Фейбуці</li>
                <li id='page7__li7' className='page7__li__year'>
                    <div className='page7__disk__2019'>
                        <label className='page7__lable__year2'>2019</label>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        <label className='page7__lable__year'>2019</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Page7Achievements;