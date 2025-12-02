import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../services/getData';
import Card from '../../components/Card';
import { Container } from './styles';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('q');

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) => {
        setResults(res);
      });
    }
  }, [query]);

  return (
    <Container>
      <h1>Resultados para: "{query}"</h1>

      {results.length === 0 && <p>Nenhum resultado encontrado.</p>}

      <div className="grid">
        {results.map((movie) => (
          <Card key={movie.id} item={movie} media="movie" />
        ))}
      </div>
    </Container>
  );
};

export default SearchPage;
