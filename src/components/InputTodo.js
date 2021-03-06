import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({ title: '' });
  const [placeholder, setPlaceholder] = useState('Add Todo...');
  const onChange = (e) => {
    setInputText({ title: e.target.value });
    setPlaceholder('Add Todo...');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({ title: '' });
    } else {
      setPlaceholder("Can't add empty task.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder={placeholder}
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
