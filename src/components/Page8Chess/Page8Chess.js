import './Page8Chess.css';
import Free from '../../assets/page8/free.png';

const Page8Chess = () => {
    return (
        <div className='page8__main__wrap'>
            <div className='page8__card'>
                <div className='page8__img__wrap'>
                    <img className='page8__img' src={Free} alt="logo" />
                </div>
                <div className='page8__card__text'>
                    Бiзнес – це гра,<br />в яку потрiбно грати завжди<br />ризикуючи<br />та з вiрою в перемогу
                </div>
                <div className='page8__card__bottom'>
                    Наталя Актибаєва
                </div>
            </div>
        </div>
    )
}

export default Page8Chess;