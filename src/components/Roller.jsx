import React, { Component } from "react";
import { MovieRoll } from "./MovieRoll";
import RollerStyles from "./RollerStyles"
import TitleRoll from "./TitleRoll";
import axios from 'axios';
import QualityRoller from "./QualityRoller";



const MyApi_Movie = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1' 
  })

export class Roller extends Component{

    state = {
        movies: [],
        imagePath: 'https://image.tmdb.org/t/p/w500',
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
                <>
                    <TitleRoll>
                        <h2>Top Rated</h2>
                    </TitleRoll>
                        <RollerStyles>
                        <div className="carrosel">
                            {this.state.movies.map(movie => {
                                return(
                                    <MovieRoll key={movie.id}>
                                        <QualityRoller>
                                          <span>Full HD</span>
                                        </QualityRoller>
                                        <a href="https://google.com"><img src={`${this.state.imagePath}${movie.image_url}`} alt={movie.nome} /></a>
                                        {/* <span>{movie.nome}</span> */}
                                    </MovieRoll>
                                )
                            })}
                        </div>
                        </RollerStyles>
                </>
                
        )
        }
    

}

export default Roller;
