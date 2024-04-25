import Container from '@/components/Container/Container'
import s from './ExpectedReleases.module.scss'
import Pagination from '@/components/common/Pagination/Pagination'
import FilmCard from '@/components/common/FilmCard/FilmCard'

export default function ExpectedReleases() {
    return (
        <section>
            <Container>
                <div className={s.titleContainer}>
                    <h2 className={s.title}>Ожидаемые новинки</h2>
                    <Pagination />
                </div>

                <div className={s.releasesContainer}>
                    <FilmCard
                        genres={[{ name: '' }]}
                        poster=""
                        name=""
                        rating={{ kp: 1 }}
                    />
                </div>
            </Container>
        </section>
    )
}
