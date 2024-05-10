import Container from '@/components/Container/Container'
import s from './ActorHeadInfo.module.scss'
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs'
import TabsComponent from './TabsComponent/TabsComponent'
import { Person } from '@/api/persons'

export default function ActorHeadInfo({ person }: { person: Person | null }) {
    return (
        <section className={s.section}>
            <div className={s.background}></div>
            <Container>
                <div className={s.container}>
                    <div className={s.imageContainer}>
                        <img
                            src={person?.photo || '/images/default-person.png'}
                            alt={person?.name}
                        />
                    </div>
                    <div className={s.nameContainer}>
                        <Breadcrumbs
                            classname={s.breadcrumbs}
                            crumbs={[
                                { label: 'Главная', path: '/' },
                                { label: 'Актеры', path: '/actors' },
                                { label: person?.name || '', path: '' },
                            ]}
                        />
                        <h2 className={s.name}>{person?.name}</h2>
                        <h4 className={s.engName}>{person?.enName}</h4>
                    </div>
                    {/* <div className={s.tabsContainer}> */}
                    <TabsComponent person={person} />
                    {/* </div> */}
                </div>
            </Container>
        </section>
    )
}
