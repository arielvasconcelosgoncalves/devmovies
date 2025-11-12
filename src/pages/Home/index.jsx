import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get('/movie/popular');
      setMovie(results[0]);
      //console.log(results);
    };
    const getTopMovies = async () => {
      const {
        data: { results },
      } = await api.get('/movie/top_rated');
      setTopMovies(results);
      console.log(results);
    };
    getTopMovies();
    getMovies();
  }, []);

  return (
    <>
      <Background $img={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}>
        <Container>
          <Info>
            <h1>{movie?.title}</h1>
            <p>{movie?.overview}</p>
            <ContainerButtons>
              <Button red>Assista Agora</Button>
              <Button>Assista o Trailer</Button>
            </ContainerButtons>
          </Info>
          <Poster>
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt="Poster do Filme"
            />
          </Poster>
        </Container>
      </Background>
      {topMovies && <Slider info={topMovies} title="Top Filmes"></Slider>}
    </>
  );
};

export default Home;
