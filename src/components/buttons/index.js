import React, {Component} from 'react';
require('./styles.css');

export class Btn extends Component{
    render (){
        return (
            <button className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

export const AddBtn = (props) => (
    <Btn {...props} className="btn-add">
        {props.children}
    </Btn>
);

export const ClearBtn = (props) => (
    <Btn {...props} className="btn btn-clear">
        {props.children}
    </Btn>
);

export const EditBtn = (props) => (
    <Btn {...props} className="btn btn-edit">
        {props.children}
    </Btn>
);

export const PlusBtn = (props) => (
    <Btn {...props} className="btn btn-plus">
        {props.children}
    </Btn>
);

export const DeleteBtn = (props) => (
    <Btn {...props} className="btn btn-delete">
        {props.children}
    </Btn>
);