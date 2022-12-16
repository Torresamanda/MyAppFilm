import React from 'react';

import { imgURL } from  "../../config/key";

import { ContainerMovie, Title, SectionInfos, MovieVoting, Imagem } from './style'

const AllMovie = ({movie, selectMovie}) => {
    return (
        <ContainerMovie onClick={() => selectMovie(movie)} className={"movie"}>
            <>
                {movie.poster_path &&
                 <Imagem src={imgURL + movie.poster_path} alt={movie.title}/> 
                }
                <SectionInfos className={"flex between"}>
                <Title>{movie.title}</Title>
                    {movie.vote_average ? <MovieVoting className={"movie-voting"}>{movie.vote_average}</MovieVoting> : null}
                </SectionInfos>
            </>
        </ContainerMovie>
    );
};


export default AllMovie;

