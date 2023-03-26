import PropTypes from 'prop-types';

import { NoFeedbacks } from './feedback.styled';

export const Notification = ({ message }) => (
  <NoFeedbacks>{message}</NoFeedbacks>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
