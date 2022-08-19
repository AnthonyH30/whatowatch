import React from "react";
import { Movie } from "./Movie.js";
import { MovieList } from "./MovieList.js";
import { PopularMoviesstyle } from "./PopularMoviesStyle.js";
import axios from 'axios';
import Quality from "./Quality.js";


const MyApi_Movie = axios.create({
  baseURL : 'https://api.themoviedb.org/3/movie/popular?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1' 
})

export default class PopularMovies extends React.Component{

  state = {
    movies: [],
    imagePath: 'https://image.tmdb.org/t/p/w500'
  }

  componentDidMount(){
    this.GetApi()
  }

GetApi = async () => {
  const PegandoApi = await MyApi_Movie.get()

  const InfoFilmes = PegandoApi.data.results.map(item => {
    return{
        id: item.id,
      nome: item.title,
      image_url: item.poster_path
    }
  })
  
  this.setState({movies:InfoFilmes })

}
 
  render(){
    return(
        <PopularMoviesstyle>
        <div className="title">
            <h2>Popular Movies</h2>
        </div>
        <MovieList>


            {this.state.movies.map(movie => {
                return(
                    <Movie key={movie.id}>
                      <Quality>
                        <span>Full HD</span>
                      </Quality>
                        <a href="https://google.com"><img src={`${this.state.imagePath}${movie.image_url}`} alt={movie.nome} /></a>
                        {/* <span>{movie.nome}</span> */}
                    </Movie>
                )
            })}
        </MovieList>
    </PopularMoviesstyle>
    )
  }
}