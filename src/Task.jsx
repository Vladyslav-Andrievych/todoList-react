import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, handleStatusChange, handleTaskDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => handleStatusChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => handleTaskDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  handleStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
};

export default Task;
