'use client'

import Container from '@/components/Container/Container'
import s from './PopularPersons.module.scss'
import Filters from '@/components/common/Filters/Filters'
import PersonCard from './PersonCard/PersonCard'
import RatingsCard from './RatingsCard/RatingsCard'
import { useEffect, useState } from 'react'
import { GetPersonsFilter, Person } from '@/api/persons'
import Api from '@/api'

export default function PopularPersons() {
    const filters = [
        { id: '1', title: 'За год', value: 'year' },
        { id: '2', title: 'За месяц', value: 'month' },
        { id: '3', title: 'За неделю', value: 'week' },
    ]

    const [page, setPage] = useState(1)
    const [persons, setPersons] = useState<Person[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0)

    const limit = 6
    const filter: GetPersonsFilter = {
        page,
        limit,
        sortField: 'countAwards',
        sortType: '-1' as const,
        notNullFields: 'photo',
        'profession.value': 'Актер',
    }

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            try {
                const res = await Api().persons.getPersons(filter)
                setPersons(res.docs)
                setTotalPages(res.pages)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [])
    return (
        <section className={s.section}>
            <Container>
                <div className={s.filtersContainer}>
                    <h2 className={s.title}>Популярные персоны</h2>
                    {/* <Filters filters={filters} /> */}
                </div>
                <div className={s.personsContainer}>
                    <PersonCard
                        person={persons ? persons[0] : null}
                        rank={'1'}
                    />
                    <PersonCard
                        person={persons ? persons[1] : null}
                        rank={'2'}
                    />
                    <RatingsCard persons={persons} />
                </div>
            </Container>
        </section>
    )
}
