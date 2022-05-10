import React , {useEffect, useState} from 'react'
import instance from './axios';

import "./Row.css"

const Row = ({title , fetchUrl,isLargeRow}) => {

const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies] = useState([]);
    //const [trailerUrl , setTrailerUrl] = useState([]);

    useEffect(() =>{

            async function fetchData(){
                const request = await instance.get(fetchUrl);
               // console.log(request);
               setMovies(request.data.results);
               console.log(request.data.results);
               return request;
            }
            fetchData()
    },[fetchUrl]);




  return (
    
 
 <div className="row">

 <h2>{title}</h2>


    <div className='row_posters'>
    {movies.map(movies =>(
        
        <img
        
        key = {movies.id}
       
         className={`row_poster ${isLargeRow && "row_posterLarge"}`}
         src={`${base_url}${ isLargeRow ? movies.poster_path : movies.backdrop_path }`} alt={movies.name} />
    ))}
    </div>
 </div>

    

    


  )
}

export default Row