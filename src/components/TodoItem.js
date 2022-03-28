import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  return <li>{todo.title}</li>;
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
};
export default TodoItem;
