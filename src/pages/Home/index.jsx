import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background } from './styles';

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get('/movie/popular');
      setMovie(results[1]);
      console.log(results);
    };

    getMovies();
  }, []);

  return (
    <Background $img={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}>
      <h1>{movie?.original_title}</h1>
      <h3>{movie?.overview}</h3>
    </Background>
  );
};

export default Home;
