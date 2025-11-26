import { useEffect, useState } from 'react';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { getPopularSeries, getSeriesById, getTopSeries } from '../../services/getData';

const Tv = () => {
  const [showModal, setShowModal] = useState(false);
  const [series, setSeries] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getAllDatas = async () => {
      Promise.all([getPopularSeries(), getTopSeries(), getSeriesById(id)])
        .then(([popularSeries, topSeries, series]) => {
          setPopularSeries(popularSeries);
          setTopSeries(topSeries);
          setSeries(series);
        })
        .catch((error) => console.error(error));
    };
    getAllDatas();
  }, [id]);

  return (
    <>
      {series && (
        <Background $img={getImages(series.backdrop_path)}>
          <Container>
            <Info>
              {showModal && <Modal movieId={series.id} setShowModal={setShowModal} />}
              <h1>{series.name}</h1>
              <p>{series.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/series-details/${series.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(series.poster_path)} alt="Poster do Filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topSeries && (
        <Slider info={topSeries} title="Séries mais bem classificadas" media="tv"></Slider>
      )}
      {popularSeries && <Slider info={popularSeries} title="Séries Populares" media="tv"></Slider>}
    </>
  );
};

export default Tv;
