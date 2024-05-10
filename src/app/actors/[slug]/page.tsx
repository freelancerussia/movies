import Api from '@/api'
import ActorHeadInfo from '@/components/ActorPage/ActorHeadInfo/ActorHeadInfo'
import Awards from '@/components/ActorPage/Awards/Awards'
import BestsFilms from '@/components/ActorPage/BestsFilms/BestsFilms'
import Facts from '@/components/ActorPage/Facts/Facts'

export default async function Page({ params }: { params: { slug: string } }) {
    let person = null
    let slug
    try {
        slug = +params.slug
        if (slug) {
            person = await Api().persons.getPersonsById(slug)
        }
    } catch (e) {
        //
    }

    return (
        <>
            <ActorHeadInfo person={person} />
            <Awards personId={slug || null} />
            <BestsFilms personId={slug || null} />
            <Facts facts={person?.facts || null} />
        </>
    )
}
