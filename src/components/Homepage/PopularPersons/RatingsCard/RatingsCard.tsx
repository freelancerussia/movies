import s from './RatingsCard.module.scss'
import RatingsCardElement from './RatingsCardElement/RatingsCardElement'

export default function RatingsCard() {
    return (
        <div className={s.ratingsCard}>
            <RatingsCardElement />
            <RatingsCardElement />
            <RatingsCardElement />
            <RatingsCardElement />
        </div>
    )
}
