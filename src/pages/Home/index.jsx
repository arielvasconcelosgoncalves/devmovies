import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background } from './styles';

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await api.get('/movie/popular');
      setMovie(data.data.results[0]);
      //console.log(movie);
    };
    getMovies();
  }, []);

  return (
    <Background $img={`https://image.tmdb.org/t/p/original/jJ8AiqKKiZWZaiYMyhlF0FNH4xJ.jpg`}>
      <h1>{movie?.original_title}</h1>
    </Background>
  );
};

export default Home;
