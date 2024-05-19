import Container from '@/components/Container/Container'
import s from './Actors.module.scss'
import ActorCard from './ActorCard/ActorCard'
// import Link from 'next/link'
// import { Icons } from '@/components/Icons'
import { Person } from '@/api/persons'

export default function Actors({ persons }: { persons: Person[] | null }) {
    return (
        <section>
            <Container>
                <div className={s.topContainer}>
                    <h2 className={s.title}>В главных ролях:</h2>
                    {/* <Link className={s.allActorsLink} href={'/'}>
                        Все актеры {Icons.arrow}
                    </Link> */}
                </div>

                <div className={s.actorsContainer}>
                    {persons
                        ?.filter((p, index) => index < 10)
                        .map(p => <ActorCard key={p.id} person={p} />)}
                </div>
            </Container>
        </section>
    )
}
