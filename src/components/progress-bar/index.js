import React, {Component} from 'react';
import PropTypes from 'prop-types';
require('./styles.css');

export class ProgressBar extends Component{
    render (){
        let progressStyles = {
            width: this.props.progress + '%'
        };
        return (
            <div className="progress-bar" onClick={this.props.onClick}>
                <div className="progress-container" style={progressStyles}>
                    <div className="progress-holder" />
                </div>
            </div>
        )
    }
}
ProgressBar.propTypes = {
    progress: PropTypes.number
};