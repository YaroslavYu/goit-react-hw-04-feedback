import { useState } from 'react';

import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

import { StyledFeedbacksContainer } from './feedback.styled';
import { StyledButton } from './feedback.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setnNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const totalFeedbacks = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedbacks) * 100);
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setnNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        setGood(0);
        setnNeutral(0);
        setBad(0);
        break;
    }
  };

  return (
    <StyledFeedbacksContainer>
      <Section title="Please, leave the feedback about service">
        <FeedbackOptions
          onClick={onLeaveFeedback}
          options={Object.keys(feedbacks)}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <StyledButton
              type="button"
              name="reset"
              onClick={e => onLeaveFeedback(e.target.name)}
            >
              Reset
            </StyledButton>
            <Statistics
              bad={bad}
              neutral={neutral}
              good={good}
              total={totalFeedbacks}
              percentagePositive={countPositiveFeedbackPercentage()}
            />
          </>
        )}
      </Section>
    </StyledFeedbacksContainer>
  );
};
