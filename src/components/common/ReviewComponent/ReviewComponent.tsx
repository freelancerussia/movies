import { formatDateTime } from '@/utils/formatDateTime'
import s from './ReviewComponent.module.scss'
import { ReviewType } from '@/api/films'

export default function ReviewComponent({ review }: { review: ReviewType }) {
    let src = ''
    if (review) {
        src =
            review.type === 'Позитивный'
                ? '/images/film-element/star.png'
                : review.type === 'Нейтральный'
                  ? '/images/film-element/thinking.png'
                  : review.type === 'Негативный'
                    ? '/images/film-element/sad.png'
                    : ''
    }

    return (
        <div className={s.container}>
            <div className={s.publicationInfo}>
                <h4 className={s.author}>{review?.author}</h4>
                <div className={s.date}>{formatDateTime(review?.date)}</div>
                <img className={s.emoji} src={src} alt={review?.type} />
            </div>
            <h5 className={s.reviewTitle}>{review?.title}</h5>
            <p className={s.review}>{review?.review}</p>
        </div>
    )
}
