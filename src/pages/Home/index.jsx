import api from '../../services/api';

const getMovies = async () => {
  const data = await api.get('/movie/popular');
  console.log(data);
};
getMovies();

const Home = () => {
  return (
    <div>
      <h1>Sou a Home</h1>
    </div>
  );
};

export default Home;
