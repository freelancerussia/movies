import Link from 'next/link'
import s from './PersonSearchCard.module.scss'
import { Person } from '@/api/persons'

export default function PersonSearchCard({
    person,
    setSearchPanelClose,
}: {
    person: Person
    setSearchPanelClose: () => void
}) {
    return (
        <div className={s.container}>
            <Link
                onClick={setSearchPanelClose}
                className={s.link}
                href={`/actors/${person.id}`}
            />

            <div className={s.imgContainer}>
                <img
                    src={person.photo || '/images/default-person.png'}
                    alt={person.name}
                />
            </div>
            <div className={s.personInfo}>
                <h4 className={s.name}>{person.name}</h4>
                <span className={s.engName}>{person.enName}</span>
                <span className={s.engName}>{person.description}</span>
            </div>
        </div>
    )
}
