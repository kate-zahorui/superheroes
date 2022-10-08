import { useDispatch } from 'react-redux';
import { deleteHero } from '../../redux/heroes/heroesOperations';

import svg from '../../images/sprite.svg';
import s from './ButtonDelete.module.css';

const ButtonDelete = ({ heroId }) => {
  const dispatch = useDispatch();

  const handleDeleteBtn = e => {
    e.preventDefault();
    dispatch(deleteHero(heroId));
  };

  return (
    <button type="button" className={s.button} onClick={handleDeleteBtn}>
      <svg className={s.button__icon} width="20" height="20">
        <use href={`${svg}#icon-delete`}></use>
      </svg>
    </button>
  );
};

export default ButtonDelete;
