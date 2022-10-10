import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHeroes } from '../../redux/heroes/heroesOperations';
import { HeroForm, HeroList } from '../../components';

const Home = () => {
  const { items, isLoading, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const showHeroes = items.length > 0 && !error && !isLoading;
  const noHeroes = items.length === 0 && !error && !isLoading;

  return (
    <div>
      <HeroForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error.message}</p>}
      {showHeroes && <HeroList />}
      {noHeroes && <p>There're no superheroes yet.</p>}
    </div>
  );
};

export default Home;
