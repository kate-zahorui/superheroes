import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const Btn = ({ btnType, text, onCLick }) => {
  const submitBtn = btnType === 'submit';
  const ordinaryBtn = btnType === 'button';

  return (
    <>
      {submitBtn && (
        <Button type={btnType} variant="contained">
          {text}
        </Button>
      )}
      {ordinaryBtn && (
        <Button type={btnType} variant="contained" onClick={onCLick}>
          {text}
        </Button>
      )}
    </>
  );
};

Btn.propTypes = {
  btnType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onCLick: PropTypes.func,
};

export default Btn;
