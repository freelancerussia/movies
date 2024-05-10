'use client'
import Container from '@/components/Container/Container'
import s from './Awards.module.scss'
import AwardCard from './AwardCard/AwardCard'
import Pagination from '@/components/common/Pagination/Pagination'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { AwardType } from '@/api/persons'

export default function Awards({ personId }: { personId: number | null }) {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [totalPages, setTotalPages] = useState(0)
    const [awards, setAwards] = useState<AwardType[] | null>(null)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const filters = {
            page,
            limit,
            personId: personId?.toString(),
            sortField: 'winning',
            sortType: '-1' as const,
        }
        async function getAwards() {
            setIsLoading(true)
            const res = await Api().persons.getPersonAwards(filters)
            try {
                if (res) {
                    setTotalPages(res.pages)
                    setAwards(res.docs)
                }
            } catch (e) {
                //
            }
            setIsLoading(false)
        }
        getAwards()
    }, [page])
    return (
        <section>
            <Container>
                <Pagination
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    classname={s.pagination}
                />
                <div className={`${s.row} ${isLoading ? s.loading : ''}`}>
                    {awards?.map(a => <AwardCard key={a.id} award={a} />)}
                </div>
            </Container>
        </section>
    )
}
