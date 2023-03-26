import styled from 'styled-components';

export const StyledFeedbacksContainer = styled.div`
  height: 100vh;
  text-align: center;

  font-size: 32px;
`;

export const StyledButton = styled.button`
  text-transform: capitalize;
  padding: 10px;
  width: 200px;
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Totals = styled.p`
  font-weight: 700;
`;

export const NoFeedbacks = styled.p`
  color: red;
`;
