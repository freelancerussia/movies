import { Person } from '@/api/persons'
import s from './PersonCard.module.scss'
import Link from 'next/link'

export default function PersonCard({
    person,
    rank,
}: {
    person: Person | null
    rank: string
}) {
    return (
        <div className={s.personSmallCard}>
            <Link className={s.link} href={`/actors/${person?.id}`} />
            <img src={person?.photo} alt={person?.name} />
            <div className={s.personInfo}>
                <h5 className={s.personRuName}>{person?.name}</h5>
                <h6 className={s.personEnName}>{person?.enName}</h6>

                <span className={s.personAge}>Возраст: {person?.age}</span>
            </div>
            <span className={s.personRank}>{rank}-место</span>
        </div>
    )
}
