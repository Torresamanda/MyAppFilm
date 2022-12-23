import React, { useEffect, useState } from "react"
import Youtube from 'react-youtube'
import axios from "axios"

import {
    APIKey,
    MOVIE_API,
    SEARCH_API_MOVIE,
    DISCOVER_API_MOVIE,
    BACKDROP_PATH
} from '../../../config/key.js'

import {
    Poster,
    PosterButton,
    PosterContent,
    H1,
    P
} from './style.js'


export default function PoterMovie() {
    const [, setMovies] = useState([])
    const [movie, setMovie] = useState({ title: 'Carregando Filmes' })
    const [searchKey,] = useState('')
    const [trailer, setTrailer] = useState(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMovies = async event => {
        if (event) {
            event.preventDefault()
        }

        const { data } = await axios.get(
            `${searchKey ? SEARCH_API_MOVIE : DISCOVER_API_MOVIE}`,
            {
                params: {
                    api_key: APIKey,
                    query: searchKey,
                    language: 'pt-BR'
                }
            }
        )
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }

    const fetchMovie = async id => {
        const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: APIKey,
                append_to_response: 'videos',
                language: 'pt-BR'
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                vid => vid.name === 'Trailer Oficial'
            )
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }

    return (
        <>
            {movie ? (
                <Poster
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), 
                url(${BACKDROP_PATH}${movie.backdrop_path})`
                    }}
                >
                    {playing ? (
                        <>
                            <Youtube
                                videoId={trailer.key}
                                className={'youtube-container amru'}
                                containerClassName={'youtube-container amru'}
                                opts={{
                                    width: '100%',
                                    height: '100%',
                                    playerVars: {
                                        autoplay: 1,
                                        controls: 0,
                                        cc_load_policy: 0,
                                        fs: 0,
                                        iv_load_policy: 0,
                                        modestbranding: 0,
                                        rel: 0,
                                        showinfo: 0
                                    }
                                }}
                            />
                            <PosterButton
                                onClick={() => setPlaying(false)}
                                className={'close-video'}
                            >
                                Close
                            </PosterButton>
                        </>
                    ) : (
                        <div className='center-max-size'>
                            <PosterContent className='poster-content'>
                                {trailer ? (
                                    <PosterButton
                                        className={'button play-video'}
                                        onClick={() => setPlaying(true)}
                                        type='button'
                                    >
                                        Play Trailer
                                    </PosterButton>
                                ) : (
                                    'Desculpe, não foi encontrado trailer para esse filme'
                                )}
                                <H1>{movie.title}</H1>
                                <P>{movie.overview}</P>
                            </PosterContent>
                        </div>
                    )}
                </Poster>
            ) : null}
        </>
    )
}