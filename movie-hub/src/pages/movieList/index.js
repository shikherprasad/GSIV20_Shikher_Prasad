import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./list.css";
import {
    fetchMovieList,
    getMovieList,
    getMovieListStatus,
    getMovieListError,
} from "../../redux/movieListSlice";
import { POSTER_BASE_URL } from "../../api-client";
import { API_STATE } from "../../constants";

const MovieList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const movieList = useSelector(getMovieList);
    const fetchAPIStatus = useSelector(getMovieListStatus);
    const error = useSelector(getMovieListError);

    useEffect(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    const handleMovieClick = (movie) => () => {
        history.push(movie.title.replaceAll(" ", "-"), { movie });
    };

    let content;
    if (movieList) {
        content = movieList.results?.map((movie) => {
            return (
                <div
                    key={movie.id}
                    onClick={handleMovieClick(movie)}
                    className="movie_list-movie-container"
                >
                    <img
                        src={`${POSTER_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="movie_list-movie_thumbnail"
                    />
                    <div className="movie_list-movie_detail">
                        <div className="movie_list-movie_title">{movie.title}</div>
                        <div className="movie_list-movie_vote">{movie.vote_average}</div>
                    </div>
                    <div className="movie_list-movie_desc">{movie.overview}</div>
                </div>
            );
        });
    } else if (fetchAPIStatus === API_STATE.LOADING) {
        content = <div>Loading...</div>;
    } else if (fetchAPIStatus === API_STATE.FAILED) {
        content = <div>{error}</div>;
    }
    return <div className="movie_list-container">{content}</div>;
};

export default MovieList;
