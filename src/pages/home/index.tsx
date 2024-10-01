
import { movies, Movie } from '../../data/movies';
import { Link } from 'react-router-dom';
import styles from './home.module.css'

export function Home(){
    
    return (
        <main className={styles.homeContainer}>  

           <div className={styles.moviesLinksHome}>
            {movies.map((movie:Movie) => (
                    <Link className={styles.movieHome} key={movie.id} to={`/sala-poltronas/${movie.id}`}>
                        <div>
                            <img src={`/assets/${movie.img}`} width={100} height={150} alt={movie.name} />
                            <h2>{movie.name}</h2>
                            <p>{movie.audio}</p>
                            <p>Duração: {movie.time}</p>
                        </div>
                        
                        <div className={styles.movieScheduleHome}>
                            <h3>Horários</h3>
                            {movie.schedule.map(item => 
                                <div>
                                <p>{item.day}</p>
                                <ul>{item.hours.map(hour => <li>{hour}</li>)}</ul>
                                </div>
                            )}

                        </div>
                    

                    </Link>
                ))}
           </div>
            
        </main>
    );
}