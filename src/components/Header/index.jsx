import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Container, Menu, Li, SearchDiv } from './styles';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const [search, setSearch] = useState('');
  const { isActive, setIsActive } = useSearch();

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim().length > 0) {
      navigate(`/search?q=${search}`);
      setSearch('');
    }
  };

  const handleClick = () => {
    if (search.trim().length > 0) {
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
      <SearchDiv>
        <Search className="search-icon" onClick={handleClick} />
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </SearchDiv>
      <Menu>
        <Li
          $isActive={isActive[0]}
          onClick={() => setIsActive([true, false, false])}
          className="home"
        >
          <Link to="/">Home</Link>
        </Li>
        <Li
          $isActive={isActive[1]}
          onClick={() => setIsActive([false, true, false])}
          className="filmes"
        >
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li
          $isActive={isActive[2]}
          onClick={() => setIsActive([false, false, true])}
          className="series"
        >
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};
export default Header;
