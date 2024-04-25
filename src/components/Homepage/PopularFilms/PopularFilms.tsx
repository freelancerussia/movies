'use client'
import Container from '@/components/Container/Container'
import s from './PopularFilms.module.scss'
import FilmCard from '@/components/common/FilmCard/FilmCard'
import Pagination from '@/components/common/Pagination/Pagination'
import Filters from '@/components/common/Filters/Filters'

export default function PopularFilms() {
    const filters = [
        { id: '1', title: 'Всё время', value: 'all-time' },
        { id: '2', title: '2020', value: '2020' },
        { id: '3', title: '2019', value: '2019' },
        { id: '4', title: '2018', value: '2018' },
        { id: '5', title: '2017', value: '2017' },
        { id: '6', title: '2016', value: '2016' },
        { id: '7', title: '2015', value: '2015' },
    ]
    return (
        <section>
            <Container>
                <div className={s.popularFilmsFilterContainer}>
                    <h2 className={`${s.title} ${s.line}`}>
                        Популярные фильмы
                    </h2>
                    <Filters filters={filters} />
                </div>
                <div className={s.filmsContainer}>
                    <FilmCard
                        genres={[{ name: '' }]}
                        poster=""
                        name=""
                        rating={{ kp: 1 }}
                    />
                </div>
                <Pagination />
            </Container>
        </section>
    )
}
