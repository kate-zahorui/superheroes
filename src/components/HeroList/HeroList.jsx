import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';

import { getCloudImage } from '../../services/cloudinary';
import { ButtonDelete, Container } from '../';

import s from './HeroList.module.css';

const HeroList = () => {
  const { items } = useSelector(state => state.heroes);
  const navigate = useNavigate();

  const handleItemClick = e => {
    e.preventDefault();

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
      <div className={s.section}>
        <h2 className={s.title}>Superheroes</h2>
        <ul className={s.list}>
          {items.length > 0 &&
            items.map(item => (
              <li
                key={item._id}
                id={item._id}
                className={s.item}
                onClick={handleItemClick}
              >
                <Card>
                  <div className={s.heroCard}>
                    <img
                      src={getCloudImage(item.images[0])}
                      alt=""
                      className={s.image}
                    />
                    <h3 className={s.name}>{item.nickname}</h3>
                    <ButtonDelete heroId={item._id} />
                  </div>
                </Card>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default HeroList;
