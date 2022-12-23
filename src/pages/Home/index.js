import React from "react";

import Poster from "../../components/Posters";
import Navbar from "../../components/Navbar"

import {ContainerMovies} from './style'

export default function Home(props) {

    return (
        <ContainerMovies>
            <Navbar/>
            <Poster />
        </ContainerMovies>
    )
}