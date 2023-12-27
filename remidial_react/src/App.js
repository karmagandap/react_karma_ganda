import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}></img>
          <div className="Movie-date">release : {movie.release_date}</div>
          <div className="Movie-rate">⭐ {movie.vote_average}</div>
        </div>
      );
    });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>KARMAFLIX MOVIE GRATIX</h1>
        <input placeholder="Cari Film..." className="Movie-search" onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
