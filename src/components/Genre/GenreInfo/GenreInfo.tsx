import Container from '@/components/Container/Container'
import s from './GenreInfo.module.scss'
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs'

export default function GenreInfo() {
    return (
        <section>
            <Container>
                <div className={s.container}>
                    <div>
                        <h2 className={s.title}>Боевики</h2>
                        <Breadcrumbs
                            crumbs={[
                                { label: 'Главная', path: '/' },
                                { label: 'Боевики', path: '' },
                            ]}
                        />
                        <p>
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
                    <select className={s.sortedSelect}>
                        <option value="rating-kinoarea">
                            рейтингу Kinoarea
                        </option>
                        <option value="rating-kp">рейтингу Kinopoisk</option>
                    </select>
                </div>
            </Container>
        </section>
    )
}
