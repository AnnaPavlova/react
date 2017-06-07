import React from 'react';
import PropTypes from 'prop-types';
import {EditBtn} from '../buttons/index';
import {Checkbox} from '../form/index';
require('./styles.css');

export const TasksList = ({ tasks, onSelect }) => (
    <ul className="tasks-list">
        {tasks.map((item, index) => (
            <li className={item.isDone ? 'done' : ''} key={index}>
                <Checkbox checked={item.isDone} onChange={ onSelect } />
                    {item.title}
                <EditBtn/>
            </li>
        ))}
    </ul>
)

TasksList.propTypes = {
    items: PropTypes.array
};