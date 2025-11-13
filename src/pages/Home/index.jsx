import { useEffect, useState } from 'react';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import {
  getMovies,
  getPopularMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from '../../services/getData';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getAllDatas = async () => {
      setTopPeople(await getTopPeople());
      setPopularSeries(await getPopularSeries());
      setTopSeries(await getTopSeries());
      setPopularMovies(await getPopularMovies());
      setTopMovies(await getTopMovies());
      setMovie(await getMovies());
    };
    getAllDatas();
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
                <Button red onClick={() => navigate(`/details/${movie.id}`)}>
                  Assista Agora
                </Button>
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
