import axios from 'axios'

export async function LoginApi(): Promise<{ data: { isAuth: boolean } }> {
    const { data } = await axios.get(
        'https://run.mocky.io/v3/373d1959-809d-441c-aa03-91420741a829',
    )
    return data
}
