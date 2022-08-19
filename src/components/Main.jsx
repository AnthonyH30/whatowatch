import React from "react";
import MainStyle from "./MainStyle";
import Roller from "./Roller.jsx";
import PopularMovies from "./PopularMovies"

export function Main(){
    return(
        <MainStyle>
            <Roller/>
            <PopularMovies/>
        </MainStyle>
    )
}

export default Main;