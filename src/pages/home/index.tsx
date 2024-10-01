
import { movies, Movie } from '../../data/movies';
import { Link } from 'react-router-dom';
import styles from './home.module.css'

export function Home(){
    
    return (
        <main className={styles.homeContainer}>  
           <h1 className={styles.homeTitle}>
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5601 14.5822H14.0574L33.4801 9.38845C33.664 9.33939 33.8364 9.25393 33.9875 9.13702C34.1386 9.0201 34.2653 8.87405 34.3603 8.70727C34.4554 8.5405 34.5169 8.35631 34.5413 8.16534C34.5657 7.97437 34.5525 7.78039 34.5025 7.5946L33.0338 2.12556C32.8316 1.38976 32.3514 0.764245 31.6972 0.384476C31.043 0.00470625 30.2674 -0.0987409 29.5384 0.0965388L2.1277 7.42506C1.76273 7.52102 1.42033 7.68976 1.12054 7.9214C0.820757 8.15304 0.569608 8.44293 0.3818 8.77409C0.192943 9.1012 0.0709264 9.46341 0.0230007 9.83921C-0.0249251 10.215 0.00221729 10.5967 0.102815 10.9617L1.44194 15.9604C1.44194 15.9859 1.44194 16.0133 1.44194 16.0406V32.0832C1.44194 32.8568 1.74535 33.5987 2.28543 34.1457C2.8255 34.6927 3.558 35 4.32178 35H33.1202C33.8839 35 34.6164 34.6927 35.1565 34.1457C35.6966 33.5987 36 32.8568 36 32.0832V16.0406C36 15.6538 35.8483 15.2829 35.5783 15.0094C35.3082 14.7359 34.942 14.5822 34.5601 14.5822ZM30.2691 2.91492L31.3491 6.93832L27.2777 8.03213L22.2164 5.07155L30.2691 2.91492ZM18.2656 6.12343L23.3269 9.08401L16.6781 10.8614L11.6168 7.90452L18.2656 6.12343ZM3.9744 14.2577L2.89446 10.2325L7.66419 8.9564L12.7255 11.9206L3.9744 14.2577ZM33.1202 32.0832H4.32178V17.499H33.1202V32.0832Z" fill="#F5B324"/>
                </svg>

                Selecione o Filme
           </h1>
           <div className={styles.moviesLinksHome}>
            {movies.map((movie:Movie) => (
                    <Link className={styles.movieHome} key={movie.id} to={`/sala-poltronas/${movie.id}`}>
                        <div>
                            <img src={`/assets/${movie.img}`} width={220} height={250} alt={movie.name} />
                            
                        </div>
                        
                        <div className={styles.infoMovieHome}>
                            <div className={styles.MovieTitleContainer}>
                                <h2>{movie.name}</h2>
                                <p>Duração: {movie.time}</p>
                                <p>{movie.audio}</p>
                            </div>
                            
                            <div className={styles.movieScheduleHome}>
                                <h3 className={styles.scheduleTitle}>Horários</h3>
                                {movie.schedule.map(item => 
                                    <div className={styles.dayHoursContainer}>
                                     <p><strong>{item.day}</strong></p>
                                     <ul>{item.hours.map(hour => <li>{hour}h</li>)}</ul>
                                    </div>
                                )}

                            </div>
                        </div>
                    

                    </Link>
                ))}
           </div>
            
        </main>
    );
}