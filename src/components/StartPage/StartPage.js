import './StartPage.css';
import Fb from '../../assets/page1/fb.svg';
import Inst from '../../assets/page1/inst.svg';
import Natali from '../../assets/page1/Natali.png';

const StartPage = () => {
    return (
        <div className='start__page__wrap'>
            <div className='start__page__head'>
                <ul className='start-ul-head'>
                    <li className='logo-img'>
                        <div className='text-logo'>NATALI AKTIBAEVA</div>
                    </li>
                    <li>
                        <ul className='start-head-center'>
                            <li className='head-center-li'><button className='start-head-link'>Про мене</button></li>
                            <li className='head-center-li'><button className='start-head-link'>Пропозиції</button></li>
                            <li className='head-center-li'><button className='start-head-link'>Звортній зв`язок</button></li>
                        </ul>
                    </li>
                    <li className='start-head-right'>
                        <button className='start-link-profile' ><img src={Fb} alt="logo" /></button>
                        <button className='start-link-profile' ><img src={Inst} alt="logo" /></button>
                    </li>
                </ul>
            </div>
            <div className='start__page__body'>
                <ul className='start-body-left'>
                    <li id='body-first-li'>Наталя<br />Актибаєва</li>
                    <li id='body-second-li'>креативний підприємець</li>
                    <li id='body-third-li'>Вмію робити з ідеї працюючий бізнес</li>
                    <button className='start__body__button'>Консультація</button>
                </ul>
                <div className='start-body-right'>
                    <img className='natali-logo' src={Natali} alt="logo" />
                </div>
            </div>
        </div >
    )
}


export default StartPage;