import React, {Component} from 'react';
import './App.css';
import {mock} from './mock';
import {CheckboxController, SearchForm, AddForm} from './components/form/index';
import {ProgressBar} from './components/progress-bar/index';
import {CategoriesList} from './components/categories-list/index';
import {TasksList} from './components/tasks-list/index';
import { connect } from 'react-redux';
import store from './store';

store.subscribe(data => {
    console.log(data);
})

// const Progress = connect(
//     store => ({
//         progress: 66
//     }),
//     dispatch => ({
//         onClick: () => dispatch({type:'INCREMENT'})
// })
// )(ProgressBar);

var Progress = connect(
    function (store) {
        return {
            progress: 66
        }
    },
    function (dispatch) {
        return {
            onClick: function () {
                return dispatch({type:'INCREMENT'});
            }
        }
    }
)(ProgressBar);

class App extends Component {
    getTasksToShow(){
        let tasksToShow = [];
        mock.categories.forEach(function(item) {
            if (item.isActive) {
                tasksToShow = item.tasks
            }
        });
        return tasksToShow;
    }

    testRedux (){
        store.dispatch({type:'INCREMENT'})
    }

    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <strong className="app-title">To-Do List</strong>
                    <div className="align-right">
                        <div className="align-left">
                            <CheckboxController checked={mock.filters.showDone}>Show done</CheckboxController>
                        </div>
                        <div className="align-left">
                            <SearchForm />
                        </div>
                    </div>
                </div>
                <div className="app-main">
                    <Progress />
                    <ProgressBar progress={mock.progress} onClick={this.testRedux}/>
                    <div className="container">
                        <div className="app-sidebar">
                            <AddForm placeholder="Enter category title"/>
                            <div className="content-scroll-holder">
                                <CategoriesList categories={mock.categories}/>
                            </div>
                        </div>
                        <div className="app-content">
                            <AddForm placeholder="Enter task title"/>
                            <div className="content-scroll-holder">
                                <TasksList tasks={this.getTasksToShow()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
