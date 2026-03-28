import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }){
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
            </div>
        </div>
    );
}

export default MovieCard;