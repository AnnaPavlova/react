import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import store from './store';

import {TasksList} from './components/tasks-list/index';

const Tasks = connect(
    state => ({
        tasks: state.tasks
    }),
    dispatch => ({
        onSelect: (id) => {
            return dispatch({
                type: 'TOGGLE_TASK',
                payload: id
            });
        }
    })
)(TasksList);

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <h1>Todo</h1>
                </div>
                <div className="app-main">
                    <Tasks/>
                </div>
            </div>
        );
    }
}

export default App;
