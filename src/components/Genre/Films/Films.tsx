import Container from '@/components/Container/Container'
import s from './Films.module.scss'

export default function Films() {
    return (
        <section>
            <Container>
                <div className={s.filmContainer}>
                    <div className={s.imgContainer}>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={s.filmInfo}>
                    <h4 className={s.title}>леон</h4>
                    <span className={s.engTitle}>leon</span>
                    <div> genres</div>
                </div>
                <div className={s.ratingsContainer}></div>
            </Container>
        </section>
    )
}
