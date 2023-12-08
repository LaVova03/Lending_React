import './PageFour.css';

const PageFour = () => {

    return (
        <div className='page4__main__wrap'>
            <div className="page4__head__services">ПРО ПОСЛУГИ</div>
            <ul className='page4__services__grid'>
                <li>
                    <div className="page4__grid__line"></div>
                    <div className="page4__grid__div1">01</div>
                    <div className="page4__grid__div2">Запуск вашої ідеї:<br />від ідеї до бізнесу</div>
                </li>
                <li>
                    Маєте унікальні знання та досвід, але не знаєте як запустити це в роботу та «завернути» в бізнес?<br />
                    Прагнете масштабувати свій бізнес але не масштабуватися під власним ім’ям?
                </li>
                <li>
                    <div className="page4__grid__line"></div>
                    <div className="page4__grid__div1">02</div>
                    <div className="page4__grid__div2">Запуск моєї ідеї</div>
                </li>
                <li>
                    Готові інвестувати в стартапи різного рівня доходу та в різних країнах?<br className='page4__br__adapt' />
                    Хочете мати «пасивний» дохід та не замислюватися кожного дня про існуючі проекти?
                </li>
                <li>
                    <div className="page4__grid__line"></div>
                    <div className="page4__grid__div1">03</div>
                    <div className="page4__grid__div2">Рестарт компанії<br />чи окремого підрозділу</div>
                </li>
                <li>
                    Іноді власники компаній «віддаляються» від введення справ через велику структуру компанії або віддають компанію на управління менеджменту (сімейному чи найнятому).<br className='page4__br'/>
                    В обох з цих варіантів компанія змінюється.<br className='page4__br__adapt' />І іноді йдуть роки для розуміння цього.<br className='page4__br__adapt' />Потрібні зміни, але чи згодні люди, що звикли до свої зони комфорту, на ці зміни?
                    Тут потрібно відповісти чесно лише собі.<br />
                    Рестарт – це завжди про зміни з «готовності» до змін.<br />
                    В цьому моменті я виступаю як кризис-менеджер, але модель моєї роботи визначаємо з власником, бо вона може бути різна
                </li>
                <li>
                    <div className="page4__grid__line"></div>
                    <div className="page4__grid__div1">04</div>
                    <div className="page4__grid__div2">Ваш варіант співпраці</div>
                </li>
                <li>
                    Враховуючи мій особистий досвід, розумію що є маса ідей як можна покращити вже існуючий бізнес. Тому, можливо, у вас є своя ідея, яку я не включила до описання.<br />
                    Ви можете сміло прийти з нею, і подивимося що ми зможемо разом зробити.
                </li>
            </ul>
        </div>
    )
}

export default PageFour;