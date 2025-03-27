import { useState, useEffect, use } from "react";
import movies from "./data/movies"


export default function App() {

  const [searchGenre, setSearchGenre] = useState("");   /* Memory the input*/
  const [filterMovies, setFilterMovies] = useState(movies); /* Memory the movies list */


  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      return movie.genre.toLowerCase().includes(searchGenre.toLowerCase());
    });

    setFilterMovies(filteredMovies);
  }, [searchGenre]);

  return (

    <>
      <h1>Movie Filter</h1>



    </>
  )

}