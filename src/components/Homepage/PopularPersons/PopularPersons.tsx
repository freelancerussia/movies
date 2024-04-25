import Container from '@/components/Container/Container'
import s from './PopularPersons.module.scss'
import Filters from '@/components/common/Filters/Filters'
import PersonCard from './PersonCard/PersonCard'
import RatingsCard from './RatingsCard/RatingsCard'

export default function PopularPersons() {
    const filters = [
        { id: '1', title: 'За год', value: 'year' },
        { id: '2', title: 'За месяц', value: 'month' },
        { id: '3', title: 'За неделю', value: 'week' },
    ]
    return (
        <section className={s.section}>
            <Container>
                <div className={s.filtersContainer}>
                    <h2 className={s.title}>Популярные персоны</h2>
                    <Filters filters={filters} />
                </div>
                <div className={s.personsContainer}>
                    <PersonCard />
                    <PersonCard />
                    <RatingsCard />
                </div>
            </Container>
        </section>
    )
}
