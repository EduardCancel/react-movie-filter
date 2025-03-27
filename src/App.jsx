import { useState, useEffect, use } from "react";
import movies from "./data/movies"


export default function App() {

  const [searchGenre, setSearchGenre] = useState("");   /* Memory the input*/
  const [filterMovies, setFilterMovies] = useState(movies); /* Memory the movies list */


  useEffect(() => {

    if (searchGenre === "") {
      setFilterMovies(movies);
      return;
    } else {
      setFilterMovies(movies.filter(movie => movie.genre === searchGenre));
    }


  }, [searchGenre]);

  return (

    <>
      <div className="container">
        <div className="text-center mb-4 mt-4 ">
          <h1>Movie Filter</h1>
        </div>
        {/* Input for the filter */}
        <select className="form-select mb-3 " onChange={(e) => setSearchGenre(e.target.value)}>
          <option value="">All</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        {/* Display the movies */}
        <div className="card">
          <div className="card-body ">

          </div>
          <ul className="list-unstyled mx-4">
            {/* Map the movies list */}
            {filterMovies.map((movie, index) => (
              <li key={index}>
                {movie.title} - {movie.genre}
              </li>
            ))}
          </ul>
        </div>

      </div>




    </>
  )

}