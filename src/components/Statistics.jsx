import PropTypes from 'prop-types';

import { Totals } from './feedback.styled';

export const Statistics = ({
  bad,
  neutral,
  good,
  total,
  percentagePositive,
}) => (
  <>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    <p>Good: {good}</p>
    <Totals>Total: {total}</Totals>
    <Totals>Positive feedbacks: {percentagePositive}%</Totals>
  </>
);

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentagePositive: PropTypes.number.isRequired,
};
