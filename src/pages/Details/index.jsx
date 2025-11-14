import { useEffect, useState } from 'react';
import { Background, Container, Cover, Info } from './styles';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideo,
} from '../../services/getData';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';

const Details = () => {
  const [movie, setMovie] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();
  const [movieVideos, setMovieVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getAllDatas = async () => {
      Promise.all([getMovieById(id), getMovieCredits(id), getMovieSimilar(id), getMovieVideo(id)])
        .then(([movie, credits, similar, videos]) => {
          console.log([movie, credits, similar, videos]);
          setMovie(movie);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          setMovieVideos(videos);
        })
        .catch((error) => console.error(error));
    };

    getAllDatas();
  }, []);

  return (
    <>
      {movie && (
        <Background image={getImages(movie.backdrop_path)}>
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <div>Generos</div>
              <p>{movie.overview}</p>
            </Info>
          </Container>
        </Background>
      )}
    </>
  );
};

export default Details;
