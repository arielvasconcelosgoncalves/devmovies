import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Menu, Li, Search } from './styles';
import { useState } from 'react';

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const [search, setSearch] = useState('');
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim().length > 0) {
      navigate(`/search?q=${search}`);
      setSearch('');
    }
  };

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="Logo do DevMovies" />
      <Search>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Search>
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('movies')}>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li $isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
