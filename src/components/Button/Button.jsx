import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ btnType, text, onCLick }) => {
  const submitBtn = btnType === 'submit';
  const ordinaryBtn = btnType === 'button';

  return (
    <>
      {submitBtn && (
        <button type={btnType} className={s.button}>
          {text}
        </button>
      )}
      {ordinaryBtn && (
        <button type={btnType} className={s.button} onClick={onCLick}>
          {text}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onCLick: PropTypes.func,
};

export default Button;
