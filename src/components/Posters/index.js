import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'

import PosterMovie from '../Movies/PosterMovie/index'
import PosterSerie from '../Series/PosterSerie'

export default function Posters() {

  // const selectMovie = movie => {
  //   fetchMovie(movie.id)
  //   setPlaying(false)
  //   setMovie(movie)
  //   window.scrollTo(0, 0)
  // }

  // const renderMovies = () =>
  //   movies.map(movie => (
  //     <AllMovie selectMovie={selectMovie} key={movie.id} movie={movie} />
  //   ))

  return (
    <Carousel>
      <Carousel.Item interval={15000}>
        <PosterMovie />
      </Carousel.Item>

      <Carousel.Item interval={15000}>
        <PosterSerie />
      </Carousel.Item>
    </Carousel>
  )
}
