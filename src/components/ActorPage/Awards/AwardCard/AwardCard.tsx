import { AwardType } from '@/api/persons'
import s from './AwardCard.module.scss'

export default function AwardCard({ award }: { award: AwardType }) {
    return (
        <div className={s.card}>
            <div
                className={s.title}
            >{`${award?.nomination?.title}, ${award?.nomination?.award?.year}`}</div>
            <div
                className={s.description}
            >{` Номинация "${award?.nomination?.title}" за фильм ${award?.movie?.name}`}</div>
            <div>{award?.winning ? 'Победил' : 'Не победил'}</div>
        </div>
    )
}
