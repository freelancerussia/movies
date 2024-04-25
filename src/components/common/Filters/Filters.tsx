'use client'
import { useState } from 'react'
import s from './Filters.module.scss'

type FilterElement = {
    id: string
    value: string
    title: string
}

export default function Filters({ filters }: { filters: FilterElement[] }) {
    const [activeFilter, setActiveFilter] = useState(filters[0]?.value)
    return (
        <ul className={s.filters}>
            {filters?.map(f => (
                <li
                    key={f.id}
                    className={`${s.filterElement} ${f.value === activeFilter ? s.active : ''}`}
                >
                    <button
                        className={s.filterBtn}
                        onClick={() => setActiveFilter(f.value)}
                    >
                        {f.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}
