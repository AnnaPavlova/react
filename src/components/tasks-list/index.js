import React from 'react';
require('./styles.css');
import {EditBtn} from '../buttons/index';
import {Checkbox} from '../form/index';

export const TasksList = ({ tasks }) => (
    <ul className="tasks-list">
        {tasks.map((item, index) => (
            <li className={item.isDone ? 'done' : ''} key={index}>
                <Checkbox checked={item.isDone}/>
                {item.title}
                <EditBtn/>
            </li>
        ))}
    </ul>
)

TasksList.propTypes = {
    items: React.PropTypes.array
};