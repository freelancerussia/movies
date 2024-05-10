import { Person } from '@/api/persons'
import s from './RatingsCard.module.scss'
import RatingsCardElement from './RatingsCardElement/RatingsCardElement'

export default function RatingsCard({ persons }: { persons: Person[] | null }) {
    return (
        <div className={s.ratingsCard}>
            {persons
                ?.filter((p, index) => index > 1)
                ?.map((p, index) => (
                    <RatingsCardElement
                        person={p}
                        key={p.id}
                        rank={index + 3}
                    />
                ))}
        </div>
    )
}
