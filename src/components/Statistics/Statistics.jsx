export function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()} %</p>
    </div>
  );
}
