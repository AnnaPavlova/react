import React, {Component} from 'react';
import {EditBtn, DeleteBtn} from '../buttons/index';
require('./styles.css');

export class EditTaskBtn extends Component{
    constructor(...args) {
        super(...args);
        this.editTask = this.editTask.bind(this);
    }
    editTask (e){
        e.preventDefault();
        return this.props.onClick(this.props.id);
    }
    render (){
        return (
            <EditBtn onClick={this.editTask}>Edit</EditBtn>
        )
    }
}

export class DeleteTaskBtn extends Component{
    constructor(...args) {
        super(...args);
        this.removeTask = this.removeTask.bind(this);
    }
    removeTask (e){
        e.preventDefault();
        return this.props.onClick(this.props.id);
    }
    render (){
        return (
            <DeleteBtn onClick={this.removeTask}>Remove</DeleteBtn>
        )
    }
}