import { useEffect, useState } from 'react';
import { Container, Background } from './styles';
import api from '../../services/api';

const Modal = ({ movieId, setShowModal }) => {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const getTrailer = async () => {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`);
      setTrailer(results[0]);
      //console.log(results);
    };
    getTrailer();
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
