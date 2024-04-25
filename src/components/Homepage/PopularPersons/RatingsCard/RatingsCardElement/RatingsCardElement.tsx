import s from './RatingsCardElement.module.scss'

export default function RatingsCardElement() {
    return (
        <div className={s.RatingsCardElement}>
            <div className={s.personInfo}>
                <h5 className={s.personRuName}>Тинто брасс</h5>
                <h6 className={s.personEnName}>Tinto Brass</h6>
                <span className={s.personAge}>87 лет</span>
            </div>
            <div className={s.rank}>3-е место</div>
        </div>
    )
}
