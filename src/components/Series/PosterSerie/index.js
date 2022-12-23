import { 
    APIKey, 
    MOVIE_API, 
    BACKDROP_PATH, 
    SEARCH_API_SERIE, 
    DISCOVER_API_SERIE 
} from '../../../config/key.js'

import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

import axios from 'axios'

import {
    Poster,
    PosterButton,
    PosterContent,
    H1,
    P
} from './style'

export default function PosterSerie() {
    const [searchKey,] = useState('')
    const [trailer, setTrailer] = useState(null)
    const [playing, setPlaying] = useState(false)

    const [, setSeries] = useState([])
    const [serie, setSerie] = useState({ title: 'Carregando Séries' })

    useEffect(() => {
        fetchSeries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const fetchSeries = async event => {
        if (event) {
            event.preventDefault()
        }

        const { data } = await axios.get(
            `${searchKey ? SEARCH_API_SERIE : DISCOVER_API_SERIE}`,
            {
                params: {
                    api_key: APIKey,
                    query: searchKey,
                    language: 'pt-BR'
                }
            }
        )

        setSeries(data.results)
        console.log(data.results)
        setSerie(data.results[0])

        if (data.results.length) {
            await fetchSerie(data.results[0].id)
        }
    }

    const fetchSerie = async id => {
        const { data } = await axios.get(`${MOVIE_API}tv/${id}`,
            {
                params: {
                    api_key: APIKey,
                    append_to_response: 'videos',
                    language: 'pt-BR'
                }
            }
        )

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                vid => vid.name === 'Trailer Oficial'
            )
            setTrailer(trailer ? trailer : data.videos.results[0])
        }
        setSerie(data)
    }

    return (
        <>
            {serie ? (
                <Poster
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), 
                  url(${BACKDROP_PATH}${serie.backdrop_path})`
                    }}>

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
                                    'Desculpe, não foi encontrado trailer para essa serie'
                                )}
                                <H1>{serie.name}</H1>
                                <P>{serie.overview}</P>
                            </PosterContent>
                        </div>
                    )}
                </Poster>
            ) : null}
        </>
    )
}