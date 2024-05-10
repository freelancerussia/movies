import { Person } from '@/api/persons'
import s from './ActorCard.module.scss'
import Link from 'next/link'

export default function ActorCard({ person }: { person: Person }) {
    return (
        <div className={s.container}>
            <Link href={`/actors/${person.id}`} className={s.link} />
            <div className={s.imageContainer}>
                <img src={person.photo} alt={person.name} />
            </div>
            <h4 className={s.name}>{person.name}</h4>
            <h5 className={s.engName}>{person.enName}</h5>
            <h5 className={s.role}>{person.description}</h5>
        </div>
    )
}
