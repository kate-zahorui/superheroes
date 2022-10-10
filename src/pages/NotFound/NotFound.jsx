import { Link } from 'react-router-dom';
import { Container } from '../../components';

import svg from '../../images/sprite.svg';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <Container>
      <Link to="/" className={s.backBtn}>
        <svg width="24" height="24">
          <use href={`${svg}#icon-goBackArrow`}></use>
        </svg>
        <span>Back to Home page</span>
      </Link>
      <div>
        <p>Error 404. NotFound</p>
      </div>
    </Container>
  );
};

export default NotFound;
