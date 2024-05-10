import { Person } from '@/api/persons'
import s from './RatingsCardElement.module.scss'
import Link from 'next/link'

export default function RatingsCardElement({
    person,
    rank,
}: {
    person: Person | null
    rank: number
}) {
    return (
        <div className={s.RatingsCardElement}>
            <Link className={s.link} href={`/actors/${person?.id}`} />
            <div className={s.personInfo}>
                <h5 className={s.personRuName}>{person?.name}</h5>
                <h6 className={s.personEnName}>{person?.enName}</h6>
                <span className={s.personAge}>Возраст: {person?.age}</span>
            </div>
            <div className={s.rank}>{rank}-е место</div>
        </div>
    )
}
