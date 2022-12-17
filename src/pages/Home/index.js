import React, { useState } from "react";

import PosterMovie from "../../components/PosterMovie";
import Navbar from '../../components/Navbar'

export default function Home(props) {

    const [searchKey, setSearchKey] = useState('')

    return (
        <>
            <PosterMovie />
        </>
    )
}