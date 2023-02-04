import React from 'react';
import { Section } from '../components/Section';
import { ButtonItem } from './ButtonItem/ButtonItem';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import '../components/App.css';

const feedbacks = ['good', 'neutral', 'bad'];

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (good === 0) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  };

  render() {
    return (
      <div>
        <div>
          <Section title={'feedback'}>
            <h1>Please leave feedback</h1>
            <ul className="list">
              {feedbacks.map(feedback => (
                <ButtonItem
                  key={feedback}
                  feedback={feedback}
                  addFeedback={this.addFeedback}
                ></ButtonItem>
              ))}
            </ul>
          </Section>
        </div>
        {this.countTotalFeedback() === 0 ? (
          <Notification></Notification>
        ) : (
          <Section title={'statistics'}>
            <Statistics
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}