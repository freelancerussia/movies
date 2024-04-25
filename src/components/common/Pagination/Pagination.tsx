'use client'

import { Icons } from '@/components/Icons'
import s from './Pagination.module.scss'
import { useState } from 'react'

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const portion = 4
    const totalCount = 20
    const totalPagesCount = Math.ceil(totalCount / portion)
    return (
        <div className={s.pagination}>
            <button
                onClick={() => setCurrentPage(prev => --prev)}
                disabled={currentPage <= 1}
                className={s.leftArr}
            >
                {Icons.arrow}
            </button>
            <div>
                <span className={s.currentPage}>{currentPage}</span>/{' '}
                <span className={s.totalPagesCount}>{totalPagesCount}</span>
            </div>

            <button
                onClick={() => setCurrentPage(prev => ++prev)}
                disabled={currentPage >= totalPagesCount}
                className={s.rightArr}
            >
                {Icons.arrow}
            </button>
        </div>
    )
}
