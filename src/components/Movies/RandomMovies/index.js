import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import axios from 'axios'

import { imgURL, APIKey } from '../../../config/key'

import Favicon from '../../../images/faviconTwo.png'

import { 
  Container, 
  Main, 
  Imagem, 
  ImgRandom, 
  SectionDetails, 
  H1, 
  Sinopse, 
  ContainerBtns, 
  Button, 
  SectionVideo,
  TextNoTrailer} from './style'

const RandomMovie  = () => {
  const MOVIE_API = 'https://api.themoviedb.org/3/'
  const TOP_MOVIE = MOVIE_API + 'movie/top_rated'

  const randomPages = Math.floor(Math.random() * 200) + 2

  const [movie, setMovie] = useState({ title: 'Carregando Filmes' })
  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState([null])

  useEffect(() => {
    getMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMovies = async event => {
    if (event) {
      event.preventDefault()
    }

    const { data } = await axios.get(`${TOP_MOVIE}`, {
      params: {
        api_key: APIKey,
        language: 'pt-BR',
        page: randomPages
      }
    })

    setMovie(data.results[0])
    setMovies(data.results)

    if (data.results.length) {
      await getVideoMovie(data.results[0].id)
    }
  }

  const getVideoMovie = async id => {
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
    <Container>
      <Main>
        <Imagem src={`${imgURL}${movie.poster_path}`} alt={movie.title} />

        <SectionDetails>
          <H1>{movie.title}</H1>
          <Sinopse>
            {movie.overview ? movie.overview : 'Desculpe, esse filme não tem sinopse disponível'}
          </Sinopse>

          <ContainerBtns>
            <Button onClick={getMovies}>
              <ImgRandom src={Favicon} alt='Aleatorio' />
              Surprenda-me
            </Button>
            <Link to='/'>
              <Button>Home</Button>
            </Link>
          </ContainerBtns>
          
        </SectionDetails>

      </Main>

      <SectionVideo>
        {movies.length ? (
          <>
            {trailer ? (
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
              </>
            ) : <TextNoTrailer>Desculpe, não foi encontrado trailer para esse filme</TextNoTrailer>}
          </>
        ) : null}
      </SectionVideo>
    </Container>
  )
}

export default RandomMovie;