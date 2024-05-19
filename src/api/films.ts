import { AxiosInstance } from 'axios'
export const filmsApi = (instance: AxiosInstance) => ({
    async getFilms(filters: FilmsFilterType): Promise<GetFilmRes> {
        const { data } = await instance.get('movie', { params: filters })

        return data
    },
    async getFilmByTitle(filters: FilmsByTitle): Promise<GetFilmRes> {
        const { data } = await instance.get('movie/search', { params: filters })
        return data
    },
    async getFilm(id: number): Promise<FilmCardType> {
        const { data } = await instance.get(`movie/${id}`)
        return data
    },
    async getReviews(filters: GetReviewsFilter): Promise<GetReviewsRes> {
        const { data } = await instance.get(`review`, { params: filters })
        return data
    },
    async getImages(filters: GetReviewsFilter): Promise<GetImagesRes> {
        const { data } = await instance.get(`image`, { params: filters })
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
    'persons.id'?: string | null
    ticketsOnSale?: boolean
    'releaseYears.end'?: string | null
}

export type GetReviewsFilter = {
    page: number
    limit: number
    sortField?: string
    movieId?: string | null
}

export type FilmsByTitle = {
    page: number
    limit: number
    query: string
}

type GetRes = {
    limit: number
    page: number
    pages: number
    total: number
}

type GetFilmRes = GetRes & {
    docs: FilmCardType[]
}

type GetReviewsRes = GetRes & {
    docs: ReviewType[]
}

export type ImageType = {
    movieId: number
    type: string
    language: string
    url: string
    previewUrl: string
}

export type GetImagesRes = GetRes & {
    docs: ImageType[]
}

export type ReviewType = {
    id: number
    title: string
    type: string
    review: string
    date: string
    author: string
    createdAt: string
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
    slogan: string
    videos: {
        trailers: [
            {
                url: string
                name: string
                site: string
                type: string
                size: number
            },
        ]
        teasers: [
            {
                url: string
                name: string
                site: string
                type: string
                size: number
            },
        ]
    }
    persons: [
        {
            id: number
            photo: string
            name: string
            enName: string
            description: string
            profession: string
            enProfession: string
        },
    ]
    budget: {
        value: number
        currency: string
    }
    premiere: {
        country: string
        world: string
        russia: string
        digital: string
        cinema: string
        bluray: string
        dvd: string
    }
}

// type FilmType ={
//   id: number,
//   externalId: {
//     kpHD: string,
//     imdb: string,
//     tmdb: number
//   },
//   name: string,
//   "alternativeName": string,
//   "enName": string,
//   "names": [
//     {
//       "name": "string",
//       "language": "string",
//       "type": "string"
//     }
//   ],
//   "type": "movie",
//   "typeNumber": 1,
//   "year": 2023,
//   "description": "string",
//   "shortDescription": "string",
//   "slogan": "string",
//   "status": "completed",
//   "rating": {
//     "kp": 6.2,
//     "imdb": 8.4,
//     "tmdb": 3.2,
//     "filmCritics": 10,
//     "russianFilmCritics": 5.1,
//     "await": 6.1
//   },
//   "votes": {
//     "kp": 60000,
//     "imdb": 50000,
//     "tmdb": 10000,
//     "filmCritics": 10000,
//     "russianFilmCritics": 4000,
//     "await": 34000
//   },
//   "movieLength": 120,
//   "ratingMpaa": "pg13",
//   "ageRating": "16",
//   "logo": {
//     "url": "string"
//   },
//   "poster": {
//     "url": "string",
//     "previewUrl": "string"
//   },
//   "backdrop": {
//     "url": "string",
//     "previewUrl": "string"
//   },
//   "videos": {
//     "trailers": [
//       {
//         "url": "https://www.youtube.com/embed/ZsJz2TJAPjw",
//         "name": "Official Trailer",
//         "site": "youtube",
//         "type": "TRAILER",
//         "size": 0
//       }
//     ],
//     "teasers": [
//       {
//         "url": "https://www.youtube.com/embed/ZsJz2TJAPjw",
//         "name": "Official Trailer",
//         "site": "youtube",
//         "type": "TRAILER",
//         "size": 0
//       }
//     ]
//   },
//   "genres": [
//     {
//       "name": "string"
//     }
//   ],
//   "countries": [
//     {
//       "name": "string"
//     }
//   ],
//   "persons": [
//     {
//       "id": 6317,
//       "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg",
//       "name": "Пол Уокер",
//       "enName": "Paul Walker",
//       "description": "string",
//       "profession": "string",
//       "enProfession": "string"
//     }
//   ],
//   "reviewInfo": {
//     "count": 0,
//     "positiveCount": 0,
//     "percentage": "string"
//   },
//   "seasonsInfo": [
//     {
//       "number": 0,
//       "episodesCount": 0
//     }
//   ],
//   "budget": {
//     "value": 207283,
//     "currency": "€"
//   },
//   "fees": {
//     "world": {
//       "value": 207283,
//       "currency": "€"
//     },
//     "russia": {
//       "value": 207283,
//       "currency": "€"
//     },
//     "usa": {
//       "value": 207283,
//       "currency": "€"
//     }
//   },
//   "premiere": {
//     "country": "США",
//     "world": "2023-02-25T02:44:39.359Z",
//     "russia": "2023-02-25T02:44:39.359Z",
//     "digital": "string",
//     "cinema": "2023-02-25T02:44:39.359Z",
//     "bluray": "string",
//     "dvd": "string"
//   },
//   "similarMovies": [
//     {
//       "id": 0,
//       "rating": {
//         "kp": 6.2,
//         "imdb": 8.4,
//         "tmdb": 3.2,
//         "filmCritics": 10,
//         "russianFilmCritics": 5.1,
//         "await": 6.1
//       },
//       "year": 2021,
//       "name": "string",
//       "enName": "string",
//       "alternativeName": "string",
//       "type": "string",
//       "poster": {
//         "url": "string",
//         "previewUrl": "string"
//       }
//     }
//   ],
//   "sequelsAndPrequels": [
//     {
//       "id": 0,
//       "rating": {
//         "kp": 6.2,
//         "imdb": 8.4,
//         "tmdb": 3.2,
//         "filmCritics": 10,
//         "russianFilmCritics": 5.1,
//         "await": 6.1
//       },
//       "year": 2021,
//       "name": "string",
//       "enName": "string",
//       "alternativeName": "string",
//       "type": "string",
//       "poster": {
//         "url": "string",
//         "previewUrl": "string"
//       }
//     }
//   ],
//   "watchability": {
//     "items": [
//       {
//         "name": "string",
//         "logo": {
//           "url": "string"
//         },
//         "url": "string"
//       }
//     ]
//   },
//   "releaseYears": [
//     {
//       "start": 2022,
//       "end": 2023
//     }
//   ],
//   "top10": 1,
//   "top250": 200,
//   "ticketsOnSale": true,
//   "totalSeriesLength": 155,
//   "seriesLength": 20,
//   "isSeries": true,
//   "audience": [
//     {
//       "count": 1000,
//       "country": "Россия"
//     }
//   ],
//   "lists": [
//     "250 лучших сериалов"
//   ],
//   "networks": [
//     {
//       "items": [
//         {
//           "name": "Netflix",
//           "logo": {
//             "url": "string"
//           }
//         }
//       ]
//     }
//   ],
//   "updatedAt": "2024-05-02T09:55:46.715Z",
//   "createdAt": "2024-05-02T09:55:46.715Z",
//   "facts": [
//     {
//       "value": "string",
//       "type": "string",
//       "spoiler": true
//     }
//   ],
//   "imagesInfo": {
//     "postersCount": 0,
//     "backdropsCount": 0,
//     "framesCount": 0
//   }
// }
