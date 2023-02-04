import PropTypes from 'prop-types';
import '../ButtonItem/ButtonItem.css';

export function ButtonItem({ feedback, addFeedback }) {
  return (
    <li>
      <button
        className="button"
        type="button"
        onClick={() => addFeedback(feedback)}
      >
        {feedback.charAt(0).toUpperCase() + feedback.slice(1)}
      </button>
    </li>
  );
}

ButtonItem.propTypes = {
  feedback: PropTypes.string.isRequired,
  addFeedback: PropTypes.func.isRequired,
};
