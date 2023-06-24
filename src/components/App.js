
import React,{useState} from "react";
import axios from axios;
import './../styles/App.css';

const App = () => {

  const[search, setSearch] = useState("")
  const[movieList, setMovieList] = useState([])

  function handleSearch(e){
    e.preventDefault();
        axios.get("https://www.omdbapi.com",{
          "params":{
            apikey : "3809b6ac",
            type : "movie",
            s : search
          }
        }) 
        .then(response => {
             console.log("response",response.data.Search)
             setMovie(response.data.Search)
             setSearch("")
        })
        .catch(err => console.log(err))
    
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <p>Search Movies</p>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" onClick={handleSearch}>Search</button>

        {
          movie ? (
            <ul>
                {
                  movie.map(value =>(
                    <li>
                      <h2>{value.Title}</h2>
                      <img src={value.Poster}  alt={value.Title}/>
                    </li>
                  ))
                }
            </ul>
          ): (<h2 className="error"> Invalid movie name. Please try again.</h2>)
         }
    </div>
  )
}

export default App
