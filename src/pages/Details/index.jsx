import { useEffect, useState } from 'react';
import { Container } from './styles';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideo,
} from '../../services/getData';
import { useParams } from 'react-router-dom';

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
    <Container>
      <h1>Details</h1>
    </Container>
  );
};

export default Details;
