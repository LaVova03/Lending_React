import './Page7Achievements.css';
import Ellipse from '../../assets/page7/Ellipse.svg';

const Page7Achievements = () => {
    return (
        <div className='page7__main__wrap'>
            <div className='page7__head'>
                Що я вважаю своїми основними<br /><span className='page7__head__span'>професійними досягненнями</span><br />за останні пару років:
            </div>
            <div className='page7__vertical__line'></div>
            <ul className='page7__ul__grid'>
                <li className='page7__li__year'>
                    <div className='page7__disk__2023'>
                        2023
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li>
                    <ul className='page7__text__ul'>
                        <li className='page7__li__text'>Запуск пекарні в Голландії з початковим капіталом<br />50 євро</li><br /><br /><br />
                        <li className='page7__li__text'>Вивчення нової сфери для себе – психології. Результат: підписання контракту по співпраці мінімум на рік</li><br /><br /><br />
                        <li className='page7__li__text'>Надання послуг консультування бізнесів</li><br /><br /><br />
                        <li className='page7__li__text'>Ведення ділових переговорів на англійській мові. Це особисте, але внесу в професійні. Бо такого рівня досягла за останній рік</li>
                    </ul>
                </li>
                <li id='page7__li3'>
                    <ul className='page7__li__ul'>
                        <li className='page7__li__text'>Вивчення абсолютно нової сфери для себе за півроку: отримала керування рестораном як шеф-повар (абсолютно не моя тема, але що не зробиш для результату)</li><br /><br /><br />
                        <li className='page7__li__text'>Онлайн-запуск перевезень по Україні<br />(тимчасовий проект)</li><br /><br /><br />
                        <li className='page7__li__text'>Надання послуг консультування бізнесів</li>
                    </ul>
                </li>
                <li className='page7__li__year' id='page7__li4'>
                    <div className='page7__disk__2022'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        2022
                    </div>
                </li>
                <li className='page7__li__year'>
                    <div className='page7__disk__2020'>
                        2020
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li id='page7__li5'>
                    <ul className='page7__text__ul'>
                        <li className='page7__li__text'>Відкриття свого магазину взуття.<br />Відпрацювала та налагодила усі процеси самостійно</li><br /><br /><br />
                        <li className='page7__li__text'>Запуск кавового бренду з парнером. Цей бренд чекає рестарт, бо він вийшов дійсно класним. Скоріше за все рестарт буде лише в Європі. (причина в факап №1)</li>
                    </ul>
                </li>
                <li id='page7__li6' className='page7__li__text'>Підписання контракту на поставку на 1 млн грн за<br />1 смс в фейбуці</li>
                <li id='page7__li7' className='page7__li__year'>
                    <div className='page7__disk__2019'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        2019
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Page7Achievements;