import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ClearBtn, AddBtn} from '../buttons/index';
require('./styles.css');

export class Checkbox extends Component{
    constructor(...args) {
        super(...args);
        this.toggleChecked = this.toggleChecked.bind(this);
    }
    toggleChecked (e){
        e.preventDefault();
        return this.props.onChange(this.props.id);
    }
    render (){
        return (
            <span className={'checkbox ' + (this.props.checked ? 'checked' : '')}
                  onClick={this.toggleChecked}>
            </span>
        )
    }
}
Checkbox.propTypes = {
    checked: PropTypes.bool
};

export class CheckboxController extends Component{
    onChange (isChecked){
        return this.props.onChange(isChecked)
    }
    toggleChecked (e){
        e.preventDefault()
        return this.props.onChange(!this.props.checked);
    }
    render (){
        return (
            <div className="checkbox-controller">
                <Checkbox onChange={this.onChange} checked={this.props.checked}/>
                <span className="label" onClick={this.onClickLabel}>{this.props.children}</span>
            </div>
        )
    }
}

export class SearchForm extends Component{
    clearForm (e){
        e.preventDefault();
        this.textInput.value='';
    }
    onSubmit (e){
        e.preventDefault();
        this.props.onSubmit(this.textInput.value)
    }
    render (){
        return (
            <div className="search-form">
                <form action="#" onSubmit={this.onSubmit}>
                    <input ref={(input) => { this.textInput = input; }} type="text" value="" placeholder="Search"/>
                    <ClearBtn onClick={this.clearForm}/>
                </form>
            </div>
        )
    }
}

export class AddForm extends Component{
    constructor(...args) {
        super(...args);
        this.saveValue = this.saveValue.bind(this);
    }
    saveValue (e){
        e.preventDefault();
        this.props.onSubmit(this.textInput.value)
    }
    render (){
        return (
            <div className="add-form">
                <form action="#">
                    <input ref={(input) => { this.textInput = input; }} type="text" placeholder={this.props.placeholder}/>
                    <AddBtn onClick={this.saveValue}>Add</AddBtn>
                </form>
            </div>
        )
    }
}