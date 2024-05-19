import axios from 'axios'
import { filmsApi } from './films'
import { personsApi } from './persons'

type ApiReturnType = {
    films: ReturnType<typeof filmsApi>
    persons: ReturnType<typeof personsApi>
}

const Api = (): ApiReturnType => {
    const instance = axios.create({
        baseURL: 'https://api.kinopoisk.dev/v1.4/',
        headers: {
            accept: 'application/json',
            // 'X-API-KEY': 'WN3GNJ9-1TR4XXP-JW6M6JW-X9X4BQH',
            'X-API-KEY': 'QQY2VHW-2GZ426W-N7FADHZ-B03DQ5M',
        },
    })

    return { films: filmsApi(instance), persons: personsApi(instance) }
}

export default Api
