import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonDelete, Container } from '../';

import s from './HeroList.module.css';

const HeroList = () => {
  const { items } = useSelector(state => state.heroes);
  const navigate = useNavigate();

  const handleItemClick = e => {
    e.preventDefault();

    console.log(e.currentTarget);
    console.log(e.target.nodeName);
    if (
      e.target.nodeName !== 'BUTTON' &&
      e.target.nodeName !== 'svg' &&
      e.target.nodeName !== 'use'
    ) {
      navigate(`/${e.currentTarget.id}`);
    }
  };

  return (
    <Container>
      <div>
        <h2 className={s.title}>Superheroes</h2>
        <ul className={s.list}>
          {items.length > 0 &&
            items.map(item => (
              <li
                key={item.id}
                id={item.id}
                className={s.item}
                onClick={handleItemClick}
              >
                <div className={s.heroCard}>
                  <img src="" alt="" className={s.image} />
                  <h3 className={s.name}>{item.nickname}</h3>
                  <ButtonDelete heroId={item.id} />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default HeroList;
