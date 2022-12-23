import React from "react";
import { Link } from "react-router-dom";

import { Header, Title, Form, RandomButton, RandomImage, Search, SubmitSearchButton, Img } from './style'

import searchIcon from '../../images/searchIcon.svg'
import Favicon from '../../images/faviconTwo.png'

export default function Navbar(props) {

  return (
    <Header>
      <Title href="/">RocktFlix</Title>

      <Form onSubmit={props.onSubmit}>
        <Link to={'/randomMovies'}>
          <RandomButton>
            <RandomImage src={Favicon} alt='Aleatorio' />
            <p>Surprenda-me</p>
          </RandomButton>
        </Link>

        <Search
          type='text'
          id='search'
          onInput={props.onInput}
        />

        <SubmitSearchButton type='submit'>
          <Img src={searchIcon} alt="" />
        </SubmitSearchButton>
      </Form>

    </Header>
  )
}