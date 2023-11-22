import './Page6Business.css';

const Page6Business = () => {
    return (
        <div className='page6__main__wrap'>
            <div className='page6__card'>
                <div className='page6__card__photo'></div>
                <div className='page6__head'>Бізнес –<br />це про чесність</div>
                <div className='page6__fuckup'>Тому розповім про свої <span className='page6__span'>fuck up</span>, які привели мене до того, де я є зараз.</div>
                <div className='page6__text__li'>
                    <ul className='page6__text__ul'>
                        <li>Відкрити власну справу та не вийти з роботи<br />по контракту.<br />Результат: енергії 0, часу не вистачало ні на що.</li>
                        <li>Відкриття магазина взуття в період частих карантинів з вірою в себе та без фінансових доказів «все буде добре».<br />Результат: кредит довжиною в декілька років; «заморожений товар» на Х-грн.</li>
                        <li>«Зрадити» своїй ідеї та здешивити продукт до масмаркету.<br />Результат: втрата індивідуальності.</li>
                        <li>Отримати класний проект по найму та кинути його через професійний «булінг».</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page6Business;