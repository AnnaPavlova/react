import React, {Component} from 'react';
import {ClearBtn, AddBtn} from '../buttons/index';
require('./styles.css');

export class Checkbox extends Component{

    toggleChecked (e){
        e.preventDefault()
        return this.props.onChange(!this.props.checked);
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
    checked: React.PropTypes.bool
}

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
    saveValue (e){
        e.preventDefault();
        this.props.onSubmit(this.textInput.value)
    }
    render (){
        return (
            <div className="add-form">
                <form action="#">
                    <input ref={(input) => { this.textInput = input; }} type="text" value="" placeholder={this.props.placeholder}/>
                    <AddBtn onClick={this.saveValue}>Add</AddBtn>
                </form>
            </div>
        )
    }
}