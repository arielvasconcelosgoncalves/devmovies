import { useEffect, useState } from 'react';
import { Container, Background } from './styles';
import { getSeriesTrailer, getTrailer } from '../../services/getData';
import { useSearch } from '../../context/SearchContext';

const Modal = ({ movieId, setShowModal }) => {
  const [trailer, setTrailer] = useState();
  const { isActive } = useSearch();

  const type = isActive[0] || isActive[1] ? 'movie' : 'tv';

  useEffect(() => {
    const getDataTrailer = async () => {
      setTrailer(await (type === 'movie' ? getTrailer(movieId) : getSeriesTrailer(movieId)));
    };
    getDataTrailer();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      {trailer && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
};

export default Modal;
