'use client'
import s from './Filters.module.scss'

type FilterElement = {
    id: string
    value: string | null
    title: string
}

export default function Filters({
    filters,
    setValue,
    value,
}: {
    filters: FilterElement[]
    // eslint-disable-next-line no-unused-vars
    setValue: (value: string | null) => void
    value: string | null
}) {
    // const [activeFilter, setActiveFilter] = useState(filters[0]?.value)
    return (
        <ul className={s.filters}>
            {filters?.map(f => (
                <li
                    key={f.id}
                    className={`${s.filterElement} ${f.value === value ? s.active : ''}`}
                >
                    <button
                        className={s.filterBtn}
                        onClick={() => setValue(f.value)}
                    >
                        {f.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}
