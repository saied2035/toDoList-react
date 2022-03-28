import PropTypes from 'prop-types';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};
export default TodoItem;
