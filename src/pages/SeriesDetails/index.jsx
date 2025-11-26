import { useEffect, useState } from 'react';
import { Background, Container, ContainerMovies, Cover, Info } from './styles';
import {
  getSeriesById,
  getSeriesCredits,
  getSeriesSimilar,
  getSeriesVideo,
} from '../../services/getData';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import SpanGenres from '../../components/SpanGenres';
import Credits from '../../components/Credits';
import Slider from '../../components/Slider';

const SeriesDetails = () => {
  const [series, setSeries] = useState();
  const [seriesCredits, setSeriesCredits] = useState();
  const [seriesSimilar, setSeriesSimilar] = useState();
  const [seriesVideos, setSeriesVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getAllDatas = async () => {
      Promise.all([
        getSeriesById(id),
        getSeriesCredits(id),
        getSeriesSimilar(id),
        getSeriesVideo(id),
      ])
        .then(([series, credits, similar, videos]) => {
          setSeries(series);
          setSeriesCredits(credits);
          setSeriesSimilar(similar);
          setSeriesVideos(videos);
        })
        .catch((error) => console.error(error));
    };

    getAllDatas();
  }, []);

  return (
    <>
      {series && (
        <>
          <Background image={getImages(series.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(series.poster_path)} alt={series.title} />
            </Cover>
            <Info>
              <h2>{series.name}</h2>
              <SpanGenres genres={series.genres} />
              <p>{series.overview}</p>
              <div>
                <Credits credits={seriesCredits} />
              </div>
            </Info>
          </Container>
        </>
      )}
      <ContainerMovies>
        {seriesVideos &&
          seriesVideos.map((video) => (
            <div key={video.id}>
              <h4>{video.name}</h4>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title="Youtube Video Player"
                height="500px"
                width="100%"
              ></iframe>
            </div>
          ))}
      </ContainerMovies>
      {seriesSimilar && <Slider info={seriesSimilar} title="Filmes Similares" media="tv"></Slider>}
    </>
  );
};

export default SeriesDetails;
