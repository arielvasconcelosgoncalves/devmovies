import { useEffect, useState } from 'react';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById, getPopularMovies, getTopMovies } from '../../services/getData';

const Movie = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getAllDatas = async () => {
      Promise.all([getPopularMovies(), getTopMovies(), getMovieById(id)])
        .then(([popularMovies, topMovies, movie]) => {
          setPopularMovies(popularMovies);
          setTopMovies(topMovies);
          setMovie(movie);
        })
        .catch((error) => console.error(error));
    };
    getAllDatas();
  }, [id]);

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
      {topMovies && (
        <Slider info={topMovies} title="Filmes mais bem classificados" media="movie"></Slider>
      )}
      {popularMovies && (
        <Slider info={popularMovies} title="Filmes Populares" media="movie"></Slider>
      )}
    </>
  );
};

export default Movie;
