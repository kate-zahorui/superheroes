import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getHeroes,
  addNewHero,
  updateHero,
} from '../../redux/heroes/heroesOperations';
import { HeroForm, HeroList } from '../../components';

// import s from "./Home.module.css";

const Home = () => {
  const { items, hero, isEditModeOn, isLoading, error } = useSelector(
    state => state.heroes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const handleFormSubmit = formData => {
    const { nickname, realName, description, superpowers, phrase } = formData;
    const newHero = {
      nickname,
      realName,
      originDescription: description,
      superpowers,
      catchPhrase: phrase,
    };

    switch (isEditModeOn) {
      case true:
        dispatch(updateHero({ heroId: hero.id, newHero }));
        break;
      case false:
        if (items.find(item => item.name === nickname)) {
          alert(`${nickname} is already in the list`);
        } else {
          dispatch(addNewHero(newHero));
        }
        break;

      default:
        return;
    }
  };

  const showHeroes = items.length > 0 && !error && !isLoading;
  const noHeroes = items.length === 0 && !error && !isLoading;

  return (
    <div>
      <HeroForm handleFormSubmit={handleFormSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error.message}</p>}
      {showHeroes && <HeroList />}
      {noHeroes && <p>There're no superheroes yet.</p>}
    </div>
  );
};

export default Home;
