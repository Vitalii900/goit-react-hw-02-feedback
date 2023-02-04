import PropTypes from 'prop-types';
import '../Statistics/Statistics.css';

export function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <div className="statistics">
        <p className="stat stat_good">Good: {state.good}</p>
        <p className="stat stat_neutral">Neutral: {state.neutral}</p>
        <p className="stat stat_bad">Bad: {state.bad}</p>
        <p className="stat stat_total">Total: {countTotalFeedback()}</p>
        <p className="stat stat_positive">
          Positive feedback: {countPositiveFeedbackPercentage()} %
        </p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};