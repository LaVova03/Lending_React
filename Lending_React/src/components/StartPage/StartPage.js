import './StartPage.css';
import React, { useState } from 'react';
import Natali from '../../assets/page1/adapt/Natali.png';
import Natali1 from '../../assets/page1/adapt/Natali1.png';
import { isMobile } from 'react-device-detect';

const StartPage = () => {

    const [menu, showMenu] = useState(false);

    const scrollToAboutMe = () => {
        const scrollHeight = isMobile ? 830 : 1200;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
        closeMenu();
    };

    const scrollToOffers = () => {
        const scrollHeight = isMobile ? 2220 : 4100;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
        closeMenu();
    };

    const scrollToFeedback = () => {
        const scrollHeight = isMobile ? 5250 : 11430;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
    };

    const setFaceBook = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.facebook.com/natali.aktibaeva';
    }

    const setInstagram = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.instagram.com/aktybaieva/';
    }

    const setMenu = () => {
        showMenu(true);
    };

    const closeMenu = () => {
        showMenu(false);
    };

    return (
        <div className='start__page__wrap'>
            <div className='start__page__head'>
                <ul className='start-ul-head'>
                    <li className='logo-img'>
                        <div className='text-logo'>NATALI AKTIBAEVA</div>
                    </li>
                    <li>
                        <ul className='start-head-center'>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToAboutMe} >Про мене</button></li>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToOffers}>Пропозиції</button></li>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToFeedback}>Звортній зв`язок</button></li>
                        </ul>
                    </li>
                    <li className='start-head-right'>
                        <button className='start__burger__button' onClick={setMenu}>
                            <div className="burger-menu">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </button>
                        <button className='start-link-profile1' onClick={setFaceBook}></button>
                        <button className='start-link-profile2' onClick={setInstagram}></button>
                    </li>
                </ul>
            </div>
            <div className='start__page__body'>
                <ul className='start-body-left'>
                    <li id='body-first-li'>Наталя<br />Актибаєва</li>
                    <li id='body-second-li'>креативний пiдпри<span className='shrift__є'>э</span>мець</li>
                    <li id='body-third-li'>Вмію робити з ідеї працюючий бізнес</li>
                    <button className='start__body__button' onClick={scrollToFeedback}>Консультація</button>
                </ul>
                <div className={menu ? 'start__burger__menu' : 'start__burger__close'}>
                    <button className='start__burger__text' onClick={scrollToOffers}>Пропозиції</button>
                    <button className='start__burger__text' onClick={scrollToAboutMe}>Про мене</button>
                    <button className='start__burger__x' onClick={closeMenu}><div className='start__img__x'>&#10006;</div></button>
                </div>
                <div className='start__body_background'>
                </div>
                <div className='start-body-right'>
                    <img className='natali-logo' src={Natali} alt="logo" />
                    <img className='natali-logo__adapt' src={Natali1} alt="logo" />
                </div>
            </div>
        </div >
    )
}


export default StartPage;