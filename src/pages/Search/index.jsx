import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies, searchSeries } from '../../services/getData';
import Card from '../../components/Card';
import { Container } from './styles';
import { useSearch } from '../../context/SearchContext';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [resultsSeries, setResultsSeries] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('q');
  const { isActive } = useSearch();

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) => {
        setResults(res);
      });
    }
    if (query) {
      searchSeries(query).then((res) => {
        setResultsSeries(res);
      });
    }
  }, [query]);

  return (
    <Container>
      <h1>Resultados para: "{query}"</h1>

      {results.length === 0 && <p>Nenhum resultado encontrado.</p>}
      {isActive[0] && (
        <>
          <h2>Filmes:</h2>
          <div className="grid">
            {results.map((movie) => (
              <Card key={movie.id} item={movie} media="movie" />
            ))}
          </div>
          <h2>Séries:</h2>
          <div className="grid">
            {resultsSeries.map((movie) => (
              <Card key={movie.id} item={movie} media="movie" />
            ))}
          </div>
        </>
      )}
      {isActive[1] && (
        <>
          <h2>Filmes:</h2>
          <div className="grid">
            {results.map((movie) => (
              <Card key={movie.id} item={movie} media="movie" />
            ))}
          </div>
        </>
      )}
      {isActive[2] && (
        <>
          <h2>Séries:</h2>
          <div className="grid">
            {resultsSeries.map((movie) => (
              <Card key={movie.id} item={movie} media="movie" />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default SearchPage;
