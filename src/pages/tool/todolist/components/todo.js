import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from "antd";

const Todo = ({onClick, completed, text, delClick}) => (
    <li
        className="list-group-li"
    >
        <Checkbox
            className="check-box"
            // onChange={this.onChange}
            checked={completed}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={onClick}
        >
            {text}
        </Checkbox>
        <button
            className="list-group-li-del"
            onClick={delClick}
        >
            删除
        </button>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo