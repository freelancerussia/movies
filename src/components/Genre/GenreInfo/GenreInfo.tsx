'use client'

import Container from '@/components/Container/Container'
import s from './GenreInfo.module.scss'
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs'
import { genresFilter } from '@/components/Homepage/NowAtTheCinema/NowAtTheCinema'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function GenreInfo({ genre }: { genre: string }) {
    const genreElement = genresFilter.filter(g => g.id === genre)
    const genreTitle =
        genreElement[0]?.value?.charAt(0).toUpperCase() +
        genreElement[0]?.value?.slice(1)

    const pathname = usePathname()
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const [sortField, setSortField] = useState<string>(
        searchParams.get('sortField') || '',
    )
    const [sortType, setSortType] = useState<string>(
        searchParams.get('sortType') || '-1',
    )
    console.log(sortField)

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        if (sortField) {
            params.set('sortField', sortField)
        } else {
            params.delete('sortField')
        }
        if (sortType) {
            params.set('sortType', sortType)
        } else {
            params.delete('sortType')
        }
        replace(`${pathname}?${params.toString()}`)
    }, [sortField, sortType])

    const onSetSortType = (str: string) => {
        console.log(str)

        if (str === '-1' || str === '1') {
            setSortType(str)
        } else {
            setSortType('-1')
        }
    }
    return (
        <section>
            <Container>
                <div className={s.container}>
                    <div>
                        <h2 className={s.title}>{genreTitle}</h2>
                        <Breadcrumbs
                            crumbs={[
                                { label: 'Главная', path: '/' },
                                { label: genreTitle, path: '' },
                            ]}
                        />
                        <p className={s.description}>
                            Также как дальнейшее развитие различных форм
                            деятельности, в своём классическом представлении,
                            допускает внедрение первоочередных требований.
                            Современные технологии достигли такого уровня, что
                            внедрение современных методик предполагает
                            независимые способы реализации стандартных подходов.
                            Сторонники тоталитаризма в науке могут быть
                            объявлены нарушающими общечеловеческие нормы этики и
                            морали.
                        </p>
                    </div>
                    <div className={s.sortedContainer}>
                        <select
                            value={sortType}
                            onChange={e => onSetSortType(e.currentTarget.value)}
                            className={s.sortedSelect}
                        >
                            <option value="-1">По возрастанию</option>
                            <option value="1">По убыванию</option>
                        </select>
                        <select
                            value={sortField}
                            onChange={e => setSortField(e.currentTarget.value)}
                            className={s.sortedSelect}
                        >
                            <option value="rating.imdb">рейтингу IMDb</option>
                            <option value="rating.kp">
                                рейтингу KinoPoisk
                            </option>
                            <option value="name">названию</option>
                        </select>
                    </div>
                </div>
            </Container>
        </section>
    )
}
