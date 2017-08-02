import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import store from './store';

import {TasksList} from './components/tasks-list/index';
import {AddForm} from './components/form/index';

const Tasks = connect(
    state => ({
        tasks: state.tasks
    }),
    dispatch => ({
        onToggleTask: id =>
            dispatch({
                type: 'TOGGLE_TASK',
                payload: id
            }),
        onRemoveTask: id =>
            dispatch({
                type: 'REMOVE_TASK',
                payload: id
            }),
        onEditTask: id =>
            dispatch({
                type: 'EDIT_TASK',
                payload: id
            })
    })
)(TasksList);

const AddTaskForm = connect(
    null,
    dispatch => ({
        onSubmit: value =>
            dispatch({
                type: 'ADD_TASK',
                payload: value
            })
    })
)(AddForm);

const App = () => (
    <div className="app">
        <div className="app-header">
            <h1>Todo</h1>
        </div>
        <div className="app-main">
            <AddTaskForm placeholder="Please enter new task name" />
            <Tasks/>
        </div>
    </div>
);

export default App;
