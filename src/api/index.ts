import axios from 'axios'
import { filmsApi } from './films'

type ApiReturnType = {
    films: ReturnType<typeof filmsApi>
}

const Api = (): ApiReturnType => {
    const instance = axios.create({
        baseURL: 'https://api.kinopoisk.dev/v1.4/',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'WN3GNJ9-1TR4XXP-JW6M6JW-X9X4BQH',
        },
    })

    return { films: filmsApi(instance) }
}

export default Api
