export function ButtonItem({ feedback, addFeedback }) {
  return (
    <li>
      <button type="button" onClick={() => addFeedback(feedback)}>
        {feedback.charAt(0).toUpperCase() + feedback.slice(1)}
      </button>
    </li>
  );
}
