
import { movies, Movie } from '../../data/movies';
import { Link } from 'react-router-dom';

export function Home(){
    
    return (
        <div>
            {movies.map((movie:Movie) => (
            <Link key={movie.id} to={`/sala-poltronas/${movie.id}`}>
                <div>
                <img src={movie.img} alt={movie.name} />
                <h2>{movie.name}</h2>
                </div>
            </Link>
            ))}
        </div>
    );
}