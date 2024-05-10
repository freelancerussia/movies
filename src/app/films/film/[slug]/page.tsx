import Api from '@/api'
import { FilmCardType } from '@/api/films'
import { Person } from '@/api/persons'
import Actors from '@/components/FilmItemComponent/Actors/Actors'
import FilmInfo from '@/components/FilmItemComponent/FilmInfo/FilmInfo'
import Images from '@/components/FilmItemComponent/Images/Images'
import Reviews from '@/components/FilmItemComponent/Reviews/Reviews'

export default async function Page({ params }: { params: { slug: string } }) {
    let data: FilmCardType | null = null
    let persons: Person[] | null = null
    try {
        const res = await Api().films.getFilm(+params.slug)
        data = res
        persons = res.persons
    } catch (e) {
        //
    }
    return (
        <div>
            <FilmInfo filmItem={data} />
            <Actors persons={persons} />
            <Reviews filmId={params.slug} />
            <Images filmId={params.slug} />
        </div>
    )
}
