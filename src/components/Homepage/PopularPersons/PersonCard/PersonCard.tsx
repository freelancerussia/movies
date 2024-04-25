import s from './PersonCard.module.scss'

export default function PersonCard() {
    return (
        <div className={s.personSmallCard}>
            <img src="/images/homepage/person-1.jpeg" alt="title" />
            <div className={s.personInfo}>
                <h5 className={s.personRuName}>Квентин Тарантино</h5>
                <h6 className={s.personEnName}>Quentin Tarantino</h6>

                <span className={s.personAge}>52 года</span>
            </div>
            <span className={s.personRank}>1-е место</span>
        </div>
    )
}
