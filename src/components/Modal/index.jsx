import { useEffect, useState } from 'react';
import { Container, Background } from './styles';
import { getSeriesTrailer } from '../../services/getData';

const Modal = ({ movieId, setShowModal }) => {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const getDataTrailer = async () => {
      setTrailer(await getSeriesTrailer(movieId));
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
