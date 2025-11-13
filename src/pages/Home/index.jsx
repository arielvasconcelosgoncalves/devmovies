import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();

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
      //console.log(results);
    };
    const getPopularMovies = async () => {
      const {
        data: { results },
      } = await api.get('/movie/popular');
      setPopularMovies(results);
      //console.log(results);
    };
    const getTopSeries = async () => {
      const {
        data: { results },
      } = await api.get('/tv/top_rated');
      setTopSeries(results);
      //console.log(results);
    };
    const getPopularSeries = async () => {
      const {
        data: { results },
      } = await api.get('/tv/popular');
      setPopularSeries(results);
      //console.log(results);
    };
    const getTopPeople = async () => {
      const {
        data: { results },
      } = await api.get('/person/popular');
      setTopPeople(results);
      console.log(results);
    };
    getTopPeople();
    getPopularSeries();
    getTopSeries();
    getPopularMovies();
    getTopMovies();
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          <Container>
            <Info>
              {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="Poster do Filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title="Filmes mais bem classificados"></Slider>}
      {popularMovies && <Slider info={popularMovies} title="Filmes Populares"></Slider>}
      {topSeries && <Slider info={topSeries} title="Séries mais bem classificadas"></Slider>}
      {popularSeries && <Slider info={popularSeries} title="Séries Populares"></Slider>}
      {topPeople && <Slider info={topPeople} title="Artistas mais populares"></Slider>}
    </>
  );
};

export default Home;
