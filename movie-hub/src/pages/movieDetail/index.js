import { useLocation, useHistory } from "react-router-dom";
import "./detail.css";

const MovieDetail = () => {
    const location = useLocation();
    const history = useHistory();

    if (location.state?.movie) {
        return <div className="movie_detail-container"></div>;
    } else {
        history.replace("/");
        return null;
    }
};

export default MovieDetail;
