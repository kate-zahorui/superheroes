import s from './Button.module.css';

const Button = ({ btnType, text, onBtnClick }) => {
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
        <button type={btnType} className={s.button} onClick={onBtnClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
