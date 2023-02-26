import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BtnBack } from './ButtonBack.styled';

export const ButtonBack = ({ path }) => {
  const navigate = useNavigate();

  return (
    <BtnBack type="button" onClick={() => navigate(path)}>
      Go Back
    </BtnBack>
  );
};

ButtonBack.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
