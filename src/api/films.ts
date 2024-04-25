import { AxiosInstance } from 'axios'
export const filmsApi = (instance: AxiosInstance) => ({
    async getNowAtCinemaFilms(filters: FilmsFilterType): Promise<GetFilmRes> {
        const { data } = await instance.get('movie', { params: filters })

        return data
    },
})

export type FilmsFilterType = {
    page: number
    limit: number
    sortField?: string
    sortType?: '1' | '-1'
    type?: string
    status?: string
    year?: string
    'rating.kp'?: string
    ageRating?: string
    notNullFields?: string
    'genres.name'?: string
}

type GetFilmRes = {
    docs: FilmCardType[]
    limit: number
    page: number
    ages: number
    total: number
}

export type FilmCardType = {
    ageRating: number
    alternativeName: string
    backdrop: {
        previewUrl: string
        url: string
    }
    countries: { name: string }[]
    description: string
    enName: string | null
    genres: {
        name: string
    }[]
    id: number
    isSeries: boolean
    logo: { url: string }
    movieLength: number
    name: string
    names: { name: string; language: string; type: null | string }[]
    poster: {
        previewUrl: string
        url: string
    }
    rating: {
        await: null
        filmCritics: number
        imdb: number
        kp: number
        russianFilmCritics: number
    }
    ratingMpa: string
    seriesLength: null
    shortDescription: string
    status: null | string
    ticketsOnSale: boolean
    top10: null
    top250: number
    totalSeriesLength: null
    type: string
    typeNumber: number
    votes: {
        await: number
        filmCritics: number
        imdb: number
        kp: number
        russianFilmCritics: number
    }
    year: number
}
