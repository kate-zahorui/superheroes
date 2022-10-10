import { Link } from 'react-router-dom';

import { Container, HeroInfo } from '../../components';

import svg from '../../images/sprite.svg';
import s from './HeroDetails.module.css';

const HeroDetails = () => {
  return (
    <div>
      <Container>
        <Link to="/" className={s.backBtn}>
          <svg width="24" height="24">
            <use href={`${svg}#icon-goBackArrow`}></use>
          </svg>
          <span>Back to Home page</span>
        </Link>
      </Container>

      <HeroInfo />
    </div>
  );
};

export default HeroDetails;
