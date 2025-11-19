import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import DefaultLayout from '../layout/DefaultLayout';
import Details from '../pages/Details';
import SeriesDetails from '../pages/SeriesDetails';

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/series-details/:id" element={<SeriesDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
