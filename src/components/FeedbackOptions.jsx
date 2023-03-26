import PropTypes from 'prop-types';

import { StyledButton } from './feedback.styled';

export const FeedbackOptions = ({ options, onClick }) => (
  <>
    {options.map(option => (
      <StyledButton
        type="button"
        name={option}
        onClick={e => onClick(e)}
        key={option}
      >
        {option}
      </StyledButton>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
