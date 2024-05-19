import { Icons } from '@/components/Icons'
import s from './SearchPanel.module.scss'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { FilmCardType } from '@/api/films'
import FilmSearchCard from '../FilmSearchCard/FilmSearchCard'
import { Person } from '@/api/persons'
import PersonSearchCard from '../PersonSearchCard/PersonSearchCard'

export default function SearchPanel({
    setIsSearchOpen,
}: {
    // eslint-disable-next-line no-unused-vars
    setIsSearchOpen: (isValue: boolean) => void
}) {
    const [searchText, setSearchText] = useState('')
    const [films, setFilms] = useState<FilmCardType[] | null>(null)
    const [persons, setPersons] = useState<Person[] | null>(null)

    const setSearchPanelClose = () => {
        setIsSearchOpen(false)
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target && target.classList.contains(s.searchPanelContainer)) {
                setSearchPanelClose()
            }
        }

        document.body.addEventListener('click', handleClick)

        return () => {
            document.body.removeEventListener('click', handleClick)
        }
    }, [])

    async function getFilms() {
        const filters = {
            page: 1,
            limit: 5,
            query: searchText,
        }
        const resFilms = await Api().films.getFilmByTitle(filters)
        const resPersons = await Api().persons.getPersonsByName(filters)

        Promise.all([resPersons, resFilms])
            .then(res => {
                setPersons(res[0].docs)
                setFilms(res[1].docs)
            })
            // eslint-disable-next-line no-unused-vars
            .catch(e => {
                //
            })
    }
    useEffect(() => {
        const onEnterClick = async (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault()

                try {
                    await getFilms()
                } catch (e) {
                    //
                }
            }
        }
        document.body.addEventListener('keydown', onEnterClick)

        return () => {
            document.body.removeEventListener('keydown', onEnterClick)
        }
    }, [searchText])
    return (
        <div className={s.searchPanelContainer}>
            <div className={s.searchPanel}>
                <label className={s.searchLabel}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={e => setSearchText(e.currentTarget.value)}
                    />
                </label>
                <button onClick={getFilms} className={s.searchBtn}>
                    {Icons.search}
                </button>
                <button onClick={setSearchPanelClose} className={s.close}>
                    <img src="/images/homepage/close.png" alt="close" />
                </button>
            </div>
            {films || persons ? (
                <div className={s.resultsQuery}>
                    <h2 className={s.title}>Фильмы</h2>
                    <div className={s.filmsContainer}>
                        {films && films.length
                            ? films.map(f => (
                                  <FilmSearchCard
                                      setSearchPanelClose={setSearchPanelClose}
                                      key={f.id}
                                      filmCard={f}
                                  />
                              ))
                            : 'Фильмов не найдено'}
                    </div>
                    <h2 className={s.title}>Персоны</h2>
                    <div className={s.personsContainer}>
                        {persons && persons.length
                            ? persons.map(f => (
                                  <PersonSearchCard
                                      setSearchPanelClose={setSearchPanelClose}
                                      key={f.id}
                                      person={f}
                                  />
                              ))
                            : 'Персон не найдено'}
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
