import { useLocation, useHistory } from "react-router-dom";
import "./detail.css";
import { POSTER_BASE_URL } from "../../api-client";

const MovieDetail = () => {
    const location = useLocation();
    const history = useHistory();

    const movie = location.state?.movie;
    if (movie) {
        return (
            <div className="movie_detail-container">
                <img
                    src={`${POSTER_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="movie_detail-thumbnail"
                />
                <div className="movie_detail-detail">
                    <span className="movie_detail-detail_title">{movie.title}</span>
                    <span className="movie_detail-detail_rating">({movie.vote_average})</span>
                    <p className="movie_detail-detail_date">
                        {new Date(movie.release_date).getFullYear()} | 126 mins | Pierre Morel
                    </p>
                    <p className="movie_detail-detail_cast">Cast: Liam Neeson, Maggie Grace</p>
                    <p className="movie_detail-detail_overview">Description: {movie.overview}</p>
                </div>
            </div>
        );
    } else {
        history.replace("/");
        return null;
    }
};

export default MovieDetail;
