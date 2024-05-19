import Films from '@/components/Genre/Films/Films'
import GenreInfo from '@/components/Genre/GenreInfo/GenreInfo'

export default function Page({ params }: { params: { genre: string } }) {
    return (
        <div>
            <GenreInfo genre={params.genre} />
            <Films genre={params?.genre} />
        </div>
    )
}
