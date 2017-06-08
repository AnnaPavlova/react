import React from 'react';
import PropTypes from 'prop-types';
import {EditBtn} from '../buttons/index';
import {Checkbox} from '../form/index';
require('./styles.css');

export const TasksList = ({ tasks, onSelect }) => (
    <ul className="tasks-list">
        {tasks.map((item, index) => (
            <li className={item.completed ? 'completed' : ''} key={item.id}>
                <Checkbox checked={item.completed} onChange={ onSelect } id={item.id}/>
                    {item.title}
                <EditBtn>Edit</EditBtn>
            </li>
        ))}
    </ul>
)

TasksList.propTypes = {
    items: PropTypes.array
};