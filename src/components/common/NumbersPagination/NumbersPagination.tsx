'use client'
import { Icons } from '@/components/Icons'
import s from './NumbersPagination.module.scss'
import PaginationElement from './PaginationElement/PaginationElement'

export default function NumbersPagination({
    setPage,
    currentPage,
}: {
    // eslint-disable-next-line no-unused-vars
    setPage: (value: number) => void
    currentPage: number
}) {
    const totalItems = 150
    // const [currentPage, setCurrentPage] = useState(1)

    const incrementPage = () => setPage(currentPage + 1)
    const decrementPage = () => setPage(currentPage - 1)

    const totalPageCount = Math.ceil(totalItems / 10)

    const pagesArray: number[] = []

    for (let i = 1; i <= totalPageCount; i++) {
        pagesArray.push(i)
    }

    const renderPages = () => {
        if (currentPage === 1 || currentPage === 2) {
            return pagesArray
                .filter(p => p < 4 || p === totalPageCount)
                .map((p, index, arr) => {
                    if (index !== arr.length - 2) {
                        return (
                            <PaginationElement
                                style={
                                    p === currentPage
                                        ? {
                                              background: 'rgb(54, 87, 203)',
                                          }
                                        : {}
                                }
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </PaginationElement>
                        )
                    } else {
                        return [
                            <PaginationElement
                                style={
                                    p === currentPage
                                        ? {
                                              background: 'rgb(54, 87, 203)',
                                          }
                                        : {}
                                }
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </PaginationElement>,
                            <span className={s.points} key={p * Math.random()}>
                                ...
                            </span>,
                        ]
                    }
                })
        } else if (currentPage >= 3 && currentPage <= totalPageCount - 2) {
            return pagesArray
                .filter(
                    p =>
                        p === 1 ||
                        (p >= currentPage - 1 && p <= currentPage + 1) ||
                        p === totalPageCount,
                )
                .map((p, index, array) => {
                    if (p === 1) {
                        return [
                            <PaginationElement
                                style={
                                    p === currentPage
                                        ? {
                                              background: 'rgb(54, 87, 203)',
                                          }
                                        : {}
                                }
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </PaginationElement>,
                            <span className={s.points} key={p * Math.random()}>
                                ...
                            </span>,
                        ]
                    }

                    if (index === array.length - 1)
                        return [
                            <span className={s.points} key={p * Math.random()}>
                                ...
                            </span>,
                            <PaginationElement
                                style={
                                    p === currentPage
                                        ? {
                                              background: 'rgb(54, 87, 203)',
                                          }
                                        : {}
                                }
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </PaginationElement>,
                        ]

                    return (
                        <PaginationElement
                            style={
                                p === currentPage
                                    ? {
                                          background: 'rgb(54, 87, 203)',
                                      }
                                    : {}
                            }
                            key={p}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </PaginationElement>
                    )
                })
        } else {
            return pagesArray
                .filter(p => p >= totalPageCount - 3 || p === 1)
                .map(p => {
                    if (p === 1 && currentPage < totalPageCount - 1) {
                        return [
                            <PaginationElement
                                style={
                                    p === currentPage
                                        ? {
                                              background: 'rgb(54, 87, 203)',
                                          }
                                        : {}
                                }
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </PaginationElement>,
                            <span className={s.points} key={p * Math.random()}>
                                ...
                            </span>,
                        ]
                    }
                    return (
                        <PaginationElement
                            style={
                                p === currentPage
                                    ? {
                                          background: 'rgb(54, 87, 203)',
                                      }
                                    : {}
                            }
                            key={p}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </PaginationElement>
                    )
                })
        }
    }

    return (
        <div className={s.container}>
            <PaginationElement
                disabled={currentPage === 1}
                onClick={decrementPage}
                style={{ transform: 'rotate(180deg)' }}
            >
                {Icons.arrow}
            </PaginationElement>
            {renderPages()}
            <PaginationElement
                disabled={currentPage === totalPageCount}
                onClick={incrementPage}
            >
                {Icons.arrow}
            </PaginationElement>
        </div>
    )
}
