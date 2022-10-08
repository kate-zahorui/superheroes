import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getHeroById } from '../../redux/heroes/heroesOperations';
import { Container } from '../';

// import s from "./HeroInfo.module.css";

const HeroInfo = () => {
  const { hero, isLoading, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getHeroById(id));
  }, [id, dispatch]);

  const showHero = hero && !error && !isLoading;

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error.message}</p>}
      {showHero && (
        <div>
          <h2>{hero.nickname}</h2>
          <div>
            <p>
              <span>Real name:</span>
              {hero.realName}
            </p>
            <p>
              <span>Origin description:</span>
              {hero.originDescription}
            </p>
            <p>
              <span>Superpowers:</span>
              {hero.superpowers}
            </p>
            <p>
              <span>Catch phrase:</span>
              {hero.catchPhrase}
            </p>
          </div>

          <div>
            <h3>Images</h3>
          </div>
        </div>
      )}
    </Container>
  );
};

export default HeroInfo;
