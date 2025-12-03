import { useNavigate } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import { Container } from './styles';

const Card = ({ item, media }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {media ? (
        <>
          <img
            src={getImages(item.poster_path || item.profile_path)}
            onClick={() => navigate(`/${media}/${item.id}`)}
          />
          <h3>{item.title || item.name}</h3>
        </>
      ) : (
        <>
          <img src={getImages(item.poster_path || item.profile_path)} />
          <h3>{item.title || item.name}</h3>
        </>
      )}
    </Container>
  );
};

export default Card;
