// import { useSelector, useDispatch } from 'react-redux';

// import { deleteHero } from '../../redux/heroes/heroesOperations';

import { Container } from '../';

import s from './HeroList.module.css';

const HeroList = () => {
  // const { items } = useSelector(state => state.heroes);
  // const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <h2 className={s.title}>Superheroes</h2>
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.heroCard}>
              <img src="" alt="" className={s.image} />
              <h3 className={s.name}>Nickname</h3>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.heroCard}>
              <img src="" alt="" className={s.image} />
              <h3 className={s.name}>Nickname</h3>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.heroCard}>
              <img src="" alt="" className={s.image} />
              <h3 className={s.name}>Nickname</h3>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.heroCard}>
              <img src="" alt="" className={s.image} />
              <h3 className={s.name}>Nickname</h3>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.heroCard}>
              <img src="" alt="" className={s.image} />
              <h3 className={s.name}>Nickname</h3>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default HeroList;
