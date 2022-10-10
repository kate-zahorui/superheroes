import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';

import { getCloudImage } from '../../services/cloudinary';
import { getHeroById } from '../../redux/heroes/heroesOperations';
import { Btn, Container } from '../';

import { setIsEditModeOn } from '../../redux/heroes/heroesSlice';
import s from './HeroInfo.module.css';

const HeroInfo = () => {
  const { hero, isLoading, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    dispatch(getHeroById(id));
  }, [id, dispatch]);

  const handleEditBtnClick = e => {
    e.preventDefault();

    dispatch(setIsEditModeOn(true));
    navigate(`/`);
  };

  const showHero = hero && !error && !isLoading;

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error.message}</p>}
      {showHero && (
        <div className={s.section}>
          <Card>
            <div className={s.box}>
              <img
                src={getCloudImage(hero.images[0])}
                alt=""
                className={s.image}
              />
              <div className={s.info}>
                <h2 className={s.name}>{hero.nickname}</h2>
                <div>
                  <p className={s.text}>
                    <span className={s.text__name}>Real name:</span>
                    {hero.realName}
                  </p>
                  <p className={s.text}>
                    <span className={s.text__name}>Origin description:</span>
                    {hero.originDescription}
                  </p>
                  <p className={s.text}>
                    <span className={s.text__name}>Superpowers:</span>
                    {hero.superpowers}
                  </p>
                  <p className={s.text}>
                    <span className={s.text__name}>Catch phrase:</span>
                    {hero.catchPhrase}
                  </p>
                </div>

                <div className={s.imagesBox}>
                  <h3>Images</h3>
                </div>
                <Btn
                  btnType="button"
                  text="Edit"
                  onCLick={handleEditBtnClick}
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default HeroInfo;
