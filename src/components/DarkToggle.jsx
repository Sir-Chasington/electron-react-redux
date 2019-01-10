import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { darkTheme } from '../actions/darkTheme';

class DarkToggle extends Component {
    darkToggle = (e) => {
        this.props.darkTheme(e.target.checked);
    }

    render() {
        const { isDarkSet } = this.props;
        return (
            <div className="darkToggle">
                <div className={`theme ${isDarkSet ? 'dark-font' : ''}`}>{isDarkSet ? 'Light' : 'Dark'} Theme</div>
                <label className="switch">
                    <input type="checkbox" onChange={this.darkToggle} />
                    <span className="knob" />
                </label>
            </div>
        );
    }
}

DarkToggle.propTypes = {
    darkTheme: PropTypes.func.isRequired,
    isDarkSet: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isDarkSet: state.darkTheme.isDarkSet,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        darkTheme,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkToggle);
