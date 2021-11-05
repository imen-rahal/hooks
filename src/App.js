import { useEffect, useState } from "react";
import { moviesData } from "./composants/MoviesData";
import AddMovie from "./composants/AddMovie/AddMovie";
import MovieList from "./composants/MoviesList";
import SearchMovie from "./composants/SearchMovie/SearchMovie";
function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(null);

  const filterByName = () => {
    setMoviesList(
      moviesData.filter((el) =>
        el.name.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMoviesList(moviesData.filter((el) => el.rating === ratingSearch));
  };

  useEffect(() => {
    filterByName();
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
  }, [ratingSearch]);

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MovieList moviesList={moviesList} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie />
      </div>
    </div>
  );
}

export default App;
