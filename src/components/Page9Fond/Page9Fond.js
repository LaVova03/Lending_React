import './Page9Fond.css';
import Photo from '../../assets/page9/natali.png';
import Fb from '../../assets/page9/fb.svg';
import Inst from '../../assets/page9/inst.svg';

const Page9Fond = () => {
    return (
        <div className='page9__wrap'>
            <div className='page9__card'>
                <div className='page9__card__body'>
                    <div className='page9__card__head'>
                        Фонд<br />для стартапів
                        <ul className='page9__card__ul'>
                            <li className='page9__card__li'><span className='page9__card__span'>10%</span> від доходу буде йти на <span className='page9__card__span'>запуск нових стартапів.</span></li>
                            <li className='page9__card__li'>При накопиченні «в гаманці» суми від 100тис грн<br />ми будемо оголошувати конкурс для бажаючих<br />отримати таку інвестицію.</li>
                            <li className='page9__card__li'>Правила конкурсу будуть надруковані відразу перед<br />запуском першого етапу.</li>
                        </ul>
                    </div>
                    <img className='page9__card__photo' src={Photo} alt="logo" />
                </div>
            </div>
            <div className='page9__form__flex'>
                <div className='page9__head__wrap'>
                    <div className='page9__head__form'>
                        Коли,<br />як не зараз?
                    </div>
                    <div className='page9__text__form'>
                        Залишити заявку з Вашим описом<br />питань, щоб наш консультант<br />зв’язався з Вами
                    </div>
                </div>
                <div className='page9__form'>
                    <form type='submit'>
                        <div className='page9__form__flex'>
                            <div>
                                <label className='page9__lable'>ім’я</label><br />
                                <input className='page9__input1' type="text" />
                            </div>
                            <div>
                                <label className='page9__lable'>телефон</label><br />
                                <input className='page9__input2' type="text" />
                            </div>
                        </div>
                        <br />
                        <label className='page9__lable'>електронна адреса</label><br />
                        <input className='page9__input3' type="text" />
                        <br />
                        <label className='page9__lable'>Повідомлення</label><br />
                        <textarea className='page9__textarea' cols="30" rows="10"></textarea>
                        <button type='button' className='page9__form__button'>Консультація</button>
                    </form>
                </div>
            </div>
            <div className='page9__final__div'>
                <div className='page9__final__side'>
                    <ul id='page9__final__ul'>
                        <li>
                            <button className='page9__final__button'>Про мене</button>
                        </li><br />
                        <li>
                            <button className='page9__final__button'>Пропозиції</button>
                        </li><br />
                        <li>
                            <button className='page9__final__button'>Контакти</button>
                        </li>
                    </ul>
                </div>
                <div id='page9__final__center'>
                    © 2023 Aktybaeva
                </div>
                <div className='page9__wrap__btn'>
                    <button className='page9__btn__social'>
                        <img src={Fb} alt="logo" />
                    </button>
                    <button className='page9__btn__social'>
                        <img src={Inst} alt="logo" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page9Fond;