'use client'

import { Icons } from '@/components/Icons'
import s from './Pagination.module.scss'
import { useState } from 'react'

export default function Pagination({
    classname,
    page,
    setPage,
    totalPages,
    limit,
}: {
    classname?: string
    page: number
    setPage: (value: number) => void
    totalPages: number
    limit: number
}) {
    // const [currentPage, setCurrentPage] = useState(1)
    const portion = limit
    // const totalCount = 20
    // const totalPagesCount = Math.ceil(totalCount / portion)
    const totalPagesCount = totalPages
    return (
        <div className={`${s.pagination} ${classname}`}>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
                className={s.leftArr}
            >
                {Icons.arrow}
            </button>
            <div>
                <span className={s.currentPage}>{page}</span>/{' '}
                <span className={s.totalPagesCount}>{totalPagesCount}</span>
            </div>

            <button
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPagesCount}
                className={s.rightArr}
            >
                {Icons.arrow}
            </button>
        </div>
    )
}
