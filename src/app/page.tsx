import ExpectedReleases from '@/components/Homepage/ExpectedReleases/ExpectedReleases'
// import NewTrailers from '@/components/Homepage/NewTrailers/NewTrailers'
import NowAtTheCinema from '@/components/Homepage/NowAtTheCinema/NowAtTheCinema'
import PopularFilms from '@/components/Homepage/PopularFilms/PopularFilms'
import PopularPersons from '@/components/Homepage/PopularPersons/PopularPersons'
import SubscribeToNewsletter from '@/components/Homepage/SubscribeToNewsletter/SubscribeToNewsletter'

export default function Home() {
    return (
        <main>
            <NowAtTheCinema />
            {/* <NewTrailers /> */}
            <PopularFilms />
            <PopularPersons />
            <ExpectedReleases />
            <SubscribeToNewsletter />
        </main>
    )
}
