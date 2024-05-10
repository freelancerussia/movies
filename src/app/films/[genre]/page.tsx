import Films from '@/components/Genre/Films/Films'
import GenreInfo from '@/components/Genre/GenreInfo/GenreInfo'
import { genresFilter } from '@/components/Homepage/NowAtTheCinema/NowAtTheCinema'

export default function Page({ params }: { params: { genre: string } }) {
    return (
        <div>
            <GenreInfo genre={params.genre} />
            <Films genre={params?.genre} />
        </div>
    )
}
