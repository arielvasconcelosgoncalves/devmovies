import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Menu, Li } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo do DevMovies" />
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
