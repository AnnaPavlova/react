import React from 'react';
import PropTypes from 'prop-types';
import {EditTaskBtn, DeleteTaskBtn} from './task-actions';
import {Checkbox} from '../form/index';
require('./styles.css');

export const TasksList = ({ tasks, onToggleTask, onRemoveTask, onEditTask }) => (
    <ul className="tasks-list">
        {tasks.map((item, index) => (
            <li className={item.completed ? 'completed' : ''} key={item.id}>
                <Checkbox checked={item.completed} onChange={ onToggleTask } id={item.id}/>
                    {item.title}
                <EditTaskBtn onClick={ onEditTask } id={item.id}>Edit</EditTaskBtn>
                <DeleteTaskBtn onClick={ onRemoveTask } id={item.id}>Remove</DeleteTaskBtn>
            </li>
        ))}
    </ul>
)

TasksList.propTypes = {
    items: PropTypes.array
};