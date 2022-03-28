import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number,
      PropTypes.string,
      PropTypes.bool]),
  )).isRequired,
};
export default TodosList;
