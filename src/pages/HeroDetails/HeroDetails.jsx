import { Link } from 'react-router-dom';

import { HeroInfo } from '../../components';
import svg from '../../images/sprite.svg';

import s from './HeroDetails.module.css';

const HeroDetails = () => {
  return (
    <div>
      <Link to="/" className={s.backBtn}>
        <svg className={s.backBtn__icon} width="24" height="24">
          <use href={`${svg}#icon-goBackArrow`}></use>
        </svg>
        <span className={s.backBtn__text}>Back to Home page</span>
      </Link>
      <HeroInfo />
    </div>
  );
};

export default HeroDetails;
