import { Component } from 'react';

import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

import { StyledFeedbacksContainer } from './feedback.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.round((good / totalFeedbacks) * 100);
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbacksPerc = this.countPositiveFeedbackPercentage();

    return (
      <StyledFeedbacksContainer>
        <Section title="Please, leave the feedback about service">
          <FeedbackOptions
            onClick={this.onLeaveFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              bad={bad}
              neutral={neutral}
              good={good}
              total={total}
              percentagePositive={positiveFeedbacksPerc}
            />
          )}
        </Section>
      </StyledFeedbacksContainer>
    );
  }
}
