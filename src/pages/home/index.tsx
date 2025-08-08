
import { movies, Movie } from '../../data/movies';
import { Link } from 'react-router-dom';
import styles from './home.module.css'

export function Home() {

  const popularMovie = movies.find(item => item.popular);

  const formatDay = (fullDayString: string) => {
    const [dayOfWeek, date] = fullDayString.split(", ");
    const shortDate = date.slice(0, 5);

    return `${dayOfWeek}- ${shortDate}`;
  };

  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.homeTitle}></h1>

      {popularMovie && (
        <div
          key={popularMovie.id}
          className={styles.moviesBanner}
          style={{ backgroundImage: `url(${popularMovie.banner})` }}
        >

          <div className={styles.bannerContainer}>
            <div className={styles.bannerText}>
              <p>Destaque</p>
              <h1>{popularMovie.name}</h1>
              <Link to={`/cine-room/${popularMovie.id}`}>Comprar</Link>
            </div>

            <div className={styles.bannerInfo}>
              <p>Duração: {popularMovie.time}</p>

              <div className={styles.scheduleBannerContainer}>
                {popularMovie.schedule.map((schedule, index) => (
                  <div key={index}>
                    <h4 key={schedule.day}>
                      {formatDay(schedule.day)}
                    </h4>
                    <div className={styles.scheduleBanner} >
                      {schedule.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.moviesLinksHome}>
        {movies.filter(movie => movie.popular === false).map((movie: Movie) => (
          <Link className={styles.movieHome} key={movie.id} to={`/cine-room/${movie.id}`}>
            <img src={`/assets/${movie.img}`} width={220} height={250} alt={movie.name} />
            <h3 className=''>{movie.name}</h3>
            <p className={styles.movieRating}>Duração: {movie.time} <span style={{
              backgroundColor:
                movie.rating === "L"
                  ? "#4CAF50"
                  : movie.rating === "10"
                    ? "#FFEB3B"
                    : movie.rating === "12"
                      ? "#FBC02D"
                      : movie.rating === "14"
                        ? "#FF9800"
                        : movie.rating === "16"
                          ? "#F44336"
                          : movie.rating === "18"
                            ? "#B71C1C"
                            : "#9E9E9E",
            }}>{movie.rating}</span></p>
          </Link>
        ))}
      </div>
    </main>
  );
}
